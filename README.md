# atom-i18n package

Atom i18n package for multiple languages :globe_with_meridians:

## Language Support

  * Japanese (~100%)
  * Traditional Chinese (<10%)

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

  - please refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

## Reference

  - this repo is based on [atom-japanese-menu](https://atom.io/packages/japanese-menu) by [syon](https://atom.io/users/syon) and [atom-cht-menu](https://atom.io/packages/cht-menu) by [Sheng-Bo](https://atom.io/users/Sheng-Bo)
