export const site = {
  name: "Acelera Conexões",
  location: "Interlagos, SP",
  description:
    "Experiência premium de pilotagem em Interlagos para empresários e executivos de alto nível.",
  investment: "R$ 15.000,00",
  whatsappPhone: import.meta.env.PUBLIC_WHATSAPP_PHONE ?? "",
  crmWebhookUrl:
    import.meta.env.PUBLIC_CRM_WEBHOOK_URL ??
    "https://api.datacrazy.io/v1/crm/api/crm/flows/webhooks/05a62e16-fbdb-41f6-83ee-2484caa9a3ef/10747e5e-9462-4d96-838e-3c8f71a2650c",
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? "https://aceleraconexoes.online",
  ogImage: "/images/interlagos-aerial-1280.jpg",
  ga4Id: import.meta.env.PUBLIC_GA4_ID ?? "",
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID ?? "1663073561411767",
  facebookDomainVerification:
    import.meta.env.PUBLIC_FACEBOOK_DOMAIN_VERIFICATION ??
    "j5ihkjl1op6x5qhy3iei8xgcfc8mvd",
  /** Logo horizontal sem fundo (PDF impressão · variante lima). */
  logo: "/brand/logo-horizontal-lime.png",
  logoOrange: "/brand/logo-horizontal-orange.png",
  paletteReference: "/brand/paleta-cores.png",
  heroVideo: {
    poster: "/images/interlagos-aerial.webp",
    desktopMp4: "/videos/hero-acelera-1080.mp4",
    mobileMp4: "/videos/hero-acelera-720.mp4",
    webm: "/videos/hero-acelera-720.webm",
  },
} as const;

/** Paleta oficial do manual de marca (Drive). */
export const brandPalette = {
  lime: "#B9D743",
  orange: "#FC8A1A",
  purple: "#7E3AED",
  black: "#141312",
  offWhite: "#F1F2EB",
} as const;

export const investmentIncludes = [
  "Acesso à pista de Interlagos durante todo o dia.",
  "Pilotagem em carros esportivos com instrução profissional.",
  "Competição no simulador profissional.",
  "Almoço e Coffee break.",
  "Dinâmicas estratégicas de networking.",
  "Material e kit do participante.",
  "Cerimônia de pódio e registro fotográfico.",
] as const;

export const originOptions = [
  "Instagram",
  "Indicação de amigo",
  "WhatsApp",
  "LinkedIn",
  "Outro",
] as const;
