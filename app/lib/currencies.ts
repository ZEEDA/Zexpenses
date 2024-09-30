export const Currencies = [
  { value: "BHD", label: "BD Bahraini Dinar", local: "ar-BH" },
  { value: "EGP", label: "E£ Egyptian Pound", local: "ar-EG" },
  { value: "USD", label: "$ Dollar", local: "en-US" },
  { value: "EUR", label: "€ Euro", local: "de-DE" },
  { value: "JPY", label: "¥ Yen", local: "ja-JP" },
  { value: "GBP", label: "£ Pound", local: "en-GB" },
];

export type Currency = (typeof Currencies)[0];