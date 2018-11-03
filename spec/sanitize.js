'use strict';

const argv = require('yargs')
  .example('$ npx mocha ./spec/validation.js', 'validate boostnote notes')
  .example(
    '$ npx mocha ./spec/validation.js -p ~/foo/bar/notes',
    'validate notes in ~/foo/bar/notes'
  )
  .describe('path', 'specify folder contain notes')
  .demandOption(
    ['path'],
    'Please provide path arguments to work with this tool'
  )
  .alias('path', ['p'])
  .help('h').argv;

const fs = require('fs');
const path = require('path');
const cson = require('cson');

const PROJ_ROOT = argv.path;
const VALID_YEAR = ['2016', '2017', '2018', '2019', '2020', '2021'];
const IGNORES = ['.git'];
const notesIndex = {};

const validateBoostnoteTags = () => {
  const csonPaths = fs
    .readdirSync(PROJ_ROOT)
    .filter(p => IGNORES.find(i => i !== p))
    .map(p => path.join(PROJ_ROOT, p));

  csonPaths.forEach(csonPath => {
    let c = cson.load(csonPath);
    c.tags.sort();
    if (VALID_YEAR.every(y => c.tags[0] !== y)) {
      // c.tags.splice(0, 0, '2018');
    }

    process.stdout.write(`Updating ${csonPath} ...`);
    fs.writeFileSync(
      csonPath,
      cson.createCSONString(c, { indent: '  ' }).replace(/^\s\s*$/m, '') + '\n'
    );
    console.log('✅');

    notesIndex[c.title || path.basename(csonPath)] = path.basename(csonPath);
  });

  const notesIndexPath = path.join(PROJ_ROOT, '../_utils', 'notesIndex.json');
  process.stdout.write(`Building Index file to ${notesIndexPath}`);
  fs.writeFileSync(notesIndexPath, JSON.stringify(notesIndex, null, 2));
  console.log('✅');
};

validateBoostnoteTags();
