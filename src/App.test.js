/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import Reserve from "./pages/Reserve.js";

test("Renders the Reserve Page heading", () => {
  render(<Reserve />);
  const headingElement = screen.getByText("RESERVATION");
  expect(headingElement).toBeInTheDocument();
});

test("Persons field is not null/empty", () => {
  render(<Reserve />);
  const resultElement = document.getElementById("persons");
  expect(resultElement).not.toBeNull();
});

test("Date field is not empty", () => {
  render(<Reserve />);
  const resultElement = document.getElementById("date");
  expect(resultElement).not.toBeUndefined();
});

test("Display the calendar", () => {
  render(<Reserve />);
  const datePicker = document.getElementById("date");
  expect(datePicker).toBeInTheDocument();
});
