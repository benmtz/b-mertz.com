import { useEffect, useState } from 'react';

function Events() {

    const lang = "fr_FR"
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (lang == "fr_FR") {
            fetch(`/events/events.json`).then(res => res.json()).then(d => setEvents(d));
        } else {
            fetch(`/events/events.json`).then(res => res.json()).then(d => setEvents(d));
        }
    }, [])

    return (
        <>
            {events.map((ev, eventIndex) =>
                <div key={eventIndex}>
                    <h3 className='pb-2'>
                        <div>
                            <div className='font-semibold'>{ev.name}</div>
                            <div className='italic font-thin leading-3'>{ev.company}</div>
                        </div>
                        <div>
                            <div className='leading-5'>{(new Date(ev.startDate)).toLocaleDateString(undefined, {month: "long", year: 'numeric'})} - {(new Date(ev.endDate)).toLocaleDateString(undefined, {month: "long", year: 'numeric'})}</div>
                        </div>
                    </h3>
                    <ul className='pl-4 leading-5'>
                        {ev.tasks.map((t, taskIndex) => <li key={`${taskIndex}${eventIndex}`} className='list-disc'>{t}</li>)}
                    </ul>
                    <div className='pt-2 pb-4 text-sm leading-4'>
                        <span>Technologies : </span>
                        {ev.technologies.join(", ")}
                    </div>
                </div>
            )}
        </>
    )
}

export default Events
