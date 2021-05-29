'use babel';

export default class Util {
  static handleConfigChange() {
    atom.config.onDidChange('atom-i18n.locale', ({ newValue: newLocale }) => {
      const newLangauge = this.findLaguageNameByLocale(newLocale) || newLocale;
      this.promptUserReloadAtom(
        `Reload Atom to translate into\n- \`${newLangauge}\`.`,
      );
    });

    atom.config.onDidChange('atom-i18n.customMenuI18nPath', () => {
      this.promptUserReloadAtom('Reload Atom to translate Custom Menus');
    });
  }

  static promptUserReloadAtom(msg) {
    if (msg == null) {
      msg = 'Reload Atom for localization.';
    }
    const buttons = [
      {
        text: 'Reload',
        onDidClick() {
          atom.reload();
        },
      },
    ];
    atom.notifications.addInfo(msg, {
      dismissable: true,
      buttons,
    });
  }

  static findLaguageNameByLocale(locale) {
    const configEnum = atom.config.getSchema('atom-i18n.locale').enum;
    const option = configEnum.find((option) => option.value === locale);
    return option ? option.description : null;
  }
}
