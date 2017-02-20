# CONTRIBUTING

:tada::tada: First of all, THANK YOU for taking time to contribute this package! :tada::tada:

## Which Languages can I Contribute?

  - *Any language* is welcomed. *Anyone* is welcomed to contribute. :earth_asia: :earth_americas: :earth_africa:
  - There are several [ issues](https://github.com/liuderchi/atom-i18n/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) require your help.
  - NOTE: Currently the author do not review grammar of the translation.


## Steps to Contribute

  1. please checkout [Pull Request Page](https://github.com/liuderchi/atom-i18n/pulls) first in case there is already someone contributing.
  2. fork this repo
  3. clone the repo you just forked to your disk

  ```shell
  git clone https://github.com/my-account/atom-i18n.git
  ```

  4. change into directory then *create a branch* named as the *locale you want to contribute*. For example:

  ```shell
  cd atom-i18n-cson && git checkout -b fr
  ```

  5. open the cson file under folder `def/MY_LOCALE` you wanna translate
      - NOTE: if your locale is missing, please copy `def/template` folder and rename it as [your locale](http://www.science.co.il/Language/Locale-codes.php)

      ```shell
      cd def && cp -r template MY_LOCALE
      ```

  6. please read [translation guide](#translation-guide) before translation

  7. you may preview your translation by [enabling DEV mode](#how-to-test-i18n-result-in-dev-mode)

  8. commit the changes and push the branch you created to your remote

      ```
      git add def/
      git commit -m "translate something"
      git push -u origin MY_BRANCH
      ```

  9. [create a pull request](https://help.github.com/articles/creating-a-pull-request/)


## Translation Guide

  1. **only** translate **values** rather than keys in the cson file
      - for example, let's translate `context.cson`:

      ```coffee
      Context:
        "atom-workspace":
          "application:inspect": "Inspect Element"
          # more ...
      ```

      - in previous example, only string `"Inspect Element"` need to be translated

  2. in `settings.cson`, keys having **underscore prefix** (e.g. `_label`, `_id`) are identifiers for package execution whose values **WILL NOT be translated**

      ```coffee
      Settings:
        menu: [
          {
            _label: "Core"  # DO NOT translate this line!
            value: "Core"  # translate please
          }
          {
            _id: 'editor.lineHeight'  # DO NOT translate this line!
            title: "Line Height"         # translate please
            desc: "line-height (number)" # translate please
          }
          # more ...
      ```

  3. for the menu label containing **hotkey hint** `&`, we **preserve it with braces** wrapped at the end.

      - for example let's checkout how `def/ja/menu_win32.cson` is translated into Japanese:

      ```coffee
      Menu:
        "&File":
          value: "ファイル(&F)"
          submenu:
            "New &Window":
              value: "新規ウインドウ(&W)"
            # more ...
      ```

the value of key `"&File"` ,`"New &Window"` are translated into `"ファイル(&F)"`, `"新規ウインドウ(&W)"`


## How to Preview Your Translation in Development?

  1. uninstall `atom-i18n` if you have installed
  2. change into the package directory you have forked and cloned
  3. use `apm` command to link the package to atom user directory

  ```shell
  apm link
  ```

  Now your package directory has been linked to `~/.atom/packages/atom-i18n`

  4. you can preview i18n result by launching (or reloading) Atom

      - after your development, remove package link

      ```shell
      cd path/to/fork/repo && apm unlink
      ```
