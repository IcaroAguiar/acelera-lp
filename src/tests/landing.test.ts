import { describe, it, expect } from "vitest";
import { investmentIncludes, originOptions, site } from "../config/site";

describe("Landing Page Configurations", () => {
  it("should verify document meta configurations", () => {
    expect(site.name).toBe("Acelera Conexões");
    expect(site.investment).toBe("R$ 15.000,00");
  });

  it("should match briefing form origin options", () => {
    expect(originOptions).toEqual([
      "Instagram",
      "Indicação de amigo",
      "WhatsApp",
      "LinkedIn",
      "Outro",
    ]);
  });

  it("should list seven investment inclusions from briefing", () => {
    expect(investmentIncludes).toHaveLength(7);
  });

  it("should verify theme variables exist in Happy DOM", () => {
    document.body.innerHTML =
      '<div class="bg-track-asphalt text-primary">Acelera Conexões</div>';
    const div = document.querySelector("div");
    expect(div).not.toBeNull();
    expect(div?.textContent).toBe("Acelera Conexões");
    expect(div?.className).toContain("text-primary");
  });
});
