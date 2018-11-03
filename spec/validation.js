'use strict';

const argv = require('yargs')
  .example('$ npx mocha ./spec/validation.js', 'validate boostnote notes')
  .example(
    '$ npx mocha ./spec/validation.js -p ~/foo/bar/notes',
    'validate notes in ~/foo/bar/notes'
  )
  .describe('path', 'specify folder contain notes')
  .demandOption(['path'], 'Please provide path arguments to work with this tool')
  .alias('path', ['p'])
  .help('h').argv;

const fs = require('fs');
const path = require('path');
const cson = require('cson');
const { expect } = require('chai');

const PROJ_ROOT = argv.path;
const IGNORES = ['.git'];
const notesIndex = {};

describe('validation boostnote', () => {
  describe('validate boostnote tags', () => {
    const VALID_YEAR = ['2016', '2017', '2018', '2019', '2020', '2021'];
    const csonPaths = fs
      .readdirSync(PROJ_ROOT)
      .filter(p => IGNORES.find(i => i !== p))
      .map(p => path.join(PROJ_ROOT, p));

    csonPaths.forEach(csonPath => {
      let c = cson.load(csonPath);
      it('has `20xx` year record as first tag', () => {
        const errMsg = `\n\ttags of ${c.title}: ${JSON.stringify(c.tags)}`;
        expect(c.tags[0]).to.be.oneOf(VALID_YEAR, errMsg);
      });
    });
  });
});
