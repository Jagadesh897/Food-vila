import { render, screen } from "@testing-library/react";
import Restaurantcard from "../Restaurantlist";
import MOCK_DATA from "../mocks/restaurancard_mock.json";
import "@testing-library/jest-dom";

it("should be call api", () => {
  render(<Restaurantcard resData={MOCK_DATA} />);
  const name = screen.getByText( "McDonald's");

  expect(name).toBeInTheDocument();
});
