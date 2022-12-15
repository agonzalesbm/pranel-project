import { render, cleanup, screen } from "@testing-library/svelte";
import Message from "$lib/components/Message.svelte";

describe("This test is for the Message component", () => {
  afterEach(() => {
    cleanup();
  });
  
  test("should have the message by default ", () => {
    render(Message);
    expect(screen.getByText(/There are no products/)).toBeInTheDocument();
  });
  test("should have the message with a prop", () => {
    render(Message, { text: "here" });
    expect(screen.getByText("There are no products here")).toBeInTheDocument();
  });
});
