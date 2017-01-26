class PreferencesUtil

  @isAlreadyLocalized = (elem) ->
    localized = elem.getAttribute('data-localized') if elem
    return localized == 'true'

  @applySpecialHeading = (area, org, childIdx, text) ->
    # org: original
    sh = @getTextMatchElement(area, '.section-heading', org)
    return unless sh && !@isAlreadyLocalized(sh)
    sh.childNodes[childIdx].textContent = null
    span = document.createElement('span')
    span.textContent = org
    @applyTextWithOrg(span, text)
    sh.appendChild(span)

  @applyTextWithOrg = (elem, text) ->
    return unless text
    before = String(elem.textContent)
    return if before == text
    elem.innerHTML = text    # NOTE text may contain HTML
    elem.setAttribute('title', before)
    elem.setAttribute('data-localized', 'true')
    # NOTE indicator for localized elemnt
    # TODO elem.setAttribute('data-before-localized', before)

  @getTextMatchElement = (area, query, text) ->
    elems = area.querySelectorAll(query)
    result
    for el in elems
      if el.textContent.includes(text)
        result = el
        break
    return result

  @applySectionHeadings = (force) ->
    sv = document.querySelector('.settings-view')
    for sh in window.I18N.defS.Settings.sectionHeadings
      el = @getTextMatchElement(sv, '.section-heading', sh._label)
      continue unless el
      if !@isAlreadyLocalized(el) || force
        @applyTextWithOrg(el, sh.value)
    for sh in window.I18N.defS.Settings.subSectionHeadings
      el = @getTextMatchElement(sv, '.sub-section-heading', sh._label)
      continue unless el
      if !@isAlreadyLocalized(el) || force
        @applyTextWithOrg(el, sh.value)

  @applyButtonToolbar = () ->
    # NOTE button in package updates/install tabs
    @defS = window.I18N.defS.Settings
    sv = document.querySelector('.settings-view')
    for btn in sv.querySelectorAll('.meta-controls .install-button')
      unless @isAlreadyLocalized(btn)
        buttonText = if btn.textContent.startsWith('Update to')
        then @defS["control-btns"].update + (version = btn.textContent.substr(9))
        else @defS["control-btns"].install
        @applyTextWithOrg(btn, buttonText)
    for btn in sv.querySelectorAll('.meta-controls .settings')
      @applyTextWithOrg(btn, @defS["control-btns"].setting)
    for btn in sv.querySelectorAll('.meta-controls .uninstall-button')
      @applyTextWithOrg(btn, @defS["control-btns"].uninstall)
    for btn in sv.querySelectorAll('.meta-controls .icon-playback-pause span')
      @applyTextWithOrg(btn, @defS["control-btns"].disable)
    for btn in sv.querySelectorAll('.meta-controls .icon-playback-play span')
      @applyTextWithOrg(btn, @defS["control-btns"].enable)

module.exports = PreferencesUtil
