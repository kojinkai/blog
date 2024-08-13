import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

// define your variable fonts
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400"],
  subsets: ["latin"],
});
const ibmPlexMono = IBM_Plex_Mono({ weight: ["700"], subsets: ["latin"] });

export { ibmPlexMono, ibmPlexSans };
