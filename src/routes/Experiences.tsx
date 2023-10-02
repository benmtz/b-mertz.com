
import { useEffect, useState } from "react";
import ExperienceCard from "../components/ExperienceCard";
import {Experience} from "../models/Experience.ts";



export function Experiences() {
    const lang = "fr_FR"
    const [events, setEvents] = useState<Experience[]>([]);

    useEffect(() => {
        if (lang == "fr_FR") {
            fetch(`/events/events.json`).then(res => res.json()).then(d => setEvents(d));
        } else {
            fetch(`/events/events.json`).then(res => res.json()).then(d => setEvents(d));
        }
    }, [])

    return (
        <>
            {events.map((exp) => <ExperienceCard experience={exp} key={exp.startDate} />)}
        </>
    )
}

export default Experiences
