'use strict';

// NOTE run ./node_modules/mocha/bin/mocha ./spec/validation.js

const fs = require('fs');
const path = require('path');
const CSON = require('cson');
const expect = require('chai').expect;

const LOCALES = [
  'ar',
  'es',
  'de',
  'fr',
  'hi',
  'ja',
  'ko',
  'nl',
  'pt-br',
  'zh-cn',
  'zh-tw',
  'template'
];
const CsonFiles = [
  'menu_darwin.cson', 'menu_linux.cson', 'menu_win32.cson',
  'context.cson', 'settings.cson', 'about.cson'
];

describe('validation', () => {

  let packageMeta = {};

  describe('package.json validation', () => {

    it('loads package.json', () => {
      let loading = () => {
        packageMeta = JSON.parse(fs.readFileSync('./package.json'), 'utf8');
      };
      expect(loading).not.to.throw(Error);
    });

    it('checks locale options list', () => {
      let locales = packageMeta.configSchema.locale.enum.map((opt)=>{return opt.value;});
      expect(locales).to.deep.equal(LOCALES);
    });
  });

  describe('cson file validation', () => {

    describe('checking each cson files of all locales having same key-value pairs as template/*.cson', () => {

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

      for (let locale of LOCALES) {
        describe(`checking locale ${locale}`, () => {
          for (let csonFile of CsonFiles) {
            it(`checks "${path.join(locale, csonFile)}"`, () => {
              let cson = CSON.load(path.join(__dirname, '../def', locale, csonFile));
              expect(cson).not.to.be.instanceof(Error);

              let localeCsonKeys = Object.keys(JSON.flatten(cson));
              expect(localeCsonKeys).to.deep.equal(templateKeys[csonFile]);
            });
          }
        });
      }
    });

  });

});
