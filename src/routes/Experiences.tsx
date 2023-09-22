
import { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";

export function Experiences() {
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
            {events.map((ev, eventIndex) => <ExperienceCard experience={ev} key={eventIndex} />)}
        </>
    )
}

export default Experiences
