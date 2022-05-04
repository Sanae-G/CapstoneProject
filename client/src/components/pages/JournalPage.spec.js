// user.test.js
import React from "react";
import { render, screen } from "react-dom";
import { act } from "react-dom/test-utils";
import JournalPage from "./JournalPage";


global.fetch = jest.fn(() =>
Promise.resolve({
    json: () =>
    Promise.resolve({
      date: '2. April',
      day: 'Thursday',
    })
})
);

describe("JournalPage", () => {
    it("loading data", async () => {
        await act(async () => render(<JournalPage />));
        expect(screen.getByText('Thursday')).toBeInTheDocument();
    })
})