import { render, screen, cleanup } from "@testing-library/react";
import Home from "./pages/Home/Home";
import { Progress } from "./pages/Progress/Progress";

afterEach(cleanup)

test("Should render Home component", () => {
  render(<Home />)
  const homeComponent = screen.getByTestId("home-1")
  expect(homeComponent).toBeInTheDocument();
})

test("Should render progress component", () => {
  render(<Progress />)
  const progressComponent = screen.getByTestId("progress-1")
  expect(progressComponent).toBeInTheDocument();
})