import { render, cleanup, screen, fireEvent } from "@testing-library/svelte";
import Header from "$lib/components/Header.svelte";

describe("Test for Header component", () => {
  afterEach(() => {
    cleanup();
  });

  render(Header);

  test("Should show catergory menu title all time", () => {
    expect(screen.getAllByText("Category")).toBeDefined();
  });

  test("Category menu should have the categorie jewelry", () => {
    expect(screen.queryAllByText(/jewelry/)).toBeDefined();
  });

  test("Category menu should have the categorie bags", () => {
    expect(screen.queryAllByText(/bags/)).toBeDefined();
  });

  test("Category menu should have the categorie shoes", () => {
    expect(screen.queryAllByText(/shoes/)).toBeDefined();
  });
});
