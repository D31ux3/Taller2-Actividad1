import { useBlockNumber } from "wagmi";

export default function ActualBlock() {
  const { data, isLoading } = useBlockNumber({ watch: true });

  return <p>{isLoading ? "Loading..." : data?.toString()}</p>;
}
