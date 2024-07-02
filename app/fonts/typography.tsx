import localFont from "@next/font/local";

export const adihasuDin = localFont({
  src: [
    { path: "./AdihausDIN-Regular.ttf", weight: "400" },
    { path: "./AdihausDIN-Italic.ttf", weight: "400", style: "italic" },
    { path: "./AdihausDIN-Medium.ttf", weight: "700" },
    {
      path: "./AdihausDIN-MediumItalic.ttf",
      weight: "700",
      style: "italic",
    },
    { path: "./AdihausDIN-Bold.ttf", weight: "900" },
    {
      path: "./AdihausDIN-BoldItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-adi-din",
});
export const adihasuDinCond = localFont({
  src: [
    { path: "./AdihausDIN-Cn.ttf", weight: "400" },
    { path: "./AdihausDIN-CnItalic.ttf", weight: "400", style: "italic" },
    { path: "./AdihausDIN-CnMedium.ttf", weight: "700" },
    {
      path: "./AdihausDIN-CnMediumItalic.ttf",
      weight: "700",
      style: "italic",
    },
    { path: "./AdihausDIN-CnBold.ttf", weight: "900" },
    {
      path: "./AdihausDIN-CnBoldItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-adi-din-condensed",
});
export const adineueText = localFont({
  src: [
    { path: "./adineueTEXT-Light.ttf", weight: "200" },
    {
      path: "./adineueTEXT-LightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    { path: "./adineueTEXT-Regular.ttf", weight: "400" },
    {
      path: "./adineueTEXT-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    { path: "./adineueTEXT-Bold.ttf", weight: "700" },
    {
      path: "./adineueTEXT-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    { path: "./adineueTEXT-Black.ttf", weight: "900" },
    {
      path: "./adineueTEXT-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-adi-text",
});
