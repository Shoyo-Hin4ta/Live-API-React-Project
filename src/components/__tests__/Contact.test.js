import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", ()=>{
    //@babel/preset-react is hellping this react code to convert to normal HTML Code.
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    //Assertions
    expect(heading).toBeInTheDocument();
});


test("Should load button component", ()=>{
    //@babel/preset-react is hellping this react code to convert to normal HTML Code.
    render(<Contact/>)

    const button = screen.getByRole("button");

    //Assertions
    expect(button).toBeInTheDocument();

});


test("Should load all input boxes", () => {

    //Render
    render(<Contact />)

    //Querying
    const input = screen.getAllByRole("textbox");

    //Assertions
    expect(input.length).toBe(2);
});