# atom-i18n package

One i18n package for multiple languages :globe_with_meridians:

![demo](https://cloud.githubusercontent.com/assets/4994705/21954194/b0cd5cbe-da85-11e6-96e0-c02202b947d0.png)

## Language Support

| Language | code | status |
| -------- |:----:|:------:|
| Arabic | `ar` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Spanish | `es` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| German | `de` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| French | `fr` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Hindi | `hi` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Japanese | `ja` | :white_check_mark: 95% |
| Korean | `ko` | :white_check_mark: 60% |
| Dutch | `nl` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Portuguese(Brazil) | `pr-br` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Chinese(Simplified) |  `zh-cn` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |
| Chinese(Traditional) | `zh-tw` | :exclamation: [I can translate](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md) |


## How to Contribute? Who can Contribute?

  - please refer to [CONTRIBUTING.md](https://github.com/liuderchi/atom-i18n/blob/master/CONTRIBUTING.md)


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


## Reference

  - this repo is based on [atom-japanese-menu](https://atom.io/packages/japanese-menu) by [syon](https://atom.io/users/syon) and [atom-cht-menu](https://atom.io/packages/cht-menu) by [Sheng-Bo](https://atom.io/users/Sheng-Bo)
