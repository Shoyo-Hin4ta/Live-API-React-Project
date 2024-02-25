import {render, screen} from "@testing-library/react";
import ResCard from "../ResCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withNewLabel } from "../ResCard";

it("Should render Res Card component with props", () => {


    render(<ResCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("La Pino'z Pizza");

    expect(name).toBeInTheDocument();
});


it("Should render ResCard component with promoted label", () => {

    const UpdatedResCard = withNewLabel(ResCard);

    render(<UpdatedResCard resData = {MOCK_DATA}/>)

    const name = screen.getByText("Non-veg");

    expect(name).toBeInTheDocument();
});