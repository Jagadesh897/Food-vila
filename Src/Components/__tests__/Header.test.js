import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
it("should render the header component with a login button",() => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );
    const loginbutton = screen.getByRole("button");

    expect(loginbutton).toBeInTheDocument();


})

it("should render the header component with a cart 0 items",() => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );
    const loginbutton = screen.getByText("cart (0 items)");

    expect(loginbutton).toBeInTheDocument();


})
it("should render the header component with a login button and then logout",() => {
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );
    const loginbutton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbutton);
    const loginout = screen.getByRole("button",{name : "Logout"});

    expect(loginout).toBeInTheDocument();


})
