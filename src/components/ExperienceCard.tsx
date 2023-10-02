
type Experience = {
    name: string,
    company: string,
    startDate: string,
    endDate: string,
    tasks: string[],
    technologies: string[]
};

type ExperienceCardProps = {
    experience: Experience,
};

export function ExperienceCard({
    experience,
}: ExperienceCardProps) {

    return (
        <>
            <h3 className='pb-2'>
                <div>
                    <div className='font-semibold'>{experience.name}</div>
                    <div className='italic font-thin leading-3'>{experience.company}</div>
                </div>
                <div>
                    <div className='leading-5'>{(new Date(experience.startDate)).toLocaleDateString(undefined, {month: "long", year: 'numeric'})} - {(new Date(experience.endDate)).toLocaleDateString(undefined, {month: "long", year: 'numeric'})}</div>
                </div>
            </h3>
            <ul className='pl-4 leading-5'>
                {experience.tasks.map(t => <li key={t} className='list-disc'>{t}</li>)}
            </ul>
            <div className='pt-2 pb-4 text-sm leading-4'>
                <span>Technologies:</span>
                {experience.technologies.join(", ")}
            </div>
        </>
    )
}

export default ExperienceCard
