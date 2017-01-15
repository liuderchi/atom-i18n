class Util

  @promptUserReloadAtom: (msg = "Reload Atom for localization.") ->
    buttons = [{
      text: 'Reload',
      onDidClick: -> atom.reload()
    }]
    atom.notifications.addInfo(msg, {
      dismissable: true, buttons: buttons
    })

module.exports = Util
