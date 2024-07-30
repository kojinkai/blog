import localFont from "next/font/local";
// define a custom local font where the jetBrainsMonoNL fonts are stored
const jetBrainsMonoNLMedium = localFont({ src: "./JetBrainsMonoNLMedium.ttf" });
const jetBrainsMonoNLBold = localFont({ src: "./JetBrainsMonoNLBold.ttf" });

export { jetBrainsMonoNLBold, jetBrainsMonoNLMedium };
