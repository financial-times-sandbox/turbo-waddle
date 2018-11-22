const path = require('path');

exports.command = 'migrate <dir>'

exports.desc = 'Run a migration'

exports.builder = {
  dir: { default: '.' }
}

exports.handler = function (argv) {
  const { name, command, targets } = require(path.resolve(argv.dir));

  console.log('migrate called for migration', name)

  console.log('Creating the GitHub project', name)

  for (let i = 0; i < targets.length; i++) {
    console.log(`Migrating ${i + 1} of ${targets.length}`)

    console.log(`Cloning ${targets[i]}`)
  
    console.log('Running command', command)
  
    console.log('Diff time')

    console.log('Checking out new branch add-renovate-patch')

    console.log('Committing the changes to add-renovate-patch')

    console.log('Pushing add-renovate-patch to GitHub')

    console.log('Opening a PR to merge add-renovate-patch into master')

    console.log(`Adding PR #123 to the ${name} project`)
  }
}