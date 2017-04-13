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
    @defM = CSON.load path.join __dirname, "../def", LOCALE, "menu_#{process.platform}.cson"
    @defC = CSON.load path.join __dirname, "../def", LOCALE, "context.cson"
    @defS = CSON.load path.join __dirname, "../def", LOCALE, "settings.cson"
    @defA = CSON.load path.join __dirname, "../def", LOCALE, "about.cson"   # TODO fix LOCALE
    @defW = CSON.load path.join __dirname, "../def", LOCALE, "welcome.cson"   # TODO fix LOCALE

  activate: (state) ->
    setTimeout(@delay, 0)

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


module.exports = window.I18N = new I18N()
