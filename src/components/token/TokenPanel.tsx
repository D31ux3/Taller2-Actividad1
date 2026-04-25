import USDCBalance from "./TokenBalance";

export default function TokenPanel() {
  const USDC_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";
  const LINK_ADDRESS = "0x779877A7B0D9E8603169DdbD7836e478b4624789";

  return (
    <div>
      <h3>Token panel</h3>
      <USDCBalance tokenAddress={USDC_ADDRESS}/>
      <USDCBalance tokenAddress={LINK_ADDRESS}/>
    </div>
  );
}
