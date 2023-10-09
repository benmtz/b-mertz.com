import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard.tsx";
import {Project} from "../models/Project.ts";

export function Projects() {
  const lang = "fr_FR"
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (lang == "fr_FR") {
      fetch(`/projects/projects.json`).then(res => res.json()).then(d => setProjects(d));
    } else {
      fetch(`/projects/projects.json`).then(res => res.json()).then(d => setProjects(d));
    }
  }, [])

  return (
    <div className={"grid md:grid-cols-4 sm:grid-cols-2 gap-1"}>
      {projects.map((project) => <ProjectCard className={"mr-3 mb-3 flex-grow"} project={project} key={project.title}/>)}
    </div>
  )
}

export default Projects
