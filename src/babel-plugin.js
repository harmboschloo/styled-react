import fp from 'path';
import {createPlugin} from 'extract-tags/babel-plugin';

const options = {
  taggerModules: ['styled-react', 'styled-react/js'],
  outputFileExtension: "css",
  outputPath: fp.join(__dirname, '../output'),
  taggedPrefix: ':local(.className) {',
  taggedSuffix: '}',
  taggerMembers: {
    global: {
      taggedPrefix: '',
      taggedSuffix: '',
    },
    '*': {
    }
  }
};

export default createPlugin(options);
