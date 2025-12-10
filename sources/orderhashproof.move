module orderhashproof::order_hash_proof {

    public struct OrderHashStore has key, store {
        id: UID,
        order_hashes: vector<vector<u8>>
    }

    public entry fun create_store(ctx: &mut TxContext) {
        let store = OrderHashStore {
            id: object::new(ctx),
            order_hashes: vector::empty(),
        };
        transfer::public_transfer(store, tx_context::sender(ctx));
    }

    public entry fun add_order_hash(store: &mut OrderHashStore, order_hash: vector<u8>) {
        vector::push_back(&mut store.order_hashes, order_hash);
    }

    public fun get_order_hashes(store: &OrderHashStore): vector<vector<u8>> {
        store.order_hashes
    }
}