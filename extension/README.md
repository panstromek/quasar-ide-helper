# Quasar Ide Helper
This extension enables autocomplete and quick doc for for various features of Quasar framework in WebStorm and other JetBrains IDEs by generating bunch of files that IDEA can index easily.

This project is still in development, so expect missing features. Contributions welcome ;) (but open an issue pls)

## Usage
You need to have a Vue plugin installed in the IDE and Quasar of course.

Run this in a Quasar project folder
```bash
yarn add quasar-app-extension-ide-helper
```
Then you need to add the extension into Quasar
```bash
quasar ext --add ide-helper
```
Now you can generate helper files
```bash
quasar ide-helper generate
```
After that you should get autocomplete and quick-doc for Quasar components, their props, prototype injections,directives and CSS classes. Note that you won't get auto-import so you still need to import the files in the `quasar.conf.js` or locally from `quasar` (don't import from helper files, obviously). CSS addon also need to be in `quasar.conf.js`.

It's because this helper can't recognize if you imported the component globally with `quasar.conf.js` or you need a local import. I am still figuring out how to provide more help in this area but for now it's just this simple. True IDEA based auto-import will need a bit more clever hacking (help appreciated ;) ).

## Live Templates
IDE-helper can also generate Live Templates for all components. If you want to generate Live Templates (Snippets), use this command first:
```bash
quasar run ide-helper templates
```
This will generate a `.QuasarLiveTemplates.xml` file with extensions. Now you need to place this file in your IDEA config in the `templates` folder. IDEA doesn't support project-scoped templates unfortunately, so you need to put them inside the global config. For WebStorm it should be something like `./<user>/.WebStorm2018.3/system/jba_config/templates` where `<user>` is your home directory. For other JetBrains IDEs it should be similar. If you are not sure, look at: https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs

### How templates work
 
tl;dr: There are two types of templates for each component. You can check all of them out if you type `q` and `ctrl+space` in your template.

First type of template is a lowercase component name eg. `qbtn` or `qitem`. Write that and hit `TAB`, it will expand into component tag with its props and lets you fill in the values. Template will also jump through places where you can add colon `:` to bind the prop.

Second type of templates leverages a feature in IDEA (and other editors, too) which allows you to write html tag with class, id and attributes as a CSS selector which will expand into html after `TAB`. So If you use quasar templates that has `t` suffix (like `qbtnt` or `qicont`), they won't expand into HTML but into CSS selector, so you can append more attributes, or classes

## Roadmap + Contributions
This is just an MVP but I can already see bunch of things that can be improved or added. If you have an idea for a feature or a clever IDE hack, post an issue so we can discuss and add it ;) 

Few things from op of my head
 - Autocomplete events as "fake" props - I will do this next release, it's easy
 - Support v-model in templates - Will do this, should be straightforward
 - Type hints for complex types, enums etc are not implemented, yet
 - Auto-import - this one is pretty tricky, but it may work as some hack with webpack config. I couldn't found working example yet, though.
 - Vue, Vuex and Vue-router are not properly recognized (You can add them in settings though), I want to do something cool with these, stay tuned ;)
 - Limit props in templates - some templates generate bunch of props which are not always useful, so it would be nice to limit them somehow, but its not really clear how. I have a few ideas, though
 - Icons autocomplete - I'd love this ;) I have an idea how to do it, too ;)
 - ... see issues for more, I will track missing features there
 
## v0.17 Support
This extension is primarily focused on v1.0, because it uses its json-api files but not everyone can migrate right away, so I plan to add at least basic support for v0.17, I already have a POC for a generator, but I want to integrate it more smoothly into the project.

## Thanks
Thanks to @jpgilchrist for an earlier research in `this` issue and useful insights. Very big thanks to ...... who noticed how to trick IDEA into indexing the component correctly - I am a bit sad that I haven't noticed this before as I could do something like this earlier and save myself (and others) a lot of development time. Also big thanks to Quasar and its contributors ;)