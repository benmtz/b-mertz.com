
import {Project} from "../models/Project.ts";

type ProjectCardProps = {
  project: Project,
  className?: string
};

export function ProjectCard({
  project,
  className,
}: ProjectCardProps) {
    return (
        <div className={`${className} p-4 flex flex-col bg-white shadow`}>
            <h3 className='pb-2 font-semibold'>
                <a href={project.repository}>{project.title}</a>
            </h3>
            <div className='leading-5 flex-grow flex-1' dangerouslySetInnerHTML={{"__html": project.content}}></div>
            <ul className='pt-2 pb-4 text-sm leading-4 flex flex-row'>
                {project.stacks.map(t => <li key={project.title + t} className='list-none mr-1'>{t}</li>)}
            </ul>
        </div>
    )
}

export default ProjectCard
