path = require 'path'
CSON = require 'cson'
Menu = require './menu'
ContextMenu = require './context-menu'
Preferences = require './preferences'
Util = require './util'

class I18N

  pref: {done: false}

  constructor: ->
    LOCALE = atom.config.get('atom-i18n.locale')
    # BUG when running spec, LOCALE is not initialized
    @defM = CSON.load path.join __dirname, "../def", LOCALE, "menu_#{process.platform}.cson"
    @defC = CSON.load path.join __dirname, "../def", LOCALE, "context.cson"
    @defS = CSON.load path.join __dirname, "../def", LOCALE, "settings.cson"

  activate: (state) ->
    setTimeout(@delay, 0)

  deactivate: () ->
    Util.promptUserReloadAtom("Reload Atom to clear translation.")

  delay: () =>
    Menu.localize(@defM)
    ContextMenu.localize(@defC)
    Preferences.localize(@defS)
    # TODO localize more...

    atom.config.onDidChange 'atom-i18n.locale', (event) ->
      newLocale = event.newValue
      newLangauge = Util.findLaguageNameByLocale(newLocale) || newLocale
      Util.promptUserReloadAtom("Reload Atom to translate into \n- `#{newLangauge}`.")


module.exports = window.I18N = new I18N()
