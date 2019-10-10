/**
 * Quasar App Extension prompts script
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 */

module.exports = function () {
  return [
    {
      name: 'addToGitignore',
      type: 'confirm',
      message: 'Add generated files to .gitignore?',
      default: true
    }
  ]
}
