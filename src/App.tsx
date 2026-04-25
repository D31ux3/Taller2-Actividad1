import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider, useAccount } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { config } from "./config/wagmi";

import AccountPanel from "./components/account/AccountPanel";
import TokenPanel from "./components/token/TokenPanel";

const queryClient = new QueryClient();

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" coolMode>
          <MainApp />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function MainApp() {
  const { isConnected } = useAccount();

  return (
    <div>
      <h2>Wallet UI</h2>
      <ConnectButton />

      {isConnected && (
        <>
          <AccountPanel />
          <TokenPanel />
        </>
      )}
    </div>
  );
}
