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

      configEnum = atom.config.getSchema('atom-i18n.locale').enum
      newOption = configEnum.find (option) ->
        option.value is newLocale
      newLangauge = if newOption then newOption.description else newLocale

      Util.promptUserReloadAtom("Reload Atom to translate into `#{newLangauge}`.")


module.exports = window.I18N = new I18N()
