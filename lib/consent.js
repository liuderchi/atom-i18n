'use babel';
// "Telemetry Consent" view
//
// It has 3 views, which are "Welcom", "Welcome Guide" and "Telemetry Consent"
//
// TODO: Without `use babel`, Optional Chaining (`?.`) works. But with `use babel`, it dose not work. 
// Also, after executing `npm install --save-dev @babel/plugin-proposal-optional-chaining`, `?.` cause Atom error.
// So, temporally, getFirstElementsByClassName(elm, name) function is used, instead of `?.`.

export default class Consent {
  // private: get the pane of "Consent Telemtry"
  static getConsentPane() {
    const pane = document.getElementsByClassName('welcome')
    for (let elm of pane) {
      // if (pane[i].classList.contains('is-guide')) { continue } // Guide
      if (elm.getElementsByClassName('welcome-consent').length > 0) {
        return elm
      } // Consent
      if (elm.getElementsByClassName('welcome-header').length > 0) {
        continue
      } // Welcome
    }
    return null
  }

  // private: emuldate Optional Chaining (`?.`), with Babel, in order to pass CI/CD lint.
  static getFirstElementsByClassName(elm, name) {
    if (!elm || !name) {
      return null
    }
    let parent = elm.getElementsByClassName(name)
    if (parent) {
      return parent.item(0)
    } else {
      return null
    }
  }

  // private: 
  static updateConsent(pane) {
    const consentTab = document.querySelector('.tab[data-type="ConsentView"]')
    /* the pane that is not activated, can not be localized! So, the following codes are comment-out. 
     * Also, "ConsentView" dose not include 'active', so the following codes are comment-out 
    let consentEnabled
    if (consentTab) { ConsentEnabled = consentTab.className.includes('active') }
    if (!consentTab || !consentEnabled) { return } 
    */
    if (!consentTab) {
      return
    }
    // Tab Title: "Telemetry Consent"
    consentTab.querySelector('.title').textContent = this.defT.Consent.tabTitle
    // const consent = document.querySelector('div.welcome>div.welcome-container') // can not traverse from document
    // const consent = document.querySelector('div.welcome:not(.is-guide)')
    const consent = this.getConsentPane()
    if (!consent) {
      return
    }
    if (consent.getAttribute('data-localized') !== 'true') {
      // Line #1: Help improve...
      const desc = consent.querySelector('div.welcome-consent>p')
      if (desc !== null) {
        let {text1, text2, text3} = this.defT.Consent.desc
        desc.innerHTML = `${text1}<strong>${text2}</strong>${text3}`
      }
      // const chioceGroup = consent.getElementsByClassName('welcome-consent-choices')?.item(0) ?? null
      const chioceGroup = this.getFirstElementsByClassName(consent, 'welcome-consent-choices')
      if (chioceGroup !== null) {
        // Line #2: Button
        const btnsNodeList = chioceGroup.querySelectorAll('button[class="btn btn-primary"]')
        btnsNodeList[0].textContent = this.defT.Consent.send['send-usage']
        btnsNodeList[1].textContent = this.defT.Consent.unsend['unsend-usage']
        // Line #3: Notes
        const noteNodeList = chioceGroup.querySelectorAll('p.welcome-note')
        let node = noteNodeList[0]
        if (node !== null) {
          const {text1, text2, text3} = this.defT.Consent.send.notes
          node.childNodes[0].textContent = text1
          node.childNodes[2].textContent = text2
          node.childNodes[4].textContent = text3
        }
        node = noteNodeList[1]
        if (node !== null) {
          node.textContent = this.defT.Consent.unsend.notes
        }
      }
      // Line #4: with Love by
      const {with: _with, by} = this.defT.Consent
      const loves = consent.querySelector('div.welcome-footer>p.welcome-love')
      if (loves !== null) {
        loves.childNodes[1].textContent = _with
        loves.childNodes[3].textContent = by
      }
    }
    return consent.setAttribute('data-localized', 'true')
  }

  // call from main.js
  static localize(defT) {
    this.defT = defT
    this.updateConsent(null) // first time localize
    atom.workspace.onDidChangeActivePaneItem((item) => {
      if (!item) {
        return
      }
      if (item.constructor.name === 'ConsentView') {
        // 2nd time localize
        return setTimeout(() => this.updateConsent(item), 0)
      }
    })
  }
}
