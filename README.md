# atom-i18n package

One i18n package for multiple languages :globe_with_meridians:

## Language Support

| Language | code | status |
| -------- |:----:|:------:|
| Arabic | `ar` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Spanish | `es` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| German | `de` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| French | `fr` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Hindi | `hi` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Japanese | `ja` | :white_check_mark: 95% |
| Korean | `ko` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Dutch | `nl` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Portuguese(Brazil) | `pr-br` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Chinese(China) |  `zh-tw` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Chinese(Taiwan) | `zh-cn` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |

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

## How to Contribute?

  - please refer to [CONTRIBUTING.md](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md)

## Reference

  - this repo is based on [atom-japanese-menu](https://atom.io/packages/japanese-menu) by [syon](https://atom.io/users/syon) and [atom-cht-menu](https://atom.io/packages/cht-menu) by [Sheng-Bo](https://atom.io/users/Sheng-Bo)
