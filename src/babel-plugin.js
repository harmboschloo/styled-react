import path from "path";
import toHash from "string-hash";
import hashToString from "hash-to-string";
import { createPlugin } from "babel-plugin-extract-tags";

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const toClassName = hashToString(characters);

const taggedCallback = ({ tag, tagOptions, taggedContent }, types) => {
  const { outputPath, outputFileExtension } = tagOptions;
  const contentHash = toHash(taggedContent);
  if (tag.member === "global") {
    const outputContent = taggedContent;
    const filename = `global-${contentHash}.${outputFileExtension}`;
    const outputFilePath = path.join(outputPath, filename);
    const tagArguments = [];
    return { tagArguments, outputContent, outputFilePath };
  } else {
    const className = toClassName(contentHash);
    const outputContent = `.${className} {${taggedContent}}`;
    const filename = `${className}-${contentHash}.${outputFileExtension}`;
    const outputFilePath = path.join(outputPath, filename);
    const tagArguments = [types.stringLiteral(className)];
    return { tagArguments, outputContent, outputFilePath };
  }
};

const options = {
  taggerModules: ["styled-react", "styled-react/js"],
  outputFileExtension: "css",
  outputPath: path.join(__dirname, "../output"),
  taggerMembers: { "*": {} },
  taggedCallback
};

export default createPlugin(options);
