import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID", //6bd58dee2c86d09859c5a4de56b2d0a2
  chains: [mainnet, sepolia],
  ssr: false,
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http("https://cloudflare-eth.com"), // https://cloudflare-eth.com
  },
});
