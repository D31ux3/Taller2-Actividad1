import { useAccount, useBalance } from "wagmi";
import { sepolia } from "wagmi/chains";

export default function WalletBalance() {
  const { address, isConnected } = useAccount();

  const {
    data: balance,
    isLoading,
    isError,
    error,
  } = useBalance({
    address,
    chainId: sepolia.id,
    query: { refetchInterval: 5000 },
  });

  if (!isConnected) {
    return null;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    console.error(error);
    return <p>Error</p>
  }

  return (
      <p>
        {Number(balance?.formatted)?.toFixed(4)} {balance?.symbol}
      </p>
  );
}
