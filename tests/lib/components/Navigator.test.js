import { render, cleanup, screen, fireEvent } from "@testing-library/svelte";
import Navigator from "$lib/components/Navigator.svelte";

describe("Navigator", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    // @ts-ignore
    render(Navigator);
  });

  test("The label shoes should be shown", () => {
    expect(screen.getByText(/shoes/i)).toBeDefined();
  });

  test("The label bags should be shown", () => {
    expect(screen.getByText(/bags/i)).toBeDefined();
  });

  test("The label jewelry should be shown", () => {
    expect(screen.getByText(/jewelry/i)).toBeDefined();
  });
});
