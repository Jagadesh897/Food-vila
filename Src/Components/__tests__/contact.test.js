import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"


describe('should load a contact us', () => {
    test('should be render', () => { 
        render(<Contact/>);
        //querry
        const result = screen.getByRole("heading");
        //Assertion
        expect(result).toBeInTheDocument();
    
    })
    
    test('should have text', () => { 
        render(<Contact/>);
        //querry
        const result = screen.getAllByRole("textbox")
        //Assertion
        expect(result.length).toBe(2);
    
    })
    
});

