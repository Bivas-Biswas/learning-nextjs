import { useState } from "react";
import { useRouter } from "next/router";

function EventList({eventList}) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()
    const fetchSportsEvents = async ()=>{
        const res = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await res.json()
        setEvents(data)
        await router.push('/events?category=sports', undefined, { shallow: true })
    }
    return (
        <>
            <button onClick={fetchSportsEvents}>Sports Event</button>
            <h1>List of Events</h1>
            {
                events.map(event =>(
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.data} | {event.category}
                        </h2>
                    </div>
                ))
            }
        </>
    )
}

export default EventList

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? '?category=sports': ''
    const res = await fetch(`http://localhost:4000/events${queryString}`)
    const data = await res.json()

    return{
        props:{
            eventList: data
        }
    }
}