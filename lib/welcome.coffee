class Welcome

  @localize: (defW) ->
    @defW = defW
    @updateWelcome()  # first time localize
    atom.workspace.onDidChangeActivePaneItem (item) =>
      return unless item
      if item.__proto__.constructor.name is 'WelcomeView'
        setTimeout(@updateWelcome, 0)

  @updateWelcome: () =>
    welcomeTab = document.querySelector('.tab[data-type="WelcomeView"]')
    welcomeEnabled = welcomeTab.className.includes 'active' if welcomeTab
    return unless welcomeTab && welcomeEnabled
    welcomeTab.querySelector('.title').textContent = @defW.Welcome.tabTitle

    welcome = document.querySelector('.welcome .welcome-container')
    return if welcome is null
    unless welcome.getAttribute('data-localized') is 'true'
      subtitle = welcome.querySelector('.welcome-header h1.welcome-title')
      {text1, superscript, text2} = @defW.Welcome.subtitle
      subtitle.innerHTML = "#{text1}<sup>#{superscript}</sup>#{text2}"

      helpGroup = welcome.querySelector('.welcome-panel')
      if helpGroup
        helpGroup.querySelector('p').textContent = @defW.Welcome.help.forHelpVisit
        liDocs = helpGroup.querySelector('ul li:nth-child(1)')
        {text1, link, text2} = @defW.Welcome.help.atomDocs
        liDocs.childNodes[0].textContent = text1
        liDocs.childNodes[1].textContent = link
        liDocs.childNodes[2].textContent = text2
        liForum = helpGroup.querySelector('ul li:nth-child(2)')
        {text1, link, text2} = @defW.Welcome.help.atomForum
        liForum.childNodes[0].textContent = text1
        liForum.childNodes[1].textContent = link
        liForum.appendChild(document.createTextNode(text2))
        liOrg = helpGroup.querySelector('ul li:nth-child(3)')
        {text1, link, text2} = @defW.Welcome.help.atomOrg
        liOrg.childNodes[0].textContent = text1
        liOrg.childNodes[1].textContent = link
        liOrg.childNodes[2].textContent = text2
      welcome.querySelector('label').textContent = @defW.Welcome.showWelcomeGuide

      welcome.setAttribute('data-localized', 'true')

module.exports = Welcome
