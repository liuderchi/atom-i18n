'use babel';

const path = require('path');
const CSON = require('cson');

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
          expect(content).toBeTruthy();
        }
      }
    });

  });

});
