'use babel';

import PU from './util';
import PreferencesSettings from './settings';

export default class Preferences {
  static delaySettings() {
    let settingsEnabled;
    const settingsTab = document.querySelector(
      '.tab-bar [data-type="SettingsView"]',
    );
    if (settingsTab) {
      settingsEnabled = settingsTab.className.includes('active');
    }
    if (!settingsTab || !settingsEnabled) {
      return;
    }
    try {
      this.sv = document.querySelector('.settings-view');

      // NOTE i18n tab-title, placeholder before checking window.I18N.pref.done
      settingsTab.querySelector('.title').textContent =
        this.defS.Settings['tab-title'];
      this.applyPlaceholders();
      if (window.I18N.pref.done) {
        return;
      }

      this.loadAllSettingsPanels();

      PreferencesSettings.localize();

      this.applyLeftSide();

      // Add Events
      const btns = this.sv.querySelectorAll(
        'div.section:not(.themes-panel) .search-container .btn',
      );
      for (let btn of btns) {
        btn.addEventListener('click', this.applyInstallPanelOnSwitch);
      }

      window.I18N.pref.done = true;

      // Restore the flag when the settings panel is closed
      const ediotrPaneItem = atom.workspace.getActivePaneItem();
      if (ediotrPaneItem.uri === 'atom://config') {
        window.I18N.pref.done = false;
      }
    } catch (e) {
      console.error(
        `I18N failed with locale ${atom.config.get('atom-i18n.locale')}: `,
        e,
      );
    }
  }

  static applyPlaceholders() {
    let searchBarPlaceholder = this.sv.querySelector(
      '.keybinding-panel>div:nth-child(3) .placeholder-text',
    );
    if (searchBarPlaceholder) {
      searchBarPlaceholder.textContent =
        this.defS.Settings.keymaps['search-bar-placeholder'];
    }
    this.sv
      .querySelectorAll('section.section .editor-container .placeholder-text')
      .forEach((div) => {
        if (div.textContent.toString().startsWith('Filter packages')) {
          div.textContent = this.defS.Settings.packages.searchBarText;
        }
        if (div.textContent.toString().startsWith('Filter themes')) {
          return (div.textContent = this.defS.Settings.themes.searchBarText);
        }
      });
    searchBarPlaceholder = this.sv.querySelector(
      'div.section:not(.themes-panel) .search-container .placeholder-text',
    );
    if (searchBarPlaceholder) {
      searchBarPlaceholder.textContent =
        this.defS.Settings.install['searchbar-placeholder'];
    }
  }

  static loadAllSettingsPanels() {
    // Load all settings panels
    const lastMenu = this.sv.querySelector('.panels-menu .active a');
    const panelMenus = this.sv.querySelectorAll(
      '.settings-view .panels-menu li a',
    );
    for (let pm of panelMenus) {
      pm.click();
      pm.addEventListener('click', this.applyInstallPanelOnSwitch);
    }
    // Restore last active menu
    if (lastMenu) {
      lastMenu.click();
    }
  }

  static applyLeftSide() {
    // Left-side menu
    const menu = this.sv.querySelector('.settings-view .panels-menu');
    if (!menu) {
      return;
    }
    for (let d of this.defS.Settings.menu) {
      const el = menu.querySelector(`[name='${d._label}']>a`);
      if (el) {
        PU.applyTextWithOrg(el, d.value);
      }
    }

    // Left-side button
    const ext = this.sv.querySelector('.settings-view .icon-link-external');
    PU.applyTextWithOrg(ext, this.defS.Settings['btn-open-config-folder']);
  }

  static applyInstallPanelOnSwitch() {
    // NOTE localize all headings with force op
    PU.applySectionHeadings(true);
    PU.applyButtonToolbar();
  }

  static localize(defS) {
    this.defS = defS;
    this.updateSettings(); // first time localize
    atom.workspace.onDidChangeActivePaneItem((item) => {
      if (!item) {
        return;
      }
      if (item.__proto__.constructor.name === 'SettingsView') {
        return this.updateSettings(true);
      }
    });
  }

  static updateSettings() {
    setTimeout(() => this.delaySettings(), 0);
  }
}
