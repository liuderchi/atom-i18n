CSON        = require 'cson'
Menu        = require './menu'
ContextMenu = require './context-menu'
Preferences = require './preferences'

class JapaneseMenu

  pref: {done: false}

  constructor: ->
    @defM = CSON.load __dirname + "/../def/menu_#{process.platform}.cson"
    @defC = CSON.load __dirname + "/../def/context.cson"
    @defS = CSON.load __dirname + "/../def/settings.cson"

  activate: (state) ->
    setTimeout(@delay, 0)

  delay: () =>
    Menu.localize(@defM)
    ContextMenu.localize(@defC)
    Preferences.localize(@defS)
    # TODO localize more...


module.exports = window.JapaneseMenu = new JapaneseMenu()
