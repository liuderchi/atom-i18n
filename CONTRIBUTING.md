# CONTRIBUTING

:smile: First of all, Thank YOU for taking time to contribute this package! :smile:

## Which Languages can I Contribute?

  - *Any language is welcomed*. Anyone is welcomed to contribute.
  - NOTE: Currently the author do not review grammar of the translation.


## Steps to Contribute

  - fork this repo
  - clone the repo you just forked to your disk

  ```shell
  git clone https://github.com/my-account/atom-i18n.git
  ```

  - change into directory then *create a branch* named as the *locale you want to contribute*. For example:

  ```shell
  cd atom-i18n-cson && git checkout -b fr
  ```

  - open the cson file under folder `def/MY_LOCALE` you wanna contribute
      - NOTE: if your locale is missing, please copy `template` folder and rename it as [your locale](http://www.science.co.il/Language/Locale-codes.php)

      ```shell
      cp -r template MY_LOCALE
      ```

  - **NOTICE #1** you can **ONLY** translate **values** rather than keys in the cson file
      - for example, let's translate `context.cson`:

      ```coffee
      Context:
        "atom-workspace":
          "application:inspect": "Inspect Element"
          # more ...
      ```

and only content `"Inspect Element"` can be translated

  - **NOTICE #2** as for `settings.cson`, values under key `label` and `id` are *identifiers* for the package and should not be translated

      ```coffee
      Settings:
        menu: [
          {
            label: "Core"  # DO NOT translate this line!
            value: "Core"  # translate please
          }
          {
            id: 'editor.lineHeight'  # DO NOT translate this line!
            title: "Line Height"         # translate please
            desc: "line-height (number)" # translate please
          }
          # more ...
      ```

  - **NOTICE #3** for the menu label containing **hotkey hint** `&`, we should preserve it with braces wrapped at the end.

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

  - commit the changes and push the branch you created to your remote

      ```
      git add ./
      git commit -m "translate something"
      git push -u origin MY_BRANCH
      ```

  - [create a pull request](https://help.github.com/articles/creating-a-pull-request/)


## Side Note: How to Test I18N Result in DEV Mode

  - uninstall `atom-i18n` if you have installed
  - change into the package repo directory you have forked and cloned
  - use `apm` command to link the package to atom user directory

  ```
  apm link
  ```

  - your package directory has been linked to `~/.atom/packages/atom-i18n`
  - then you can test it by launching (or refreshing) Atom
  - after your development, remove link

  ```
  cd path/to/fork/repo && apm unlink
  ```
