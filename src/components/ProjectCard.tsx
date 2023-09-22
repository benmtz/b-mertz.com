
type project = {
    title: string,
    main_stack: string,
    content: string,
    link: string,
    stacks: string[],
};

type ProjectCardProps = {
    project: project,
};

export function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <>
            <a href={project.link}>link</a>
            <h3 className='pb-2'>
                <div>
                    <div className='font-semibold'>{project.title}</div>
                    <div className='italic font-thin leading-3'>{project.main_stack}</div>
                </div>
                <div>
                </div>
            </h3>
            <ul className='pl-4 leading-5'>
                <div className='leading-5'>{project.content}</div>
            </ul>
            <div className='pt-2 pb-4 text-sm leading-4'>
                {project.stacks.map(t => <li key={t} className='list-disc'>{t}</li>)}
            </div>
        </>
    )
}

export default ProjectCard
