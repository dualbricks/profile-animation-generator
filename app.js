import * as dotenv from "dotenv";
dotenv.config();
import { Octokit, App } from "octokit";

const octokit = new Octokit({ auth: `${process.env.GITHUB_AUTH}` });

export { octokit };
