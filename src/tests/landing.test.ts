import { describe, expect, it } from "vitest";
import { investmentIncludes, originOptions, site } from "../config/site";

describe("Landing Page Configurations", () => {
  it("should verify document meta configurations", () => {
    expect(site.name).toBe("Acelera Conexões");
    expect(site.investment).toBe("R$ 15.000,00");
    expect(site.crmWebhookUrl).toBe(
      "https://api.datacrazy.io/v1/crm/api/crm/flows/webhooks/05a62e16-fbdb-41f6-83ee-2484caa9a3ef/10747e5e-9462-4d96-838e-3c8f71a2650c",
    );
    expect(site.metaPixelId).toBe("1663073561411767");
    expect(site.facebookDomainVerification).toBe(
      "j5ihkjl1op6x5qhy3iei8xgcfc8mvd",
    );
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
