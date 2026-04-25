import { useAccount, useReadContract } from "wagmi";
import { erc20Abi } from "viem";
import { sepolia } from "viem/chains";
import { formatUnits } from "viem";

export default function TokenBalance({
  tokenAddress,
}: {
  tokenAddress: `0x${string}`;
}) {
  const { address, isConnected } = useAccount();

  const { data: name } = useReadContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "name",
    chainId: sepolia.id,
  });
  const { data: symbol } = useReadContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "symbol",
    chainId: sepolia.id,
  });
  const { data: balance } = useReadContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    chainId: sepolia.id,
  });

  const { data: decimals } = useReadContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "decimals",
  });

  if (!isConnected) return null;
  const formatted = balance && decimals ? formatUnits(balance, decimals) : "0";

  return (
    <div>
      <strong>{name}</strong>
      <p>
        {Number(formatted).toFixed(4)} {symbol}
      </p>
    </div>
  );
}
