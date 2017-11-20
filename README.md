# atom-i18n

[![apm-download-count][apm-download-count]][apm-download-link]
[![contributor-count][contributor-count]][contributors]
[![contribute-welcome-badge][contribute-welcome-badge]][CONTRIBUTING.md]
[![issues-count][issues-count]][issues]
[![Build Status][travis-status]][travis-project]
[![dependencies Status][david-status]][david-project]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![license][license-badge]][license]

Localize [Atom][atom] :atom: for your locale.

One i18n package for Any language. :earth_asia: :earth_americas: :earth_africa:

Community-driven translation. :family:

![demo-es][demo-es]

![demo-tw][demo-tw]

![demo-de][demo-de]

![demo-ko][demo-ko]

## Language Support

| Language | code | status |
| -------- |:----:|:-------|
| Arabic | `ar` | :exclamation: [I can translate][ar-issue-filter] |
| German | `de` | :warning: 99% [I can translate][de-issue-filter] |
| Spanish | `es` | :white_check_mark: 100% |
| French | `fr` | :white_check_mark: 100% |
| Hindi | `hi` | :exclamation: [I can translate][hi-issue-filter] |
| Hungarian | `hu` | :white_check_mark: 100% |
| Italian| `it` | :warning: 50% [I can translate][it-issue-filter] |
| Japanese | `ja` | :white_check_mark: 100% |
| Korean | `ko` | :white_check_mark: 100% |
| Dutch | `nl` | :warning: 80% [I can translate][nl-issue-filter] |
| Polish | `pl` | :warning: 80% [I can translate][pl-issue-filter] |
| Portuguese(Brazil) | `pt-br` | :warning: 80% [I can translate][pt-br-issue-filter] |
| Russian | `ru` | :warning: 99% [I can translate][ru-issue-filter] |
| Thai | `th` | :warning: 80% [I can translate][th-issue-filter] |
| Chinese(Simplified) |  `zh-cn` | :white_check_mark: 100% |
| Chinese(Traditional) | `zh-tw` | :white_check_mark: 100% |


 Welcome to :heavy_plus_sign: [Propose new translation for *your locale*][Create Issue] :memo:


## Who can Contribute?

  - *Anyone* is welcomed to contribute. *Any language* is welcomed.


## How to Contribute?

  - You may checkout some [help-wanted issues][help-wanted issues].
  - For detailed guidance please refer to [CONTRIBUTING.md][CONTRIBUTING.md].


