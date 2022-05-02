import {render, screen} from "@testing-library/react";


it('should show username and password inputs', () => {
    render(<Login />);
    const usernameElement = screen.getAllByPlaceholderText(/Username/);
    expect(usernameElement).toBeInTheDocument();
    const passwordElement = screen.getAllByPlaceholderText(/Password/);
    expect(passwordElement).toBeInTheDocument();
});

// 'should show login button'