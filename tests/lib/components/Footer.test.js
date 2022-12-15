import Footer from "$lib/components/Footer.svelte";
import { render, cleanup, screen, fireEvent } from "@testing-library/svelte";

describe("Footer", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    // @ts-ignore
    render(Footer);
  });

  test("should show the tittle of the page", () => {
    expect(screen.getByText("PRANEL")).toBeDefined();
  });

  test("The information title should be displayed", () => {
    expect(screen.getByText("Information")).toBeDefined();
  });

  test("The titles of the information section should be displayed ", () => {
    expect(screen.getByText("about us")).toBeDefined();
    expect(screen.getByText("privacy policy")).toBeDefined();
  });

  test("the titles of the Contact Us section should be displayed", () => {
    expect(screen.getByText(/Contact Us/i)).toBeDefined();
    expect(screen.getByText(/Direction/i)).toBeDefined();
    expect(screen.getByText(/Telephone/i)).toBeDefined();
  });

  test("the titles of the Help section should be displayed", () => {
    expect(screen.getByText(/Help/i)).toBeDefined();
    expect(screen.getByText(/Shipping/i)).toBeDefined();
    expect(screen.getByText(/Order Status/i)).toBeDefined();
    expect(screen.getByText(/Payment Options/i)).toBeDefined();
  });

  test("the titles of the Online Shopping Subpages section should be displayed", () => {
    expect(screen.getByText(/Online Shopping Subpages/i)).toBeDefined();
    expect(screen.getByText(/Bags/i)).toBeDefined();
    expect(screen.getByText(/Shoes/i)).toBeDefined();
    expect(screen.getByText(/Jewelry/i)).toBeDefined();
  });
});
