# Some Well Named CLI

It...

0. Takes a list of repositories

1. Creates a new GitHub project to track the migration (`npx ghp project:new 'A new project' > ./ghp.project.id`)

2. For each item

  a. Clones the repository to a working directory

  b. Runs a given command

  c. Displays the diff

  d. Commits the change to a new branch

  e. Pushes the branch to GitHub

  f. Opens a new PR (`npx ghp new-pr <repo> <head> <base> > .ghp/pr.id`)

  g. Adds the PR to the project (`npx ghp project:new-card --pr $(cat .ghp/pr.id) --project $(cat .ghp/project.id) [note]`)

* Plan command, skips step 1, and limits the steps in 2 to a to c ?
* Migrate command does it all

* I _really_ don't like the migration term for some reason
  * Modifications
  * Changes
  * Transformations
  * Operations
  * ...?|

![image](https://user-images.githubusercontent.com/51677/48895468-0939d180-ee3d-11e8-9238-a8c0fb9e91b5.png)
