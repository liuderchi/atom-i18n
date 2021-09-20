'use babel';

export default class PreferencesUtil {
  static isAlreadyLocalized(elem) {
    let localized;
    if (elem) {
      localized = elem.getAttribute('data-localized');
    }
    return localized === 'true';
  }

  static applyTextWithOrg(elem, text) {
    if (!text) {
      return;
    }
    if (!elem) {
      return;
    }
    const before = String(elem.textContent);
    if (before === text) {
      return;
    }
    elem.innerHTML = text; // NOTE text may contain HTML
    elem.setAttribute('title', text);
    elem.setAttribute('data-localized', 'true');
    elem.setAttribute('data-before-localized', before);
  }

  static getTextMatchElement(area, query, text) {
    let result;
    const elems = area.querySelectorAll(query);
    result;
    for (let el of elems) {
      if (el.textContent.includes(text)) {
        result = el;
        break;
      }
    }
    return result;
  }

  static applySectionHeadings(force) {
    let el;
    const sv = document.querySelector('.settings-view');
    for (var sh of window.I18N.defS.Settings.sectionHeadings) {
      el = this.getTextMatchElement(sv, '.section-heading', sh._label);
      if (!el) {
        continue;
      }
      if (!this.isAlreadyLocalized(el) || force) {
        this.applyTextWithOrg(el, sh.value);
      }
    }
    for (sh of window.I18N.defS.Settings.subSectionHeadings) {
      el = this.getTextMatchElement(sv, '.sub-section-heading', sh._label);
      if (!el) {
        continue;
      }
      if (!this.isAlreadyLocalized(el) || force) {
        this.applyTextWithOrg(el, sh.value);
      }
    }
  }

  static applyButtonToolbar() {
    // NOTE button in package updates/install tabs
    this.defS = window.I18N.defS.Settings;
    const sv = document.querySelector('.settings-view');
    for (var btn of sv.querySelectorAll('.meta-controls .install-button')) {
      if (!this.isAlreadyLocalized(btn)) {
        const version = btn.textContent.substr(9);
        const buttonText = btn.textContent.startsWith('Update to')
          ? this.defS['control-btns'].update + version
          : this.defS['control-btns'].install;
        this.applyTextWithOrg(btn, buttonText);
      }
    }
    for (btn of sv.querySelectorAll('.meta-controls .settings')) {
      this.applyTextWithOrg(btn, this.defS['control-btns'].setting);
    }
    for (btn of sv.querySelectorAll('.meta-controls .uninstall-button')) {
      this.applyTextWithOrg(btn, this.defS['control-btns'].uninstall);
    }
    for (btn of sv.querySelectorAll(
      '.meta-controls .icon-playback-pause span',
    )) {
      this.applyTextWithOrg(btn, this.defS['control-btns'].disable);
    }
    for (btn of sv.querySelectorAll(
      '.meta-controls .icon-playback-play span',
    )) {
      this.applyTextWithOrg(btn, this.defS['control-btns'].enable);
    }
  }
}
