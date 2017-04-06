'use strict';

const argv = require('yargs')
  .example('$ npm run validation', 'validate cson of all locales')
  .example('$ npm run validation -- --locale fr zh-tw', 'validate cson in fr/* and zh-tw/*')
  .array('locale')
  .describe('locale', 'specify list of locales')
  .help('h')
  .argv;

const fs = require('fs');
const path = require('path');
const CSON = require('cson');
const expect = require('chai').expect;

const LOCALES = [
  'ar',
  'de',
  'es',
  'fr',
  'hi',
  'ja',
  'ko',
  'nl',
  'pt-br',
  'ru',
  'zh-cn',
  'zh-tw',
  'template'
];
const CsonFiles = [
  'menu_darwin.cson', 'menu_linux.cson', 'menu_win32.cson',
  'context.cson', 'settings.cson', 'about.cson', 'welcome.cson'
];

describe('validation', () => {

  let packageMeta = {};

  describe('package.json validation', () => {

    it('loads package.json', () => {
      let loading = () => {
        packageMeta = JSON.parse(fs.readFileSync('./package.json'), 'utf8');
      };
      expect(loading, 'load package.json error').not.to.throw(Error);
    });

    it('checks locale options list in configSchema in package.json', () => {
      let locales = packageMeta.configSchema.locale.enum.map((opt)=>{return opt.value;});
      expect(locales, 'inconsistent locale options').to.deep.equal(LOCALES);
    });
  });

  describe('cson file validation', () => {

    describe('checking each cson files of all locales', () => {

      JSON.flatten = function(data) {
        var result = {};
        function recurse (cur, prop) {
          if (Object(cur) !== cur) {
            result[prop] = cur;
          } else if (Array.isArray(cur)) {
            for(var i=0, l=cur.length; i<l; i++)
              recurse(cur[i], prop + '[' + i + ']');
            if (l == 0) {
              result[prop] = [];
            }
          } else {
            var isEmpty = true;
            for (var p in cur) {
              isEmpty = false;
              recurse(cur[p], prop ? prop+'.'+p : p);
            }
            if (isEmpty && prop) {
              result[prop] = {};
            }
          }
        }
        recurse(data, '');
        return result;
      };

      let templateKeys = {};
      for (let csonFile of CsonFiles) {
        templateKeys[csonFile] = Object.keys(JSON.flatten(CSON.load(path.join(__dirname, '../def/template', csonFile))));
      }

      for (let locale of (argv.locale || LOCALES)) {
        describe(`checking locale ${locale}`, () => {
          for (let csonFile of CsonFiles) {

            describe(`checking "${path.join(locale, csonFile)}"`, () => {

              let cson = CSON.load(path.join(__dirname, '../def', locale, csonFile));
              let flattenCson = JSON.flatten(cson);

              it('has no error loading cson', () => {
                expect(cson, 'load cson error').not.to.be.instanceof(Error);
              });
              it('has consistent flatten keys with template', () => {
                expect(Object.keys(flattenCson), 'inconsistent keys').to.deep.equal(templateKeys[csonFile]);
              });
              it('has no special char in values of cson', () => {
                for (let k in flattenCson) {
                  let specialChr = /[\~\@\#\%\^\*]/g;
                  let _str = flattenCson[k].toString();
                  let _res = _str.search(specialChr);
                  expect(_res, `\n\tfound special chr: \'${_str[_res]}\'\n\tdata: ${_str}`).to.equal(-1);
                }
              });
              if (csonFile === 'menu_linux.cson' || csonFile === 'menu_win32.cson') {
                it('has correct hotkey hints', () => {
                  for (let k in flattenCson) {
                    let hotkeyHintRegex = /\&\w/g;
                    let menuItemName = k.split('.').slice(-2)[0];
                    let _str = flattenCson[k];
                    let _res = menuItemName.match(hotkeyHintRegex);
                    if (_res) {
                      let hotkeyHint = _res[0];
                      expect(_str.search(new RegExp(hotkeyHint, 'i')), `\n\tcannot find \'${hotkeyHint}\'\n\tin \'${_str}\'`).to.not.equal(-1);
                    }
                  }
                });
              }

            });
          }
        });
      }
    });

  });

});
