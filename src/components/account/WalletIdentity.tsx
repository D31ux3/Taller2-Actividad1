import { useAccount, useChainId, useEnsName } from "wagmi";
import { mainnet } from "viem/chains";

export default function WalletIdentity() {
  const { address } = useAccount();
  const chainId = useChainId();

  const { data } = useEnsName({
    address,
    chainId: mainnet.id,
    query: {
      enabled: chainId === mainnet.id,
    },
  });

  if (!address) return null;

  const shortened = `${address.slice(0, 4)}...${address.slice(-4)}`;

  const display = data || shortened;
  return <p>{display}</p>;
}
