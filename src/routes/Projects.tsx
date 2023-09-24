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
    <>
      {projects.map((project) => <ProjectCard project={project} key={project.title}/>)}
    </>
  )
}

export default Projects
