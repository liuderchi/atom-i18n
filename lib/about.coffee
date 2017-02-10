class About

  @localize: (defA) ->
    @defA = defA
    @updateAbout()  # first time localize
    atom.workspace.onDidChangeActivePaneItem (item) =>
      return unless item
      if item.__proto__.constructor.name is 'AboutView'
        setTimeout(@updateAbout, 0)

  @updateAbout: () =>
    aboutTab = document.querySelector('.tab[data-type="AboutView"]')
    aboutEnabled = aboutTab.className.includes 'active' if aboutTab
    return unless aboutTab && aboutEnabled
    aboutTab.querySelector('.title').textContent = @defA.About.tabTitle

    about = document.querySelector('.about .about-container')
    return if about is null
    unless about.getAttribute('data-localized') is 'true'
      releaseNotes = about.querySelector('.about-header-info a.about-header-release-notes')
      releaseNotes.text = @defA.About.releaseNotes

      updatesGroup = about.querySelector('.about-updates')
      if updatesGroup.offsetParent isnt null  # element visibility
        try
          updatesGroup.querySelector('.about-auto-updates span').textContent = @defA.About.automaticDownloadUpdates
          updatesGroup.querySelector('span.about-updates-label').textContent = @defA.About.newUpdate
          updatesGroup.querySelector('a.about-updates-release-notes').textContent = @defA.About.releaseNotes
          updatesGroup.querySelector('button').textContent = @defA.About.restartInstall

      buttons = about.querySelector('.about-actions.group-item .btn-group')
      buttons.childNodes[0].textContent = @defA.About.license
      buttons.childNodes[1].textContent = @defA.About.termsOfUse

      loves = about.querySelector('.about-love.group-start')
      loves.childNodes[1].textContent = @defA.About.with
      loves.childNodes[3].textContent = @defA.About.by

      credits = about.querySelector('.about-credits.group-item')
      credits.querySelector('span').textContent = @defA.About.andTheAwesome
      credits.querySelector('a').text = @defA.About.atomCommunity

      about.setAttribute('data-localized', 'true')

module.exports = About
