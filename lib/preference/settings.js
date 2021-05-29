'use babel';

import PU from './util';

/*
 * decaffeinate suggestions:
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
export default class PreferencesSettings {
  static localize() {
    this.defS = window.I18N.defS.Settings;
    this.sv = document.querySelector('.settings-view');

    // Settings panel
    this.localizeSettingsPanel();

    // System panel (win32)
    this.localizeSystemPanel();

    // Keybindings
    this.localizeKeybindingsPanel();

    // Themes panel
    this.localizeThemesPanel();

    // Updates panel
    this.localizeUpdatesPanel();

    // Install panel
    this.localizeInstallPanel();

    // Buttons
    PU.applyButtonToolbar();
  }

  static localizeSettingsPanel() {
    // Notes
    for (let note of this.defS.settings.notes) {
      const info = this.sv.querySelector(`[id='${note._id}']`);
      if (!PU.isAlreadyLocalized(info)) {
        info.innerHTML = note.html;
        info.setAttribute('data-localized', 'true');
      }
    }

    // Every settings item
    for (let d of this.defS.settings.controls) {
      this.applyTextContentBySettingsId(d);
    }
  }

  static applyTextContentBySettingsId(data) {
    const el = document.querySelector(`[id='${data._id}']`);
    if (!el) {
      return;
    }
    const ctrl = el.closest('.control-group');
    PU.applyTextWithOrg(ctrl.querySelector('.setting-title'), data.title);
    PU.applyTextWithOrg(ctrl.querySelector('.setting-description'), data.desc);
    if (!data.select) {
      return;
    }
    for (let o of el.querySelectorAll('option')) {
      const v = o.attributes['value'].value;
      o.innerText = data.select[v];
    }
  }

  static localizeSystemPanel() {
    const note = this.sv.querySelector('.text.icon.icon-question:not([id])');
    if (note) {
      note.textContent = this.defS.system.notes;
    }
  }

  static localizeKeybindingsPanel() {
    const info = this.sv.querySelector('.keybinding-panel>div:nth-child(2)');
    if (!PU.isAlreadyLocalized(info)) {
      info.querySelector('span:nth-child(2)').textContent =
        this.defS.keymaps.notes.text1;
      info.querySelector('span:nth-child(4)').textContent =
        this.defS.keymaps.notes.text2;
      info.querySelector('a.link').textContent = this.defS.keymaps.notes.text3;
      const span = document.createElement('span');
      span.textContent = this.defS.keymaps.notes.text4;
      info.appendChild(span);
      info.setAttribute('data-localized', 'true');
    }

    const searchBarPlaceholder = this.sv.querySelector(
      '.keybinding-panel>div:nth-child(3) .placeholder-text',
    );
    if (!PU.isAlreadyLocalized(searchBarPlaceholder)) {
      searchBarPlaceholder.textContent =
        this.defS.keymaps['search-bar-placeholder'];
      searchBarPlaceholder.setAttribute('data-localized', 'true');
    }

    const keyBindTableHeader = this.sv.querySelector(
      '.keybinding-panel>table thead',
    );
    if (!PU.isAlreadyLocalized(keyBindTableHeader)) {
      keyBindTableHeader.querySelector('th.keystroke').textContent =
        this.defS.keymaps['table-header-keystroke'];
      keyBindTableHeader.querySelector('th.command').textContent =
        this.defS.keymaps['table-header-command'];
      keyBindTableHeader.querySelector('th.source').textContent =
        this.defS.keymaps['table-header-source'];
      keyBindTableHeader.querySelector('th.selector').textContent =
        this.defS.keymaps['table-header-selector'];
      keyBindTableHeader.setAttribute('data-localized', 'true');
    }
  }

  static localizeThemesPanel() {
    const info = this.sv.querySelector('.themes-panel>div>div:nth-child(2)');
    if (!PU.isAlreadyLocalized(info)) {
      info.querySelector('span').textContent = this.defS.themes.notes.text1;
      info.querySelector('a.link').textContent = this.defS.themes.notes.text2;
      const span = document.createElement('span');
      span.textContent = this.defS.themes.notes.text3;
      info.appendChild(span);
      const tp1 = this.sv.querySelector('.themes-picker>div:nth-child(1)');
      tp1.querySelector('.setting-title').textContent = this.defS.themes.title1;
      tp1.querySelector('.setting-description').textContent =
        this.defS.themes.description1;
      const tp2 = this.sv.querySelector('.themes-picker>div:nth-child(2)');
      tp2.querySelector('.setting-title').textContent = this.defS.themes.title2;
      tp2.querySelector('.setting-description').textContent =
        this.defS.themes.description2;
      info.setAttribute('data-localized', 'true');
    }
  }

  static localizeUpdatesPanel() {
    PU.applyTextWithOrg(
      this.sv.querySelector('.update-all-button.btn-primary'),
      this.defS.updates['update-all'],
    );
    PU.applyTextWithOrg(
      this.sv.querySelector('.update-all-button:not(.btn-primary)'),
      this.defS.updates['check-updates'],
    );
    PU.applyTextWithOrg(
      this.sv.querySelector('.alert.icon-hourglass'),
      this.defS.updates['checking-updates'],
    );
    PU.applyTextWithOrg(
      this.sv.querySelector('.alert.icon-heart'),
      this.defS.updates['all-updated-message'],
    );
    // TODO add failure message which is dynamic DOM node
    // PU.applyTextWithOrg(@sv.querySelector('.alert.alert-danger'), 'foo bar Fetching outdated packages and themes failed.')
    // PU.applyTextWithOrg(@sv.querySelector('.alert-link.error-link'), 'foo bar Show output...')
  }

  static localizeInstallPanel() {
    PU.applySectionHeadings();
    const inst = document.querySelector('div.section:not(.themes-panel)');
    const info = inst.querySelector('.native-key-bindings');
    if (!PU.isAlreadyLocalized(info)) {
      info.querySelector('span:nth-child(2)').textContent =
        this.defS.install.notes.text1;
      const tc = info.querySelector('span:nth-child(4)');
      tc.textContent = tc.textContent.replace(
        'and are installed to',
        this.defS.install.notes.text2,
      );
      const span = document.createElement('span');
      span.textContent = this.defS.install.notes.text3;
      info.appendChild(span);
      info.setAttribute('data-localized', 'true');
    }

    const searchContainer = inst.querySelector('.search-container');
    const placeholder = searchContainer.querySelector('.placeholder-text');
    placeholder.textContent = this.defS.install['searchbar-placeholder'];
    // TODO i18n placeholder dynamic content
    if (!PU.isAlreadyLocalized(searchContainer)) {
      PU.applyTextWithOrg(
        inst.querySelector('.search-container .btn:nth-child(1)'),
        this.defS.install['btn-packages'],
      );
      PU.applyTextWithOrg(
        inst.querySelector('.search-container .btn:nth-child(2)'),
        this.defS.install['btn-themes'],
      );
      searchContainer.setAttribute('data-localized', 'true');
    }
  }
}
