'use babel';

export default class ContextMenu {
  static localize(defC) {
    this.updateContextMenu(defC);
    return atom.menu.update();
  }

  static updateContextMenu(defC) {
    // NOTE set of all contextMenu item: atom.contextMenu.itemSets
    for (let itemSet of atom.contextMenu.itemSets) {
      const set = defC.Context[itemSet.selector];
      if (!set) {
        continue;
      }
      for (let item of itemSet.items) {
        if (item.type === 'separator') {
          continue;
        }
        const label = set[item.command];
        if (label) {
          item.label = label;
        }
      }
    }
  }
}
