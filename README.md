# atom-i18n package

[![Build Status](https://travis-ci.org/liuderchi/atom-i18n.svg?branch=master)](https://travis-ci.org/liuderchi/atom-i18n)

One i18n package for multiple languages :earth_asia: :earth_americas: :earth_africa:

![demo](https://cloud.githubusercontent.com/assets/4994705/21954194/b0cd5cbe-da85-11e6-96e0-c02202b947d0.png)

## Language Support

| Language | code | status |
| -------- |:----:|:-------|
| Arabic | `ar` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Spanish | `es` | :white_check_mark: 100% |
| German | `de` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| French | `fr` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Hindi | `hi` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Japanese | `ja` | :white_check_mark: 95% |
| Korean | `ko` | :white_check_mark: 100% |
| Dutch | `nl` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Portuguese(Brazil) | `pr-br` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Chinese(Simplified) |  `zh-cn` | :white_check_mark: 70% |
| Chinese(Traditional) | `zh-tw` | :white_check_mark: 100% |


## How to Contribute? Who can Contribute?

  - *Any language* is welcomed. *Anyone* is welcomed to contribute.
  - There are some [existing issues](https://github.com/liuderchi/atom-i18n/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) that require your help
  - For more info of translation please refer to [CONTRIBUTING.md](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md)


## Project Structure

  * `def/` is directory containing translation content
      * content is grouped by locale folder

  * `lib/` is about translation operations
      * contains `main.coffee` which is entry point
      * 3 big parts require i18n:
          * menus in the top
          * context-menu when right clicked
          * preference page

  * `package.json` contains package metadata
      * key `configSchema` defines supported languages

  * `spec/` contains scripts checking cson files inside `def/`

## Reference

  - this repo is based on [atom-japanese-menu](https://atom.io/packages/japanese-menu) by [syon](https://atom.io/users/syon) and [atom-cht-menu](https://atom.io/packages/cht-menu) by [Sheng-Bo](https://atom.io/users/Sheng-Bo)


## Thanks for Contribution

  - Chinese(Simplified): [trifirew](https://github.com/trifirew)
  - Korean: [preco21](https://github.com/preco21) [chibichichi](https://github.com/chibichichi) [Riyeon](https://github.com/Riyeon)
  - Spanish: [stsewd](https://github.com/stsewd)
