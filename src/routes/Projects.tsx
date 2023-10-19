import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard.tsx";
import {getProjects, ProjectsByType, splitProjectsByType} from "../models/Project.ts";

export function Projects() {
  const [projects, setProjects] = useState<ProjectsByType>({training: [], project: []});

  useEffect(() => {
    getProjects().then(splitProjectsByType).then(d => setProjects(d))
  }, [])

  return (
    <div>
      <h2>Training</h2>
      <p>I usually learn new programming languages by training on codewars exercises before creating real projects</p>
      <div className={"grid md:grid-cols-4 sm:grid-cols-2 gap-1"}>
        {projects.training.map((project) => <ProjectCard className={"mr-3 mb-3 flex-grow"} project={project}
                                                         key={project.title}/>)}
      </div>
    </div>
  )
}

export default Projects
