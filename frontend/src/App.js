import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IotaClientProvider, WalletProvider } from '@iota/dapp-kit';
import { getFullnodeUrl } from '@iota/iota-sdk/client';
import OrderHashProofApp from './OrderHashProofApp';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IotaClientProvider 
        networks={{
          mainnet: { url: getFullnodeUrl('mainnet') },
          testnet: { url: getFullnodeUrl('testnet') },
        }}
        defaultNetwork="testnet"
      >
        <WalletProvider>
          <div className="container">
            <h1>Order Hash Proof dApp</h1>
            <OrderHashProofApp />
          </div>
        </WalletProvider>
      </IotaClientProvider>
    </QueryClientProvider>
  );
}

export default App;