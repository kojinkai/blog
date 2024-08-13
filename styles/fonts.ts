import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// define your variable fonts
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400"],
  subsets: ["latin"],
});
const ibmPlexMono = IBM_Plex_Mono({ weight: ["700"], subsets: ["latin"] });

// define a custom local font where the jetBrainsMonoNL fonts are stored
// const jetBrainsMonoNLMedium = localFont({ src: "./JetBrainsMonoNLMedium.ttf" });
// const jetBrainsMonoNLBold = localFont({ src: "./JetBrainsMonoNLBold.ttf" });

export { ibmPlexMono, ibmPlexSans };
