PU = require './preferences-util'

class PreferencesSettings

  @localize: () ->

    @defS = window.I18N.defS.Settings
    @sv = document.querySelector('.settings-view')

    # Settings panel
    @localizeSettingsPanel()

    # System panel (win32)
    @localizeSystemPanel()

    # Keybindings
    @localizeKeybindingsPanel()

    # Themes panel
    @localizeThemesPanel()

    # Updates panel
    @localizeUpdatesPanel()

    # Install panel
    @localizeInstallPanel()

    # Buttons
    PU.applyButtonToolbar()

  @localizeSettingsPanel: () ->
    # Notes
    for note in @defS.settings.notes
      info = @sv.querySelector("[id='#{note._id}']")
      unless PU.isAlreadyLocalized(info)
        info.innerHTML = note.html
        info.setAttribute('data-localized', 'true')

    # Every settings item
    for d in @defS.settings.controls
      applyTextContentBySettingsId(d)

  applyTextContentBySettingsId = (data) ->
    el = document.querySelector("[id='#{data._id}']")
    return unless el
    ctrl = el.closest('.control-group')
    PU.applyTextWithOrg(ctrl.querySelector('.setting-title'), data.title)
    PU.applyTextWithOrg(ctrl.querySelector('.setting-description'), data.desc)
    return unless data.select
    for o in el.querySelectorAll("option")
      v = o.attributes["value"].value
      o.innerText = data.select[v]

  @localizeSystemPanel: () =>
    note = @sv.querySelector('.text.icon.icon-question:not([id])')
    if note then note.textContent = @defS.system.notes

  @localizeKeybindingsPanel: () =>
    info = @sv.querySelector('.keybinding-panel>div:nth-child(2)')
    unless PU.isAlreadyLocalized(info)
      info.querySelector('span:nth-child(2)').textContent = @defS.keymaps.notes.text1
      info.querySelector('span:nth-child(4)').textContent = @defS.keymaps.notes.text2
      info.querySelector('a.link').textContent = @defS.keymaps.notes.text3
      span = document.createElement('span')
      span.textContent = @defS.keymaps.notes.text4
      info.appendChild(span)
      info.setAttribute('data-localized', 'true')

    searchBarPlaceholder = @sv.querySelector('.keybinding-panel>div:nth-child(3) .placeholder-text')
    unless PU.isAlreadyLocalized(searchBarPlaceholder)
      searchBarPlaceholder.textContent = @defS.keymaps["search-bar-placeholder"]
      searchBarPlaceholder.setAttribute('data-localized', 'true')

    keyBindTableHeader = @sv.querySelector('.keybinding-panel>table thead')
    unless PU.isAlreadyLocalized(keyBindTableHeader)
      keyBindTableHeader.querySelector('th.keystroke').textContent = @defS.keymaps["table-header-keystroke"]
      keyBindTableHeader.querySelector('th.command').textContent = @defS.keymaps["table-header-command"]
      keyBindTableHeader.querySelector('th.source').textContent = @defS.keymaps["table-header-source"]
      keyBindTableHeader.querySelector('th.selector').textContent = @defS.keymaps["table-header-selector"]
      keyBindTableHeader.setAttribute('data-localized', 'true')

  @localizeThemesPanel: () =>
    info = @sv.querySelector('.themes-panel>div>div:nth-child(2)')
    unless PU.isAlreadyLocalized(info)
      info.querySelector('span').textContent = @defS.themes.notes.text1
      info.querySelector('a.link').textContent = @defS.themes.notes.text2
      span = document.createElement('span')
      span.textContent = @defS.themes.notes.text3
      info.appendChild(span)
      tp1 = @sv.querySelector('.themes-picker>div:nth-child(1)')
      tp1.querySelector('.setting-title').textContent = @defS.themes.title1
      tp1.querySelector('.setting-description').textContent = @defS.themes.description1
      tp2 = @sv.querySelector('.themes-picker>div:nth-child(2)')
      tp2.querySelector('.setting-title').textContent = @defS.themes.title2
      tp2.querySelector('.setting-description').textContent = @defS.themes.description2
      info.setAttribute('data-localized', 'true')

  @localizeUpdatesPanel: () =>
    PU.applyTextWithOrg(@sv.querySelector('.update-all-button.btn-primary'), @defS.updates["update-all"])
    PU.applyTextWithOrg(@sv.querySelector('.update-all-button:not(.btn-primary)'), @defS.updates["check-updates"])
    PU.applyTextWithOrg(@sv.querySelector('.alert.icon-hourglass'),  @defS.updates["checking-updates"])
    PU.applyTextWithOrg(@sv.querySelector('.alert.icon-heart'),  @defS.updates["all-updated-message"])
    # TODO add failure message which is dynamic DOM node
    # PU.applyTextWithOrg(@sv.querySelector('.alert.alert-danger'), "foo bar Fetching outdated packages and themes failed.")
    # PU.applyTextWithOrg(@sv.querySelector('.alert-link.error-link'), "foo bar Show output...")

  @localizeInstallPanel: () ->
    PU.applySectionHeadings()
    inst = document.querySelector('div.section:not(.themes-panel)')
    info = inst.querySelector('.native-key-bindings')
    unless PU.isAlreadyLocalized(info)
      info.querySelector('span:nth-child(2)').textContent = @defS.install.notes.text1
      tc = info.querySelector('span:nth-child(4)')
      tc.textContent = tc.textContent.replace("and are installed to", @defS.install.notes.text2)
      span = document.createElement('span')
      span.textContent = @defS.install.notes.text3
      info.appendChild(span)
      info.setAttribute('data-localized', 'true')

    searchContainer = inst.querySelector('.search-container')
    placeholder = searchContainer.querySelector('.placeholder-text')
    placeholder.textContent = @defS.install["searchbar-placeholder"]
    # TODO i18n placeholder dynamic content
    unless PU.isAlreadyLocalized(searchContainer)
      PU.applyTextWithOrg(inst.querySelector('.search-container .btn:nth-child(1)'), @defS.install["btn-packages"])
      PU.applyTextWithOrg(inst.querySelector('.search-container .btn:nth-child(2)'), @defS.install["btn-themes"])
      searchContainer.setAttribute('data-localized', 'true')


module.exports = PreferencesSettings
