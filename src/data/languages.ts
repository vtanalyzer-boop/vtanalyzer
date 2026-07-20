export interface Lang {
  code: string;
  label: string;
  native: string;
}

// Codes map to Google Translate's language pairs (en|<code>).
export const languages: Lang[] = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "fr", label: "French", native: "Français" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "ja", label: "Japanese", native: "日本語" },
];
