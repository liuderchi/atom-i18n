class Util

  @promptUserReloadAtom: (msg = "Reload Atom for localization.") ->
    buttons = [{
      text: 'Reload',
      onDidClick: -> atom.reload()
    }]
    atom.notifications.addInfo(msg, {
      dismissable: true, buttons: buttons
    })

  @findLaguageNameByLocale: (locale) ->
    configEnum = atom.config.getSchema('atom-i18n.locale').enum
    option = configEnum.find (option) ->
      option.value is locale
    if option then option.description else null

  @handleConfigChange: () =>
    atom.config.onDidChange 'atom-i18n.locale', ({newValue: newLocale}) =>
      newLangauge = @findLaguageNameByLocale(newLocale) || newLocale
      @promptUserReloadAtom("Reload Atom to translate into \n- `#{newLangauge}`.")

    atom.config.onDidChange 'atom-i18n.customMenuI18nPath', () =>
      @promptUserReloadAtom("Reload Atom to translate Custom Menus")

module.exports = Util
