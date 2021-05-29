'use babel';

export default class Welcome {
  static updateWelcome() {
    let welcomeEnabled;
    const welcomeTab = document.querySelector('.tab[data-type="WelcomeView"]');
    if (welcomeTab) {
      welcomeEnabled = welcomeTab.className.includes('active');
    }
    if (!welcomeTab || !welcomeEnabled) {
      return;
    }
    welcomeTab.querySelector('.title').textContent = this.defW.Welcome.tabTitle;

    const welcome = document.querySelector('.welcome .welcome-container');
    if (welcome === null) {
      return;
    }
    if (welcome.getAttribute('data-localized') !== 'true') {
      {
        const subtitle = welcome.querySelector(
          '.welcome-header h1.welcome-title',
        );
        if (subtitle) {
          let { text1, superscript, text2 } = this.defW.Welcome.subtitle;
          subtitle.innerHTML = `${text1}<sup>${superscript}</sup>${text2}`;
        }
      }
      const helpGroup = welcome.querySelector('.welcome-panel');
      if (helpGroup) {
        helpGroup.querySelector('p').textContent =
          this.defW.Welcome.help.forHelpVisit;
        {
          const liDocs = helpGroup.querySelector('ul li:nth-child(1)');
          if (liDocs) {
            const { text1, link, text2 } = this.defW.Welcome.help.atomDocs;
            liDocs.childNodes[0].textContent = text1;
            liDocs.childNodes[2].textContent = link;
            liDocs.childNodes[4].textContent = text2;
          }
        }
        {
          const liForum = helpGroup.querySelector('ul li:nth-child(2)');
          if (liForum) {
            const { text1, link, text2 } = this.defW.Welcome.help.atomForum;
            liForum.childNodes[0].textContent = text1;
            liForum.childNodes[2].textContent = link;
            liForum.lastChild.parentNode.appendChild(
              document.createTextNode(text2),
            );
          }
        }
        {
          const liOrg = helpGroup.querySelector('ul li:nth-child(3)');
          if (liOrg) {
            const { text1, link, text2 } = this.defW.Welcome.help.atomOrg;
            liOrg.childNodes[0].textContent = text1;
            liOrg.childNodes[2].textContent = link;
            liOrg.childNodes[3].textContent = text2;
          }
        }
      }
      const label = welcome.querySelector('label');
      if (label) {
        // Checkbox is the 1st [0] node; text label is the 2nd [1] node.
        label.childNodes[1].textContent = this.defW.Welcome.showWelcomeGuide;
      }

      return welcome.setAttribute('data-localized', 'true');
    }
  }

  static localize(defW) {
    this.defW = defW;
    this.updateWelcome(); // first time localize
    atom.workspace.onDidChangeActivePaneItem((item) => {
      if (!item) {
        return;
      }
      if (item.__proto__.constructor.name === 'WelcomeView') {
        return setTimeout(() => this.updateWelcome(), 0);
      }
    });
  }
}
