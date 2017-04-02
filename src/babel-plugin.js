import fp from 'path';
import {createPlugin} from 'extract-tags/babel-plugin';

const options = {
  taggerModule: 'styled-react',
  outputFileExtension: "css",
  outputPath: fp.join(__dirname, '../output'),
  taggerMembers: {
    global: {
    },
    '*': {
      taggedPrefix: ':local(.className) {',
      taggedSuffix: '}',
    }
  }
};

export default createPlugin(options);
