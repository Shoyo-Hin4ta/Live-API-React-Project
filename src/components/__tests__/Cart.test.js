import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils"
import ResMenu from "../ResMenu";
import MOCK_DATA from "../mocks/resMenuData.json"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux";
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json : () => {
                return Promise.resolve(MOCK_DATA);
            }
        }
    )
})

it("Should load Restauraunt menu component" , async() => {
    await act(async() => {
        render(
            <Provider store = {appStore}>
                <BrowserRouter>
                    <Header />
                    <ResMenu />
                    <Cart />
                </BrowserRouter>
            </Provider>
        );
    })

    const accordianHeader = screen.getByText("Rice Combo");

    fireEvent.click(accordianHeader);

        const foodItems = screen.getAllByTestId("foodItem").length;

        expect(foodItems).toBe(1);


        const getAddButton = screen.getAllByRole("button" , {name: "ADD"});
            fireEvent.click(getAddButton[0]);

        expect(screen.getByText("Cart(1)")).toBeInTheDocument();

        expect(screen.getAllByTestId("foodItem").length).toBe(2);

        const clearCartBtn = screen.getByRole("button", { name : "Clear Cart"});
            fireEvent.click(clearCartBtn)
            
            expect(screen.getAllByTestId("foodItem").length).toBe(1);

})