'use strict';

// NOTE use atom --test spec/validation.js to test

const path = require('path');
const CSON = require('cson');
const expect = require('chai').expect;

describe('validation', () => {

  describe('cson file validation', () => {

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
      'template',
      'zh-cn',
      'zh-tw'
    ];
    const FILES = [
      'menu_darwin.cson', 'menu_linux.cson', 'menu_win32.cson',
      'context.cson', 'settings.cson'
    ];

    it('reads cson files of each locale', () => {
      for (let locale of LOCALES) {
        for (let file of FILES) {
          let content = CSON.load(path.join(__dirname, '../def', locale, file));
          expect(content).to.be.ok;
        }
      }
    });

    describe('checking each cson files of all locales should have same number of key-value pairs', () => {

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

      function countKeysFromCSON(_path) {
        return Object.keys(JSON.flatten(CSON.load(_path))).length;
      }

      let stat = {};
      for (let file of FILES) {
        stat[file] = [];
        for (let locale of LOCALES) {
          let keyCount = countKeysFromCSON(path.join(__dirname, '../def', locale, file));
          stat[file].push(keyCount);
        }
        let maxCount = Math.max.apply(null, stat[file]);
        let checkRes = Boolean((new Set(stat[file])).size === 1);
        console.log(`*/${file}: ${(checkRes)?'ok':'Err: some less than ' + maxCount}`);
      }

      for (let file of FILES) {
        for (let locale of LOCALES) {
          it(`checks "${path.join(locale, file)}"`, () => {
            let keyCount = countKeysFromCSON(path.join(__dirname, '../def', locale, file));
            expect(keyCount).to.equal(Math.max.apply(null, stat[file]));
          });
        }
      }
    });

  });

});
