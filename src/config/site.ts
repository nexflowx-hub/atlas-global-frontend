export const siteConfig = {
  name: "Atlas Global",
  signature: "Research • Architecture • Platforms",
  url: "https://atlasglobal.digital",
  email:
    process.env.NEXT_PUBLIC_ATLAS_CONTACT_EMAIL ?? "hello@atlasglobal.digital",
  bookingUrl: process.env.NEXT_PUBLIC_ATLAS_BOOKING_URL ?? "",
  whatsappUrl: process.env.NEXT_PUBLIC_ATLAS_WHATSAPP_URL ?? "",
  githubUrl: "https://github.com/nexflowx-hub/atlas-global-frontend",
  linkedinUrl: process.env.NEXT_PUBLIC_ATLAS_LINKEDIN_URL ?? "",
  xUrl: process.env.NEXT_PUBLIC_ATLAS_X_URL ?? "",
  youtubeUrl: process.env.NEXT_PUBLIC_ATLAS_YOUTUBE_URL ?? "",
} as const;

export type SiteConfig = typeof siteConfig;