## Thanks to Contributors

  - Chinese (Simplified): [trifirew](//github.com/trifirew)
  - Korean: [preco21](//github.com/preco21) [chibichichi](//github.com/chibichichi) [Riyeon](//github.com/Riyeon) [nerhis](//github.com/nerhis)
  - Spanish: [stsewd](//github.com/stsewd)
  - German: [Acer54](//github.com/Acer54) [queenar](//github.com/queenar)
  - Russian: [Anonym0uz](//github.com/Anonym0uz) [Driglu4it](//github.com/Driglu4it)
  - Portuguese (Brazilian): [jsolisu](//github.com/jsolisu)
  - Dutch: [laurensbrand](//github.com/laurensbrand)
  - Polish: [Jeplaa](//github.com/Jeplaa)
  - French: [chezyann](//github.com/chezyann) [Vivalzar](//github.com/Vivalzar)
  - Polish: [nolt](//github.com/nolt)
  - Italian: [francematt](//github.com/francematt)
  - Thai: [sitdh](//github.com/sitdh)
  - Japanese: [shingo-uzuki](//github.com/shingo-uzuki)
  - Hungarian: [dominicus-75](//github.com/dominicus-75)


## Reference

  - this repo is based on [atom-japanese-menu](//atom.io/packages/japanese-menu) by [syon](//atom.io/users/syon) and [atom-cht-menu](//atom.io/packages/cht-menu) by [Sheng-Bo](//atom.io/users/Sheng-Bo)


## Project Structure

  * `def/` is directory containing translation content
      * content is grouped by locale folder

  * `lib/` is about translation operations
      * contains `main.coffee` which is entry point
      * 5 parts require translation:
          * menus in the top
          * context-menu when right clicked
          * settings page
          * about page
          * welcome page

  * `package.json` contains package metadata
      * key `configSchema` defines supported languages

  * `spec/` contains scripts checking cson files inside `def/`


[apm-download-count]: https://img.shields.io/apm/dm/atom-i18n.svg "apm-download-count"
[apm-download-link]: https://atom.io/packages/atom-i18n "apm-download-link"
[contributor-count]: https://img.shields.io/github/contributors/liuderchi/atom-i18n.svg "contributor-count"
[contributors]: https://github.com/liuderchi/atom-i18n#thanks-to-contributors "contributors"
[contribute-welcome-badge]: https://camo.githubusercontent.com/9c8a9bb0456c3bff0d34d8ea66071420f1ab2c44/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f6e747269627574696f6e732d77656c636f6d652d626c75652e737667 "welcome-badge"
[CONTRIBUTING.md]: https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md "CONTRIBUTING.md"
[issues-count]: https://img.shields.io/github/issues/liuderchi/atom-i18n.svg "issues-count"
[issues]: https://github.com/liuderchi/atom-i18n/issues "issues"
[travis-status]: https://travis-ci.org/liuderchi/atom-i18n.svg?branch=master "travis-status"
[travis-project]: https://travis-ci.org/liuderchi/atom-i18n "travis-project"
[david-status]: https://david-dm.org/liuderchi/atom-i18n/status.svg "david-status"
[david-project]: https://david-dm.org/liuderchi/atom-i18n "david-project"
[greenkeeper-badge]: https://badges.greenkeeper.io/liuderchi/atom-i18n.svg "greenkeeper"
[greenkeeper]: https://greenkeeper.io/ "greenkeeper"
[license-badge]: https://img.shields.io/github/license/liuderchi/atom-i18n.svg "license-badge"
[license]: http://liuderchi.mit-license.org/ "license"

[atom]: https://atom.io/ "atom"
[demo-es]: https://cloud.githubusercontent.com/assets/4994705/23652503/36826bd6-0364-11e7-9683-43cdcc2aae88.png "demo-es"
[demo-tw]: https://cloud.githubusercontent.com/assets/4994705/23652298/5123f294-0363-11e7-8f8f-e9c83f19710e.png "demo-tw"
[demo-de]: https://cloud.githubusercontent.com/assets/4994705/23652305/57d92cf8-0363-11e7-8895-85b0d5d394f9.png "demo-de"
[demo-ko]: https://cloud.githubusercontent.com/assets/4994705/23652303/54ee6fd0-0363-11e7-9b34-da9e23181be7.png "demo-ko"

[ar-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ar%22 "ar-issue-filter"
[es-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20es%22 "es-issue-filter"
[de-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20de%22 "de-issue-filter"
[fr-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20fr%22 "fr-issue-filter"
[hi-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20hi%22 "hi-issue-filter"
[hu-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20hu%22 "hu-issue-filter"
[it-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20it%22 "it-issue-filter"
[ja-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ja%22 "ja-issue-filter"
[ko-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ko%22 "ko-issue-filter"
[nl-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20nl%22 "nl-issue-filter"
[pl-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20pl%22 "pl-issue-filter"
[pt-br-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20pt-br%22 "pt-br-issue-filter"
[ru-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ru%22 "ru-issue-filter"
[th-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20th%22 "th-issue-filter"
[zh-cn-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20zh-cn%22 "zh-cn-issue-filter"
[zh-tw-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20zh-tw%22 "zh-tw-issue-filter"

[Create Issue]: https://github.com/liuderchi/atom-i18n/issues/new "Create Issue"
[help-wanted issues]: https://github.com/liuderchi/atom-i18n/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
