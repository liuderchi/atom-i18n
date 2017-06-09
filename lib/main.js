const fs = require('fs')
const path = require('path')
const CSON = require('cson')
const Menu = require('./menu')
const ContextMenu = require('./context-menu')
const Preferences = require('./preferences')
const About = require('./about')
const Util = require('./util')
const Welcome = require('./welcome')

class I18N {

  constructor() {
    this.pref = { done: false }
    this.delay = this.delay.bind(this)
    this.customMenuI18n = this.customMenuI18n.bind(this)
    const LOCALE = atom.config.get('atom-i18n.locale')
    // BUG when running spec, LOCALE is not initialized
    if (!atom.config.get('atom-i18n.customMenuI18nPath')) {
      atom.config.set('atom-i18n.customMenuI18nPath', path.join(__dirname, '../def', 'custom_menu.cson'))
    }
    this.defM = CSON.load(path.join(__dirname, '../def', LOCALE, `menu_${process.platform}.cson`))
    this.defC = CSON.load(path.join(__dirname, '../def', LOCALE, 'context.cson'))
    this.defS = CSON.load(path.join(__dirname, '../def', LOCALE, 'settings.cson'))
    this.defA = CSON.load(path.join(__dirname, '../def', LOCALE, 'about.cson'))
    this.defW = CSON.load(path.join(__dirname, '../def', LOCALE, 'welcome.cson'))
  }

  activate() {
    setTimeout(this.delay, 3000)
    setTimeout(this.customMenuI18n, 5000)
    atom.commands.add('atom-workspace', 'atom-i18n:open-custom-menu-i18n-file', () => {
      atom.workspace.open(atom.config.get('atom-i18n.customMenuI18nPath'))
    })
  }

  deactivate() {
    Util.promptUserReloadAtom('Reload Atom to clear translation.')
  }

  delay() {
    Menu.localize(this.defM)
    ContextMenu.localize(this.defC)
    Preferences.localize(this.defS)
    About.localize(this.defA)
    Welcome.localize(this.defW)
    // TODO localize more...
    Util.handleConfigChange()
  }

  customMenuI18n() {
    const customMenuCson = atom.config.get('atom-i18n.customMenuI18nPath')
    if (fs.existsSync(customMenuCson)) {
      this.customDefM = CSON.load(customMenuCson)
      Menu.localize(this.customDefM)
    }
  }

}


module.exports = window.I18N = new I18N()
