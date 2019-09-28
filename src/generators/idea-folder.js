module.exports.addVueCoreLibsToIdeaFolder = function (appDir) {
  const fs = require('fs')
  const ideaPath = `${appDir}/.idea`
  if (!fs.existsSync(ideaPath)) {
    fs.mkdirSync(ideaPath)
  }
  if (!fs.existsSync(`${ideaPath}/libraries`)) {
    fs.mkdirSync(`${ideaPath}/libraries`)
  }

  fs.writeFileSync(appDir + '/.idea/libraries/vue_generated_by_ide_helper.xml', `
<component name="libraryTable">
  <library name="vue-generated-by-ide-helper" type="javaScript">
    <properties>
      <sourceFilesUrls>
        <item url="file://$PROJECT_DIR$/node_modules/vue" />
        <item url="file://$PROJECT_DIR$/node_modules/vue-router" />
        <item url="file://$PROJECT_DIR$/node_modules/vuex" />
      </sourceFilesUrls>
    </properties>
    <CLASSES>
      <root url="file://$PROJECT_DIR$/node_modules/vue" />
      <root url="file://$PROJECT_DIR$/node_modules/vue-router" />
      <root url="file://$PROJECT_DIR$/node_modules/vuex" />
    </CLASSES>
    <SOURCES />
  </library>
</component>
`)
  const mappingsFile = ideaPath + '/jsLibraryMappings.xml'
  if (fs.existsSync(mappingsFile)) {
    const mappings = fs.readFileSync(mappingsFile).toString()
    if (!mappings.includes('vue-generated-by-ide-helper')) {
      fs.writeFileSync(mappingsFile, mappings.replace(/<\/project>/, `
  <component name="JavaScriptLibraryMappings">
    <file url="PROJECT" libraries="{vue-generated-by-ide-helper}" />
  </component>
</project>`))
    }
  } else {
    fs.writeFileSync(mappingsFile, `<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="JavaScriptLibraryMappings">
    <file url="PROJECT" libraries="{vue-generated-by-ide-helper}" />
  </component>
</project>
`)
  }
}
