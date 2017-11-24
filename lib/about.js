module.exports = class About {

  static localize(defA) {
    this.defA = defA
    this.updateAbout.call(this) // first time localize
    atom.workspace.onDidChangeActivePaneItem(item => {
      if (!item) {
        return
      }
      if (item.__proto__.constructor.name === 'AboutView') {
        setTimeout(this.updateAbout.bind(this), 0)
      }
    })
  }

  static updateAbout() {
    let aboutEnabled
    const aboutTab = document.querySelector('.tab[data-type="AboutView"]')
    if (aboutTab) {
      aboutEnabled = aboutTab.className.includes('active')
    }
    if (!(aboutTab && aboutEnabled)) {
      return
    }
    aboutTab.querySelector('.title').textContent = this.defA.About.tabTitle
    const about = document.querySelector('.about .about-container')
    if (about === null) {
      return
    }
    if (about.getAttribute('data-localized') !== 'true') {
      let releaseNotes = about.querySelector('.about-header-info a.about-header-release-notes')
      releaseNotes.text = this.defA.About.releaseNotes
      const updatesGroup = about.querySelector('.about-updates')
      if (updatesGroup.offsetParent !== null) { // element visibility
        try {

          const { automaticDownloadUpdates, newUpdate, releaseNotes } = this.defA.About
          updatesGroup.querySelector('.about-auto-updates span').textContent = automaticDownloadUpdates
          if (updatesGroup.querySelector('span.about-updates-label') !== null) {
            updatesGroup.querySelector('span.about-updates-label').textContent = newUpdate
          }
          if (updatesGroup.querySelector('a.about-updates-release-notes') !== null) { // check if the element exists
            updatesGroup.querySelector('a.about-updates-release-notes').textContent = releaseNotes
          }

          // update status box
          const { upToDate, checkUpdatesNow, checkingForUpdates, restartInstall } = this.defA.About
          const appUpToDate = updatesGroup.querySelector('.app-up-to-date')
          const checkingUpdates = updatesGroup.querySelector('.app-checking-for-updates')
          if (appUpToDate !== null) { // when atom is up to date (tested)
            updatesGroup.querySelector('span.about-updates-label').textContent = upToDate
            updatesGroup.querySelector('button').textContent = checkUpdatesNow
          } else if (checkingUpdates !== null) { // when checking for updates (not working for now)
            updatesGroup.querySelector('span.about-updates-label').textContent = checkingForUpdates // when have update, need to restart and install (not tested)
          } else {
            updatesGroup.querySelector('button').textContent = restartInstall
          }
        } catch (error) {
          throw error
        }
      }

      const { license, termsOfUse, with: _with, by, andTheAwesome, atomCommunity } = this.defA.About
      const { childNodes: [ licenseNode, termsOfUseNode ] } = about.querySelector('.about-actions.group-item .btn-group')
      licenseNode.textContent = license
      termsOfUseNode.textContent = termsOfUse
      // const loves = about.querySelector('.about-love.group-start')
      const { childNodes: [, _withNode, , byNode]} = about.querySelector('.about-love.group-start')
      // loves.childNodes[1].textContent = _with
      // loves.childNodes[3].textContent = by
      _withNode.textContent = _with
      byNode.textContent = by
      const credits = about.querySelector('.about-credits.group-item')
      credits.querySelector('span').textContent = andTheAwesome
      credits.querySelector('a').text = atomCommunity
      about.setAttribute('data-localized', 'true')
    }
  }

}
