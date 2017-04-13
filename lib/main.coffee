fs = require 'fs'
path = require 'path'
CSON = require 'cson'
Menu = require './menu'
ContextMenu = require './context-menu'
Preferences = require './preferences'
About = require './about'
Util = require './util'
Welcome = require './welcome'

class I18N

  pref: {done: false}

  constructor: ->
    LOCALE = atom.config.get('atom-i18n.locale')
    # BUG when running spec, LOCALE is not initialized
    if not atom.config.get('atom-i18n.customMenuI18nPath')
      atom.config.set('atom-i18n.customMenuI18nPath', path.join __dirname, "../def", "custom_menu.cson")

    @defM = CSON.load path.join __dirname, "../def", LOCALE, "menu_#{process.platform}.cson"
    @defC = CSON.load path.join __dirname, "../def", LOCALE, "context.cson"
    @defS = CSON.load path.join __dirname, "../def", LOCALE, "settings.cson"
    @defA = CSON.load path.join __dirname, "../def", LOCALE, "about.cson"   # TODO fix LOCALE
    @defW = CSON.load path.join __dirname, "../def", LOCALE, "welcome.cson"   # TODO fix LOCALE

  activate: (state) ->
    setTimeout(@delay, 0)
    setTimeout(@customMenuI18n, 3000)

    atom.commands.add 'atom-workspace', 'atom-i18n:open-custom-menu-i18n-file', =>
      atom.workspace.open atom.config.get('atom-i18n.customMenuI18nPath' )

  deactivate: () ->
    Util.promptUserReloadAtom("Reload Atom to clear translation.")

  delay: () =>
    Menu.localize(@defM)
    ContextMenu.localize(@defC)
    Preferences.localize(@defS)
    About.localize(@defA)
    Welcome.localize(@defW)
    # TODO localize more...

    Util.handleConfigChange()

  customMenuI18n: () =>
    customMenuCson = atom.config.get('atom-i18n.customMenuI18nPath')
    if fs.existsSync(customMenuCson)
      @customDefM = CSON.load customMenuCson
      Menu.localize(@customDefM)

module.exports = window.I18N = new I18N()
