class Welcome {

  static updateWelcome() {

    let welcomeEnabled
    const welcomeTab = document.querySelector('.tab[data-type="WelcomeView"]')
    if (welcomeTab) { welcomeEnabled = welcomeTab.className.includes('active') }
    if (!welcomeTab || !welcomeEnabled) { return }
    welcomeTab.querySelector('.title').textContent = this.defW.Welcome.tabTitle

    const welcome = document.querySelector('.welcome .welcome-container')
    if (welcome === null) { return }
    if (welcome.getAttribute('data-localized') !== 'true') {
      {
        const subtitle = welcome.querySelector('.welcome-header h1.welcome-title')
        let {text1, superscript, text2} = this.defW.Welcome.subtitle
        subtitle.innerHTML = `${text1}<sup>${superscript}</sup>${text2}`
      }

      const helpGroup = welcome.querySelector('.welcome-panel')
      if (helpGroup) {
        helpGroup.querySelector('p').textContent = this.defW.Welcome.help.forHelpVisit
        {
          const liDocs = helpGroup.querySelector('ul li:nth-child(1)')
          const {text1, link, text2} = this.defW.Welcome.help.atomDocs
          liDocs.childNodes[0].textContent = text1
          liDocs.childNodes[1].textContent = link
          liDocs.childNodes[2].textContent = text2
        }
        {
          const liForum = helpGroup.querySelector('ul li:nth-child(2)')
          const {text1, link, text2} = this.defW.Welcome.help.atomForum
          liForum.childNodes[0].textContent = text1
          liForum.childNodes[1].textContent = link
          liForum.appendChild(document.createTextNode(text2))
        }
        {
          const liOrg = helpGroup.querySelector('ul li:nth-child(3)')
          const {text1, link, text2} = this.defW.Welcome.help.atomOrg
          liOrg.childNodes[0].textContent = text1
          liOrg.childNodes[1].textContent = link
          liOrg.childNodes[2].textContent = text2
        }
      }
      welcome.querySelector('label').textContent = this.defW.Welcome.showWelcomeGuide

      return welcome.setAttribute('data-localized', 'true')
    }
  }

  static localize(defW) {
    this.defW = defW
    this.updateWelcome()  // first time localize
    atom.workspace.onDidChangeActivePaneItem(item => {
      if (!item) { return }
      if (item.__proto__.constructor.name === 'WelcomeView') {
        return setTimeout(() => this.updateWelcome(), 0)
      }
    })
  }
}


module.exports = Welcome
