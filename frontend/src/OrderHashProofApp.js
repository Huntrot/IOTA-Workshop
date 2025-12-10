import { useCurrentAccount, useConnectWallet, useDisconnectWallet } from '@iota/dapp-kit';

function OrderHashProofApp() {
  const currentAccount = useCurrentAccount();
  const { mutate: connect } = useConnectWallet();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <div>
      <div className="wallet-section">
        <h2>Wallet Connection</h2>
        {currentAccount ? (
          <div>
            <p><strong>Connected:</strong> {currentAccount.address}</p>
            <button onClick={() => disconnect()}>
              Disconnect Wallet
            </button>
          </div>
        ) : (
          <button onClick={() => connect({ walletName: 'IOTA Wallet' })}>
            Connect IOTA Wallet
          </button>
        )}
      </div>

      {currentAccount && (
        <div className="wallet-section">
          <h2>Order Hash Proof Contract</h2>
          <p>Contract interaction will be implemented here</p>
          {/* TODO: Add contract interaction components */}
        </div>
      )}
    </div>
  );
}

export default OrderHashProofApp;