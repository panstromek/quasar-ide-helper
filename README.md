# Quasar Ide Helper

This extension enables autocomplete and quick doc for various features of Quasar Framework in WebStorm and other JetBrains IDEs by generating bunch of files that IDEA can index easily. It was inspired by [laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper), which does the similar thing for Laravel.

## Current status

Note that this extension is mostly not necessary anymore, because WebStorm supports most of the features natively already. If you encounter something which is not yet supported by WebStorm but it's provided by this extension, please let us now so we can report it to JetBrains and make this extension obsolete sooner.

## Prerequisites

You need to have some JetBrains IDE (WebStorm, IntelliJ etc.) with Vue plugin installed and Quasar project. Only versions >=1.0 are supported.

## Installation & Usage

Run this in your Quasar project folder. This will install the extension and generate the helper files. It will also asks if you want to put generated files into `.gitignore`.

```bash
quasar ext add ide-helper
```

`ide-helper` also generates "fake" webpack config, which is not used by the project but IDEA can resolve imports based on its contents. This file can only be generated during `quasar dev` when we know full config, so expect it to appear after you run your dev server for the first time.

 **That's it!**
This should be everything you need to do to get started.

Now you should get autocomplete (`ctrl+space`) and quick-doc(`ctrl+q`) for Quasar components, their props, events, prototype injections, directives and CSS classes.

## Manual approach

Since 1.0 of this extension, you don't need to generate anything by hand anymore. Nevertheless, you might want to generate ide-helper files manually at some point. You can still do that with some commands and maybe some other actions. See below.

### Autocomplete files in `.quasar-ide-helper`  Folder

You can regenerate these files at any point in time with this command:

```bash
quasar run ide-helper generate
```

Also, feel free to delete this folder anytime, it will get regenerated.

### IDEA project files 

One thing this plugin does is generating some files in your `.idea` folder (this is a hidden folder that contains various metadata about projects in JetBrains IDEs). To be more concrete, it will add `vue`,`vue-router` and `vuex` as custom libraries so you get autocomplete for things like `this.$nextTick`, `this.$router` or `this.$store` in component files. Since this is a bit shady thing to do, because these files are internal, it may have no desired effect - we can't really break anything with it, because IDEA doesn't trust this folder for anything critical, but IDE can delete and completely rewrite this folder at any point in time.

If you don't have autocomplete for `vue`, `vuex` or `vue-router` instance methods and regenerating with the command above doesn't help, you can add them manually.

Go to -> settings -> Languages & Frameworks -> JavaScript -> Libraries -> Add -> (name it) -> click `+` -> attach directories-> choose `vue`,`vue-router` and `vuex` in `node_modules`) -> OK away. Now IDEA should correctly resolve Vue methods and tags.


## Optional: Live Templates

IDE-helper can also generate Live Templates for all components. We don't advocate for this feature too much, because we haven't seen many people using it and it didn't prove to be very useful, but it's still there.

If you want to generate Live Templates (Snippets), use this command first:

```bash
quasar run ide-helper templates
```

**Important**: This will generate a `.QuasarLiveTemplates.xml` file with live templates. Now you need to place this file in your IDEA config in the `templates` folder and restart the IDE. 

This is because IDEA doesn't support project-scoped templates unfortunately, so you need to put them inside the global config. For WebStorm it should be something like `./<user>/.WebStorm2018.3/config/jba_config/templates` where `<user>` is your home directory. For other JetBrains IDEs it should be similar. If you are not sure, look where it is [here](https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs)

### How templates work
 
tl;dr: There are two types of templates for each component. You can check all of them out if you type `q` and `ctrl+space` in your template.

First type of template is a lowercase component name eg. `qbtn` or `qitem`. Write that and hit `TAB`, it will expand into component tag with its props and lets you fill in the values. Template will also jump through places where you can add colon `:` to bind the prop.

Second type of templates leverages a feature in IDEA (and other editors, too) which allows you to write html tag with class, id and attributes as a CSS selector which will expand into html after `TAB`. So If you use quasar templates that has `t` suffix (like `qbtnt` or `qicont`), they won't expand into HTML but into CSS selector, so you can append more attributes, or classes

## Contributing

If you have an idea how to improve this extension or fix a bug, feel free to post an issue or submit PR. You can also look at open issues and implement some ideas for improvements that are listed there, there are few great improvements still possible.

Just bear in mind that this is not an IDE plugin - it's a hack, we can't implement any IDE features, we only give it more food to consume in a clever way. Many feature requests belong more on [JetBrains YouTrack](https://youtrack.jetbrains.com/) and not here.
 
## v0.17 Support

Supporting older versions would be a lot of work, but if there is a significant need for this, I might try to implement it in the future or more likely help potential contributors - I already built a bit a hacky generator for JSON API files from old Quasar docs. These can be used to generate helper files for ide-helper. It's an old code with some bugs, though and integrating it would probably be non-trivial. Given that users mostly moved to Quasar 1.0, I don't see a reason to burn more time on this.

## Thanks
Thanks to [@jpgilchrist](https://github.com/jpgilchrist) for the research in [this](https://github.com/quasarframework/quasar/issues/2224) issue and useful insights. Very big thanks to @hwb who noticed and wrote [here](https://forum.quasar-framework.org/topic/2322/how-to-import-quasar-components-to-use-vue-code-completion-in-intellij-idea-webstorm/2) how to trick IDEA into indexing the component - I am a bit sad that I haven't found this before as I could do something like this earlier and save myself (and others) a lot of development time. Also big thanks to [Quasar](https://github.com/quasarframework/quasar/) and its contributors ;)

## License

Copyright (c) 2019-present Matyáš Racek & contributors

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
