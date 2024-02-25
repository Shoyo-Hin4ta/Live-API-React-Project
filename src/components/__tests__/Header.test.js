import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Header from "../Header"


it("Should render Header Component with a login button", ()=> {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" ,{name : "Login"});

    expect(loginButton).toBeInTheDocument();

})

it("Should render Header Component with cart items", ()=> {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cart = screen.getByText("Cart(0)");

    expect(cart).toBeInTheDocument();

})


it("Should change login to loggout", ()=> {
    render(
        <BrowserRouter>
            <Provider store = {appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" ,{name : "Login"});

    fireEvent.click(loginButton)

    const logOutButton = screen.getByRole("button" ,{name : "Logout"});


    expect(logOutButton).toBeInTheDocument();

})