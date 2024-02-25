import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import {act} from "react-dom/test-utils"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
//defining our own fetch function

global.fetch = jest.fn(() => {

    //mocking how our fetch function works in the body

    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should Search for poori text", async ()=>{

    await act(async () => render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            )
    );

    const searchButton = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value : "poori"}});

    fireEvent.click(searchButton);

    //expect(searchButton).toBeInTheDocument();
    //expected to get one poori card

    const cards = screen.getAllByTestId("resCard");
    
    expect(cards.length).toBe(1);
})