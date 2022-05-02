import {render, screen} from "@testing-library/react";
import Events from "./Events";

// also add to this that onDelete is passed to each mock
it('should show 2 events', () => {
    const eventData = ['event1', 'event2']

    const mockEvent = ({event}) => {
        return <div>{event}</div>
    }

    render(<Events events={eventData} _Event={mockEvent} />)
    expect(screen.getByText('event1')).toBeInTheDocument();
    expect(screen.getByText('event2')).toBeInTheDocument();
})


// 'should accept on onEdit property'