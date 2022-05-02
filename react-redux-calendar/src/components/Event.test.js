import {render, screen} from "@testing-library/react";
import Event from './Event';

it('should show title, description, date', () => {
    const title = 'Test Title';
    const description = 'Test Description';
    const date = new Date();
    console.log(date);

    render(<Event event={{title, description, date}} />)
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(date.toDateString())).toBeInTheDocument();
})