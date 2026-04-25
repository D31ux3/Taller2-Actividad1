import ActualBlock from "./ActualBlock";
import WalletBalance from "./WalletBalance";
import WalletIdentity from "./WalletIdentity";

export default function AccountPanel() {
  return (
    <div>
      <WalletIdentity />
      <WalletBalance />
      <ActualBlock />
    </div>
  );
}
