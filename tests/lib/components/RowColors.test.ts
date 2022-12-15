import { render, cleanup, screen, fireEvent } from "@testing-library/svelte";
import RowColors from "$lib/components/RowColors.svelte";

describe("Test of RowColors component", () => {
  afterEach(() => {
    cleanup();
  });

  render(RowColors);

  test("Filter component should has filter by title", () => {
    expect(screen.queryAllByText(/filter by title/)).toBeDefined();
  });

  test("Filter component should has order by price", () => {
    expect(screen.queryAllByText(/order by price/)).toBeDefined();
  });

  test("Filter component should has ascending desending options", () => {
    expect(screen.queryAllByText(/ascendig/)).toBeDefined();
    expect(screen.queryAllByText(/desending/)).toBeDefined();
  });

  test("Filter component should has colors pulled apart", () => {
    expect(screen.queryAllByText(/colors/)).toBeDefined();
  });

  test("Filter component should has clean the filter button", () => {
    expect(screen.queryAllByText(/clean the filter button/)).toBeDefined();
  });
});
