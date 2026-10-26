const getEnvironmentValue = (key: string, fallback = ""): string => {
  const value = process.env[key];

  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }

  return fallback;
};

export const appConfig = {
  siteUrl: getEnvironmentValue("NEXT_PUBLIC_SITE_URL", "http://localhost:3000"),
  contactFormUrl: getEnvironmentValue("NEXT_PUBLIC_FORMSPREE_URL", ""),
  isProduction: process.env.NODE_ENV === "production",
} as const;
