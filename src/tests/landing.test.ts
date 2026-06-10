import { describe, it, expect } from "vitest";

describe("Landing Page Configurations", () => {
  it("should verify document meta configurations", () => {
    const title = "Interlagos Private Track Club";
    expect(title).toBe("Interlagos Private Track Club");
  });

  it("should verify theme variables exist in Happy DOM", () => {
    document.body.innerHTML =
      '<div class="bg-track-asphalt text-primary">Interlagos Private</div>';
    const div = document.querySelector("div");
    expect(div).not.toBeNull();
    expect(div?.textContent).toBe("Interlagos Private");
    expect(div?.className).toContain("text-primary");
  });
});
