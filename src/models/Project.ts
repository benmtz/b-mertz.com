import {Octokit} from "octokit";
import {Builder} from "builder-pattern";

const octokit = new Octokit({});

type ProjectTypes = "training" | "project";

export class Project {
  title?: string;
  main_stack?: string;
  content?: string;
  repository?: string;
  stacks?: string[];
  type?: ProjectTypes;

  static fromGithubRepo(githubRepo: Record<string, any>) {
    const topics: Array<string> = githubRepo.topics ?? [];

    let type: ProjectTypes = "project";
    if (topics.find(t => t === "training")) {
      type = "training";
    }

    return Builder<Project>()
      .title(githubRepo.name)
      .content(githubRepo.description)
      .repository(githubRepo.html_url)
      .stacks(topics.filter(e => e.startsWith("stack-")).map(s => s.replace("stack-", "")))
      .type(type)
      .build()
  }

}

export const getProjects = () => {
  return octokit.rest.repos.listForUser({
    per_page: 100, type: "owner", username: "benmtz"
  }).then(({data}) => data.map(Project.fromGithubRepo));
}

export type ProjectsByType = Record<ProjectTypes, Project[]>;
export const splitProjectsByType = (projects: Project[]): ProjectsByType => {
  return {
    project: projects.filter(p => p.type === "project"),
    training: projects.filter(p => p.type === "training")
  };
}
