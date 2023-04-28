console.log(process.env.GITHUB_AUTH);
import { octokit } from "../app.js";

const test = async () => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  console.log("Hello, %s", login);
};

// request to get all user repos using octokit
const getRepos = async () => {
  const { data } = await octokit.rest.repos.listForAuthenticatedUser();
  console.log(data);
};

export { test, getRepos };
