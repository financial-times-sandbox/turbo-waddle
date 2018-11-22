// I think decouple this into a neat little CLI that deals with projects, pull requests, and issues.

const octokit = require("octokit/rest");

exports.createProject = (project) => {
    // Create a new org level GitHub project.

    // @see https://developer.github.com/v3/projects/#create-an-organization-project
}

exports.createPullRequest = (head, base = 'master') => {
    // Create a new PR.

    // @see https://developer.github.com/v3/pulls/#create-a-pull-request
}

exports.addPullRequestToProject = (pr, project) => {
    // Attach a PR to a project.

    // @see https://developer.github.com/v3/projects/cards/#create-a-project-card
}