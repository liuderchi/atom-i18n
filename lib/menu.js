'use babel';

export default class Menu {
  static localize(defM) {
    this.updateMenu(atom.menu.template, defM.Menu);
    // NOTE list of menuItem: atom.menu.template api
    return atom.menu.update();
  }

  static updateMenu(menuList, def) {
    if (!def) {
      return;
    }
    for (let menu of menuList) {
      if (!menu.label) {
        continue;
      }
      const key = menu.label;
      const set = def[key];
      if (!set) {
        continue;
      }
      if (set != null) {
        menu.label = set.value;
      }
      if (menu.submenu != null) {
        this.updateMenu(menu.submenu, set.submenu);
      }
    }
  }
}
