# atom-i18n package

[![Build Status](https://travis-ci.org/liuderchi/atom-i18n.svg?branch=master)][travis-project] [![dependencies Status](https://david-dm.org/liuderchi/atom-i18n/status.svg)](https://david-dm.org/liuderchi/atom-i18n)

Localize Atom for your locale.

One i18n package for multiple languages. :earth_asia: :earth_americas: :earth_africa:

Community-driven translation. :family:

![demo-es][demo-es]

![demo-tw][demo-tw]

![demo-de][demo-de]

![demo-ko][demo-ko]

## Language Support

| Language | code | status |
| -------- |:----:|:-------|
| Arabic | `ar` | :exclamation: [I can translate][ar-issue-filter] |
| Spanish | `es` | :white_check_mark: 100% |
| German | `de` | :warning: 99% [I can translate][de-issue-filter] |
| French | `fr` | :exclamation: [I can translate][fr-issue-filter] |
| Hindi | `hi` | :exclamation: [I can translate][hi-issue-filter] |
| Japanese | `ja` | :warning: 95% [I can translate][ja-issue-filter] |
| Korean | `ko` | :white_check_mark: 100% |
| Dutch | `nl` | :exclamation: [I can translate][nl-issue-filter] |
| Portuguese(Brazil) | `pt-br` | :exclamation: [I can translate][pt-br-issue-filter] |
| Russian | `ru` | :exclamation: [I can translate][ar-issue-filter] |
| Chinese(Simplified) |  `zh-cn` | :warning: 99% [I can translate][ru-issue-filter] |
| Chinese(Traditional) | `zh-tw` | :white_check_mark: 100% |


 :heavy_plus_sign: you can [Create Issue][Create Issue] to propose translation for *your locale* :+1:


## How to Contribute? Who can Contribute?

  - *Any language* is welcomed. *Anyone* is welcomed to contribute.
  - There are some [help-wanted issues][help-wanted issues] that require your help
  - For more info of translation please refer to [CONTRIBUTING.md][CONTRIBUTING.md]


## Project Structure

  * `def/` is directory containing translation content
      * content is grouped by locale folder

  * `lib/` is about translation operations
      * contains `main.coffee` which is entry point
      * 4 parts require translation:
          * menus in the top
          * context-menu when right clicked
          * settings page
          * about page

  * `package.json` contains package metadata
      * key `configSchema` defines supported languages

  * `spec/` contains scripts checking cson files inside `def/`

## Reference

  - this repo is based on [atom-japanese-menu](https://atom.io/packages/japanese-menu) by [syon](https://atom.io/users/syon) and [atom-cht-menu](https://atom.io/packages/cht-menu) by [Sheng-Bo](https://atom.io/users/Sheng-Bo)


## Thanks for Contribution

  - Chinese(Simplified): [trifirew](https://github.com/trifirew)
  - Korean: [preco21](https://github.com/preco21) [chibichichi](https://github.com/chibichichi) [Riyeon](https://github.com/Riyeon) [nerhis](https://github.com/nerhis)
  - Spanish: [stsewd](https://github.com/stsewd)
  - German: [Acer54](https://github.com/Acer54)
  - Russian: [Anonym0uz](https://github.com/Anonym0uz)



[travis-project]: https://travis-ci.org/liuderchi/atom-i18n "travis-project"
[david-status]: https://david-dm.org/liuderchi/atom-i18n/status.svg "david-status"
[david-project]: https://david-dm.org/liuderchi/atom-i18n "david-project"
[demo-es]: https://cloud.githubusercontent.com/assets/4994705/23652503/36826bd6-0364-11e7-9683-43cdcc2aae88.png "demo-es"
[demo-tw]: https://cloud.githubusercontent.com/assets/4994705/23652298/5123f294-0363-11e7-8f8f-e9c83f19710e.png "demo-tw"
[demo-de]: https://cloud.githubusercontent.com/assets/4994705/23652305/57d92cf8-0363-11e7-8895-85b0d5d394f9.png "demo-de"
[demo-ko]: https://cloud.githubusercontent.com/assets/4994705/23652303/54ee6fd0-0363-11e7-9b34-da9e23181be7.png "demo-ko"

[ar-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ar%22 "ar-issue-filter"
[es-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20es%22 "es-issue-filter"
[de-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20de%22 "de-issue-filter"
[fr-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20fr%22 "fr-issue-filter"
[hi-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20hi%22 "hi-issue-filter"
[ja-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ja%22 "ja-issue-filter"
[ko-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ko%22 "ko-issue-filter"
[nl-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20nl%22 "nl-issue-filter"
[pt-br-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20pt-br%22 "pt-br-issue-filter"
[ru-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ru%22 "ru-issue-filter"
[zh-cn-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20zh-cn%22 "zh-cn-issue-filter"
[zh-tw-issue-filter]: https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20zh-tw%22 "zh-tw-issue-filter"

[Create Issue]: https://github.com/liuderchi/atom-i18n/issues/new "Create Issue"
[help-wanted issues]: https://github.com/liuderchi/atom-i18n/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
[CONTRIBUTING.md]: https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md "CONTRIBUTING.md"
