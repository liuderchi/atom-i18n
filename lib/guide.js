// "Welcome Guide" view
//
// It has 3 views, which are "Welcom", "Welcome Guide" and "Telemetry Consent"

module.exports = class Guide {
  // inner: get the pane of "Welcome Guide"
  static getGuidePane() {
    const guide = document.getElementsByClassName("welcome is-guide").item(0)
    if (guide) {
      return guide
    } // Guide
    /* The following codes are not necessary! 
     * Because document.getElementsByClassName('welcome') can not return <div classname="welcome is-guide">
    const pane = document.getElementsByClassName('welcome')
    for (let elm of pane) {
        if (elm.classList.contains('is-guide')) { elm } // Guide, dose not work!
        if (elm.getElementsByClassName('welcome-consent').length > 0) { continue } // Consent
        if (elm.getElementsByClassName('welcome-header').length > 0) { continue } // Welcome
    } */
    return null
  }

  // inner
  static updateGuide(pane) {
    const guideTab = document.querySelector('.tab[data-type="GuideView"]')
    // let guideEnabled
    // if (guideTab) { guideEnabled = guideTab.className.includes('active') }
    // if (!guideTab || guideEnabled) { return }
    if (!guideTab) {
      return
    }
    // Tab Title: "Welcome Guide"
    guideTab.querySelector(".title").textContent = this.defG.Guide.tabTitle
    // const consent = document.querySelector('div.welcome>div.welcome-container') // can not traverse from document
    // const guide = document.querySelector('div.welcome.is-guide)')
    const guide = this.getGuidePane()
    if (!guide) {
      return
    }
    if (guide.getAttribute("data-localized") !== "true") {
      // Line #1: Sub-title
      guide.querySelector("h1.welcome-title").textContent = this.defG.Guide.subTitle
      // Line #2-#10: process 9 cards
      const cardGroup = guide.getElementsByClassName("welcome-card");
      for (let card of cardGroup) {
        let section = card.getAttribute("data-section");
        let summary = card.querySelector("summary.welcome-summary");
        let deatil = card.getElementsByClassName("welcome-detail")?.item(0) ?? null;
        let note = card.getElementsByClassName("welcome-note")?.item(0) ?? null;
        let buttonList = card.querySelectorAll("button.btn.btn-primary");
        switch (section) {
          case "project": // Line #2: Project
            {
              const {text1, text2, text3} = this.defG.Guide.project.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[1].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide.project.detail
            buttonList.item(0).textContent = this.defG.Guide.project["open-project"]
            {
              const {text1, text2} = this.defG.Guide.project.note
              note.innerHTML = `<strong>${text1}</strong>${text2}`
            }
            break
          case "git": // Line #3: Git
            {
              const {text1, text2, text3} = this.defG.Guide.git.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[2].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide.git.detail
            buttonList.item(0).textContent = this.defG.Guide.git["open-git"]
            buttonList.item(1).textContent = this.defG.Guide.git["open-github"]
            {
              const {text1, text2, text3} = this.defG.Guide.git.note
              note.childNodes[0].textContent = text1
              note.childNodes[1].textContent = text2
              note.childNodes[3].textContent = text3
            }
            break
          case "teletype": // Line #4: Teletype
            {
              const {text1, text2, text3} = this.defG.Guide.teletype.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[2].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide.teletype.detail
            buttonList.item(0).textContent = this.defG.Guide.teletype["install-teletype"]
            break
          case "packages": // Line #5: Package
            {
              const {text1, text2, text3} = this.defG.Guide.packages.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[1].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide.packages.detail
            buttonList.item(0).textContent = this.defG.Guide.packages["install-package"]
            {
              const {text1, text2} = this.defG.Guide.packages.note
              note.innerHTML = `<strong>${text1}</strong>${text2}`
            }
            break
          case "themes": // Line #6: Theme
            {
              const {text1, text2, text3} = this.defG.Guide.themes.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[1].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide.themes.detail1
            deatil.childNodes[3].textContent = this.defG.Guide.themes.detail2
            buttonList.item(0).textContent = this.defG.Guide.themes["open-theme"]
            {
              const {text1, text2} = this.defG.Guide.themes.note
              note.innerHTML = `<strong>${text1}</strong>${text2}`
            }
            break
          case "styling": // Line #7: Styling
            {
              const {text1, text2, text3} = this.defG.Guide.styling.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[1].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide.styling.detail1
            deatil.childNodes[3].textContent = this.defG.Guide.styling.detail2
            buttonList.item(0).textContent = this.defG.Guide.styling["open-stylesheet"]
            {
              const {text1, text2} = this.defG.Guide.styling.note
              note.innerHTML = `<strong>${text1}</strong>${text2}`
            }
            break
          case "init-script": // Line #8: Init Script
            {
              const {text1, text2, text3} = this.defG.Guide["init-script"].title
              summary.childNodes[0].textContent = text1
              summary.childNodes[1].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide["init-script"].detail1
            deatil.childNodes[3].textContent = this.defG.Guide["init-script"].detail2
            buttonList.item(0).textContent = this.defG.Guide["init-script"]["open-init-script"]
            {
              const {text1, text2} = this.defG.Guide["init-script"].note
              note.innerHTML = `<strong>${text1}</strong>${text2}`
            }
            break
          case "snippets": // Line #9: Snippets
            {
              const {text1, text2, text3} = this.defG.Guide.snippets.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[1].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            deatil.childNodes[1].textContent = this.defG.Guide.snippets.detail1
            deatil.childNodes[3].innerHTML = this.defG.Guide.snippets.detail2 // for <code>
            buttonList.item(0).textContent = this.defG.Guide.snippets["open-snippet"]
            {
              const {text1, text2} = this.defG.Guide.snippets.note
              note.innerHTML = `<strong>${text1}</strong>${text2}`
            }
            break
          case "shortcuts": // Line #10: Shortcuts
            {
              const {text1, text2, text3} = this.defG.Guide.shortcuts.title
              summary.childNodes[0].textContent = text1
              summary.childNodes[1].textContent = text2
              summary.appendChild(document.createTextNode(text3))
            }
            {
              const {text1, text2, text3, text4, text5, text6} = this.defG.Guide.shortcuts.detail
              deatil.childNodes[1].childNodes[0].textContent = text1
              deatil.childNodes[1].childNodes[3].textContent = text2
              deatil.childNodes[2].childNodes[0].textContent = text3
              deatil.childNodes[2].childNodes[4].textContent = text4
              deatil.childNodes[2].childNodes[5].textContent = text5
              deatil.childNodes[2].childNodes[6].textContent = text6
            }
            break
        }
      }
    }
    return guide.setAttribute("data-localized", "true")
  }

  // call from main.js
  static localize(defG) {
    this.defG = defG
    this.updateGuide(null) // 1st time localize
    atom.workspace.getCenter().onDidChangeActivePaneItem((item) => {
      if (!item) {
        return
      }
      if (item.constructor.name === "GuideView") {
        // 2nd time localize
        return setTimeout(() => this.updateGuide(item), 0)
      }
    })
  }
}
