import path from "path";
import fs from "fs";
import test from "tape";
import { transformFileSync, transform } from "babel-core";

// const trim = str =>
//   str.replace(/^ +| +$/gm, '');

const clearActual = str => str.replace(/^\s+|\s+$/, "").trim();

const cleanExpected = str => str.replace(/\r/g, "").trim();

const defaultConfig = {
  given: "given.js",
  expected: "expected.js",
  outputs: []
};

const fixturesDir = path.join(__dirname, "fixtures");

const getConfig = fixtureDir => {
  const config = require(path.join(fixtureDir, "config.json"));
  return { ...defaultConfig, ...config };
};

const testCase = caseName =>
  test(`test ${caseName.replace(/[-]+/g, " ")}`, t => {
    const fixtureDir = path.join(fixturesDir, caseName);

    const config = getConfig(fixtureDir);

    const givenPath = path.join(fixtureDir, config.given);
    const expectedPath = path.join(fixtureDir, config.expected);

    const transformed = transformFileSync(givenPath);
    const actualCode = clearActual(transformed.code);
    const expectedCode = cleanExpected(
      fs.readFileSync(expectedPath, "utf8")
    ).trim();
    t.equal(actualCode, expectedCode, "should produce expected code");

    config.outputs.forEach((output, index) => {
      const actualOutputPath = path.join(fixtureDir, output.actual);
      const expectedOutputPath = path.join(fixtureDir, output.expected);

      const actualOutput = clearActual(
        fs.readFileSync(actualOutputPath, "utf8")
      );
      const expectedOutput = cleanExpected(
        fs.readFileSync(expectedOutputPath, "utf8")
      );
      t.equal(
        actualOutput,
        expectedOutput,
        `should produce expected output ${index}`
      );
    });

    t.end();
  });

fs.readdirSync(fixturesDir).forEach(testCase);
