path = require 'path'
CSON        = require 'cson'
Menu        = require './menu'
ContextMenu = require './context-menu'
Preferences = require './preferences'

class I18N

  pref: {done: false}

  constructor: ->
    LOCALE = atom.config.get('atom-i18n.locale')
    @defM = CSON.load path.join __dirname, "../def", LOCALE, "menu_#{process.platform}.cson"
    @defC = CSON.load path.join __dirname, "../def", LOCALE, "context.cson"
    @defS = CSON.load path.join __dirname, "../def", LOCALE, "settings.cson"

  activate: (state) ->
    setTimeout(@delay, 0)

  delay: () =>
    Menu.localize(@defM)
    ContextMenu.localize(@defC)
    Preferences.localize(@defS)
    # TODO localize more...


module.exports = window.I18N = new I18N()
