import Event from "./Event";

function Events({events, _Event = Event}) {
    return <>
        {events.map(
            (event, index) => <div key={index} className={'m-3'}>
                <_Event
                    event={event}
                />
            </div>
        )}
    </>
}

export default Events;