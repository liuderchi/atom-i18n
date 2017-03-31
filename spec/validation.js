'use strict'

const argv = require('yargs')
  .example('$ npm run validation', 'validate cson of all locales')
  .example('$ npm run validation -- --locale fr zh-tw', 'validate cson in fr/* and zh-tw/*')
  .array('locale')
  .describe('locale', 'specify list of locales')
  .help('h')
  .argv

const fs = require('fs')
const path = require('path')
const CSON = require('cson')
const { expect } = require('chai')

const { flattenObj } = require('./util.js')

const LOCALES = [
  'ar',
  'de',
  'es',
  'fr',
  'hi',
  'ja',
  'ko',
  'nl',
  'pl',
  'pt-br',
  'ru',
  'zh-cn',
  'zh-tw',
  'template'
]
const CsonFiles = [
  'menu_darwin.cson', 'menu_linux.cson', 'menu_win32.cson',
  'context.cson', 'settings.cson', 'about.cson', 'welcome.cson'
]

describe('validation', () => {

  let packageMeta = {}

  describe('package.json validation', () => {

    it('loads package.json', () => {
      const loading = () => {
        packageMeta = JSON.parse(fs.readFileSync('./package.json'), 'utf8')
      }
      expect(loading, 'load package.json error').not.to.throw(Error)
    })

    it('checks locale options list in configSchema in package.json', () => {
      const locales = packageMeta.configSchema.locale.enum.map((opt)=>{return opt.value})
      expect(locales, 'inconsistent locale options').to.deep.equal(LOCALES)
    })
  })

  describe('cson file validation', () => {

    describe('checking each cson files of all locales', () => {
      const templateKeys = {}
      for (let csonFile of CsonFiles) {
        templateKeys[csonFile] = Object.keys(flattenObj(CSON.load(path.join(__dirname, '../def/template', csonFile))))
      }

      for (let locale of (argv.locale || LOCALES)) {
        describe(`checking locale ${locale}`, () => {
          for (let csonFile of CsonFiles) {

            describe(`checking "${path.join(locale, csonFile)}"`, () => {

              const cson = CSON.load(path.join(__dirname, '../def', locale, csonFile))
              const flattenCson = flattenObj(cson)

              it('has no error loading cson', () => {
                expect(cson, 'load cson error').not.to.be.instanceof(Error)
              })
              it('has consistent flatten keys with template', () => {
                expect(Object.keys(flattenCson), 'inconsistent keys').to.deep.equal(templateKeys[csonFile])
              })
              it('has no special char in values of cson', () => {
                for (let k in flattenCson) {
                  const specialChr = /[\~\@\#\%\^\*]/g
                  const _str = flattenCson[k].toString()
                  const _res = _str.search(specialChr)
                  const errMsg = `\n\tfound special chr: \'${_str[_res]}\'\n\tdata: ${_str}`
                  expect(_res, errMsg).to.equal(-1)
                }
              })
              if (csonFile === 'menu_linux.cson' || csonFile === 'menu_win32.cson') {
                it('has valid hotkey hints if required', () => {
                  for (let k in flattenCson) {
                    const menuItemName = k.split('.').slice(-2, -1).shift()
                    const _str = flattenCson[k]
                    const hasAmpersand = menuItemName.match(/\&/g)
                    if (hasAmpersand) {
                      const hotkeyHintRegex = /\&\w/g
                      const errMsg = `\n\tinvalid hotkey hint in \'${_str}\'`
                      expect(_str.search(hotkeyHintRegex), errMsg).to.not.equal(-1)
                    }
                  }
                })
              }

            })
          }
        })
      }   // end of for loop of locales

    })   // end of checking each cson files of all locales

  })   // end of cson file validation

})   // end of validation
