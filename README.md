# atom-i18n package

[![Build Status](https://travis-ci.org/liuderchi/atom-i18n.svg?branch=master)](https://travis-ci.org/liuderchi/atom-i18n) [![dependencies Status](https://david-dm.org/liuderchi/atom-i18n/status.svg)](https://david-dm.org/liuderchi/atom-i18n)

Localize Atom for your locale.

One i18n package for multiple languages. :earth_asia: :earth_americas: :earth_africa:

Community-driven translation. :family:

![demo](https://cloud.githubusercontent.com/assets/4994705/21954194/b0cd5cbe-da85-11e6-96e0-c02202b947d0.png)

## Language Support

| Language | code | status |
| -------- |:----:|:-------|
| Arabic | `ar` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ar%22) |
| Spanish | `es` | :warning: 99% [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20es%22) |
| German | `de` | :warning: 99% [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20de%22) |
| French | `fr` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20fr%22) |
| Hindi | `hi` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20hi%22) |
| Japanese | `ja` | :warning: 95% [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ja%22) |
| Korean | `ko` | :warning: 99% [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ko%22) |
| Dutch | `nl` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20nl%22) |
| Portuguese(Brazil) | `pr-br` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20pr-br%22) |
| Russian | `ru` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20ru%22) |
| Chinese(Simplified) |  `zh-cn` | :warning: 99% [I can translate](https://github.com/liuderchi/atom-i18n/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3A%22help%20wanted%22%20label%3A%22i18n%20zh-cn%22) |
| Chinese(Traditional) | `zh-tw` | :white_check_mark: 100% |


 :heavy_plus_sign: you can [Create Issue](https://github.com/liuderchi/atom-i18n/issues/new) to propose translation for *your locale* :+1:


## How to Contribute? Who can Contribute?

  - *Any language* is welcomed. *Anyone* is welcomed to contribute.
  - There are some [existing issues](https://github.com/liuderchi/atom-i18n/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) that require your help
  - For more info of translation please refer to [CONTRIBUTING.md](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md)


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
  - Korean: [preco21](https://github.com/preco21) [chibichichi](https://github.com/chibichichi) [Riyeon](https://github.com/Riyeon)
  - Spanish: [stsewd](https://github.com/stsewd)
  - German: [Acer54](https://github.com/Acer54)
