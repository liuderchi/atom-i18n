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
const LOCALES = require('./locales.js')
const { CSON_FILES, ATOM_VERSION } = require('./config.js')

describe('validation', () => {

  describe('package.json validation', () => {
    let packageMeta = {}

    it('loads package.json', () => {
      const loading = () => {
        packageMeta = JSON.parse(fs.readFileSync('./package.json'), 'utf8')
      }
      expect(loading).not.to.throw(Error, 'load package.json error')
    })

    it('checks locale options list in configSchema in package.json', () => {
      const locales = packageMeta.configSchema.locale.enum.map(opt => opt.value)
      expect(locales).to.deep.equal(LOCALES, 'inconsistent locale options')
    })
  })

  describe('cson file validation', () => {

    describe('checking template/settings.cson `controls.*._id` according atom config-schema.js', () => {

      it('fetches descriptive part of config-schema.js then compares keys of settings.cson with it', async () => {
        const neverShownDesciptionInSettingsPanelItems = [
          'core.customFileTypes',
          'core.disabledPackages',
          'core.themes',
          'editor.invisibles',   // NOTE shows only editor.invisibles.*
        ]    // NOTE Manually updated exceptional list from https://github.com/atom/settings-view/blob/master/lib/settings-panel.js#L339-L350

        const templateSettingsControls = CSON.load(path.join(__dirname, '../def/template', 'settings.cson'))
          .Settings.settings.controls.map(({ _id }) => _id)

        const axios = require('axios')
        const configURL = `https://raw.githubusercontent.com/atom/atom/${ATOM_VERSION}/src/config-schema.js`
        console.info(`fetching ${configURL}...`)

        const flattenSrcConfigKeys = await axios.get(configURL).then(({ data }) => {
          const srcConfig = eval(data)
          const keysWithoutDescriptionToKeep = [
            'core.autoHideMenuBar', // platform specific
          ]
          return Object.keys(flattenObj(srcConfig))
            .filter(key => key.search(/enum/g) === -1)
            .filter(key => key.search(/description$/g) !== -1)
            .concat(keysWithoutDescriptionToKeep)
            .map(key => key.replace(/\.properties/g, '').replace(/\.description/g, ''))
            .sort()
        })

        expect(templateSettingsControls.concat(neverShownDesciptionInSettingsPanelItems).sort())
          .to.include.members(flattenSrcConfigKeys, `inconsistent keys compared with ${configURL}\n`)
        // NOTE expect every key in `flattenSrcConfigKeys` appears in templateSettingsControls
      })
    })

    describe('checking each cson files of all locales', () => {
      const templateKeys = {}
      CSON_FILES.forEach(csonFile => {
        templateKeys[csonFile] = Object.keys(flattenObj(CSON.load(path.join(__dirname, '../def/template', csonFile))))
      })

      const locales = argv.locale || LOCALES
      locales.forEach(locale => {

        describe(`checking locale ${locale}`, () => {

          CSON_FILES.forEach(csonFile => {

            describe(`checking "${path.join(locale, csonFile)}"`, () => {

              const cson = CSON.load(path.join(__dirname, '../def', locale, csonFile))
              const flattenCson = flattenObj(cson)

              it('has no error loading cson', () => {
                expect(cson).not.to.be.instanceof(Error, 'load cson error')
              })
              it('has consistent flatten keys with template', () => {
                expect(Object.keys(flattenCson)).to.deep.equal(templateKeys[csonFile], 'inconsistent keys')
              })
              it('has no special char in values of cson', () => {
                Object.keys(flattenCson).forEach(k => {
                  const specialChr = /[~@#%^*]/g
                  const _str = flattenCson[k].toString()
                  const _res = _str.search(specialChr)
                  const errMsg = `\n\tfound special chr: '${_str[_res]}' in value: '${_str}'\n\n\tcson-path: '${k}'\t`
                  expect(_res).to.equal(-1, errMsg)
                })
              })
              if (csonFile === 'menu_linux.cson' || csonFile === 'menu_win32.cson') {
                it('has valid hotkey hints if required', () => {
                  Object.keys(flattenCson).forEach(k => {
                    const menuItemName = k.split('.').slice(-2, -1).shift()
                    const _str = flattenCson[k]
                    const hasAmpersand = menuItemName.match(/&/g)
                    if (hasAmpersand) {
                      const hotkeyHintRegex = /&\w/g
                      const errMsg = `\n\tinvalid or missing hotkey hint in '${_str}'\n\n\tcson-path: '${k}'\t`
                      expect(_str.search(hotkeyHintRegex)).to.not.equal(-1, errMsg)
                    }
                  })
                })
              }

            })
          })
        })
      })   // end of each locale of locales

    })   // end of checking each cson files of all locales

  })   // end of cson file validation

})   // end of validation
