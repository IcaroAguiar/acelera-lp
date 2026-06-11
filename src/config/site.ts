export const site = {
  name: "Acelera Conexões",
  location: "Interlagos, SP",
  description:
    "Experiência premium de pilotagem em Interlagos para empresários e executivos de alto nível.",
  investment: "R$ 15.000,00",
  whatsappPhone: import.meta.env.PUBLIC_WHATSAPP_PHONE ?? "",
  formWebhookUrl: import.meta.env.PUBLIC_FORM_WEBHOOK_URL ?? "",
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? "https://aceleraconexoes.com.br",
  ogImage: "/images/interlagos-aerial-1280.jpg",
  ga4Id: import.meta.env.PUBLIC_GA4_ID ?? "",
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID ?? "",
  /** Logo horizontal sem fundo (PDF impressão · variante lima). */
  logo: "/brand/logo-horizontal-lime.png",
  logoOrange: "/brand/logo-horizontal-orange.png",
  paletteReference: "/brand/paleta-cores.png",
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
