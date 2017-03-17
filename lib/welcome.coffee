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
      subtitle.innerHTML = subtitle.innerHTML.replace("A hackable text editor for the 21", @defW.Welcome.subtitle.text1)
      subtitle.querySelector('sup').textContent = @defW.Welcome.subtitle.superscript
      subtitle.innerHTML = subtitle.innerHTML.replace(" Century", @defW.Welcome.subtitle.text2)

      helpGroup = welcome.querySelector('.welcome-panel')
      if helpGroup
        helpGroup.querySelector('p').textContent = @defW.Welcome.help.forHelpVisit
        liDocs = helpGroup.querySelector('ul li:nth-child(1)')
        liDocs.innerHTML = liDocs.innerHTML.replace("The ", @defW.Welcome.help.atomDocs.text1)
        liDocs.querySelector('a[data-event="atom-docs"]').textContent = @defW.Welcome.help.atomDocs.link
        liDocs.innerHTML = liDocs.innerHTML.replace(" for Guides and the API reference.", @defW.Welcome.help.atomDocs.text2)
        liForum = helpGroup.querySelector('ul li:nth-child(2)')
        liForum.innerHTML = liForum.innerHTML.replace("The Atom forum at ", @defW.Welcome.help.atomForum.text1)
        liForum.querySelector('a[data-event="discuss"]').textContent = @defW.Welcome.help.atomForum.link
        liForum.innerHTML = liForum.innerHTML + @defW.Welcome.help.atomForum.text2
        liOrg = helpGroup.querySelector('ul li:nth-child(3)')
        liOrg.innerHTML = liOrg.innerHTML.replace("The ", @defW.Welcome.help.atomOrg.text1)
        liOrg.querySelector('a[data-event="atom-org"]').textContent = @defW.Welcome.help.atomOrg.link
        liOrg.innerHTML = liOrg.innerHTML.replace(". This is where all GitHub-created Atom packages can be found.", @defW.Welcome.help.atomOrg.text2)
      welcome.querySelector('label').textContent = @defW.Welcome.showWelcomeGuide

      welcome.setAttribute('data-localized', 'true')

module.exports = Welcome
