'use babel';

export default class About {
  static localize(defA) {
    this.defA = defA;
    this.updateAbout.call(this); // first time localize
    atom.workspace.onDidChangeActivePaneItem((item) => {
      if (!item) {
        return;
      }
      if (item.__proto__.constructor.name === 'AboutView') {
        setTimeout(this.updateAbout.bind(this), 0);
      }
    });
  }

  static updateAbout() {
    let about,
      aboutEnabled,
      aboutTab,
      appUpToDate,
      buttons,
      checkingUpdates,
      credits,
      loves,
      releaseNotes,
      updatesGroup;
    aboutTab = document.querySelector('.tab[data-type="AboutView"]');
    if (aboutTab) {
      aboutEnabled = aboutTab.className.includes('active');
    }
    if (!(aboutTab && aboutEnabled)) {
      return;
    }
    aboutTab.querySelector('div[class="title icon icon-info"]').textContent =
      this.defA.About.tabTitle;
    about = document.querySelector(
      'div[class="pane-item native-key-bindings about"]',
    );
    if (about === null) {
      return;
    }
    if (about.getAttribute('data-localized') !== 'true') {
      releaseNotes = about.querySelector(
        '.about-header-info a.about-header-release-notes',
      );
      releaseNotes.text = this.defA.About.releaseNotes;
      updatesGroup = about.querySelector('.about-updates');
      if (updatesGroup !== null && updatesGroup.offsetParent !== null) {
        // element visibility
        const { automaticDownloadUpdates, newUpdate, releaseNotes } =
          this.defA.About;
        updatesGroup.querySelector('.about-auto-updates span').textContent =
          automaticDownloadUpdates;
        if (updatesGroup.querySelector('span.about-updates-label') !== null) {
          updatesGroup.querySelector('span.about-updates-label').textContent =
            newUpdate;
        }
        if (
          updatesGroup.querySelector('a.about-updates-release-notes') !== null
        ) {
          // check if the element exists
          updatesGroup.querySelector(
            'a.about-updates-release-notes',
          ).textContent = releaseNotes;
        }

        // update status box
        const {
          upToDate,
          checkUpdatesNow,
          checkingForUpdates,
          restartInstall,
        } = this.defA.About;
        appUpToDate = updatesGroup.querySelector('.app-up-to-date');
        checkingUpdates = updatesGroup.querySelector(
          '.app-checking-for-updates',
        );
        if (appUpToDate !== null) {
          // when atom is up to date (tested)
          updatesGroup.querySelector(
            'span.about-updates-label.is-strong',
          ).textContent = upToDate;
          updatesGroup.querySelector('button').textContent = checkUpdatesNow;
        } else if (checkingUpdates !== null) {
          // when checking for updates (not working for now)
          updatesGroup.querySelector('span.about-updates-label').textContent =
            checkingForUpdates; // when have update, need to restart and install (not tested)
        } else {
          updatesGroup.querySelector('button').textContent = restartInstall;
        }
      }

      const {
        license,
        termsOfUse,
        with: _with,
        by,
        andTheAwesome,
        atomCommunity,
      } = this.defA.About;
      buttons = about.querySelector('div.about-actions.group-item .btn-group');
      if (buttons !== null) {
        buttons.childNodes[0].textContent = license;
        buttons.childNodes[1].textContent = termsOfUse;
      }
      loves = about.querySelector('div.about-love.group-start');
      if (loves !== null) {
        loves.childNodes[1].textContent = _with;
        loves.childNodes[3].textContent = by;
      }
      credits = about.querySelector('div.about-credits.group-item');
      if (credits !== null) {
        credits.querySelector('span').textContent = andTheAwesome;
        credits.querySelector('a').text = atomCommunity;
      }
      about.setAttribute('data-localized', 'true');
    }
  }
}
