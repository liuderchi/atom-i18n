'use babel';

import AtomI18nView from './atom-i18n-view';
import { CompositeDisposable } from 'atom';

export default {

  atomI18nView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomI18nView = new AtomI18nView(state.atomI18nViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomI18nView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-i18n:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomI18nView.destroy();
  },

  serialize() {
    return {
      atomI18nViewState: this.atomI18nView.serialize()
    };
  },

  toggle() {
    console.log('AtomI18n was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
