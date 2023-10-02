import {useEffect, useState} from "react";
import ProjectCard from "../components/ProjectCard.tsx";

export function Projects() {
  const lang = "fr_FR"
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (lang == "fr_FR") {
      fetch(`/projects/projects.json`).then(res => res.json()).then(d => setProjects(d));
    } else {
      fetch(`/projects/projects.json`).then(res => res.json()).then(d => setProjects(d));
    }
  }, [])

  return (
    <>
      {projects.map((project, projectIndex) => <ProjectCard project={project} key={projectIndex}/>)}
    </>
  )
}

export default Projects
