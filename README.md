# Order Hash Proof - IOTA Move Smart Contract

Smart contract on IOTA blockchain to store and verify order hashes, ensuring data integrity.

## 📋 Project Structure

```
orderHashProof/
├── sources/
│   └── orderhashproof.move          # Main smart contract
├── tests/
│   └── orderhashproof_tests.move    # Test cases (not implemented)
├── frontend/
│   ├── src/
│   │   ├── App.js                   # React app with IOTA dApp Kit
│   │   ├── OrderHashProofApp.js     # Main component
│   │   ├── index.js                 # Entry point
│   │   └── index.css                # Styles
│   ├── public/
│   │   └── index.html               # HTML template
│   ├── package.json                 # Dependencies
│   └── server.js                    # Simple HTTP server
├── Move.toml                        # Move package config
└── README.md
```

## 🚀 Installation

### Requirements
- IOTA CLI
- Node.js

### 1. Build Move contract
```bash
iota move build
```

### 2. Run frontend
```bash
cd frontend
npm install
npm start
# Open http://localhost:3000
```

## 💡 Smart Contract Functions

### `create_store(ctx: &mut TxContext)`
Create new OrderHashStore to store order hashes.

### `add_order_hash(store: &mut OrderHashStore, order_hash: vector<u8>)`
Add order hash to store.

### `get_order_hashes(store: &OrderHashStore): vector<vector<u8>>`
Get all order hashes from store.

## 📝 Usage Example

### Sample Order Data
```json
{
  "orderId": "ORD-001",
  "customerId": "CUST-123",
  "items": [
    {
      "productId": "PROD-456",
      "quantity": 2,
      "price": 25.99
    }
  ],
  "totalAmount": 51.98,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Deploy and Usage
```bash
# Deploy contract
iota client publish --gas-budget 20000000

# Create store
iota client call --package <PACKAGE_ID> --module order_hash_proof --function create_store --gas-budget 10000000

# Add hash
iota client call --package <PACKAGE_ID> --module order_hash_proof --function add_order_hash --args <STORE_ID> "0x1234..." --gas-budget 10000000
```

## 🧪 Testing

**Note**: Test cases are currently not implemented (test file is commented out).

```bash
iota move test
```

## 🌐 Frontend

React app using IOTA dApp Kit to:
- Connect IOTA wallet
- Interact with smart contract
- Create and verify order hashes

## 🔒 Security

- Hashes cannot be modified once stored
- Transparent data on blockchain
- Proof-of-existence for orders

https://explorer.iota.org/object/0x80653d7645baead1838f89e2dfb3833848fd0fc8d9b38eda4fbe33fb2a709506?network=testnet
<img width="745" height="431" alt="image" src="https://github.com/user-attachments/assets/e44546e9-83a7-471b-bb73-1749060c593a" />
