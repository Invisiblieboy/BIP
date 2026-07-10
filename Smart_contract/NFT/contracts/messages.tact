message(0x5fcc3d14) NftTransfer {
    query_id: Int as uint64;
    new_owner: Address;
    response_destination: Address;
    custom_payload: Cell?;
    forward_amount: Int as coins;
    forward_payload: Slice as remaining;
}

message(0x05138d91) NftOwnershipAssigned {
    query_id: Int as uint64;
    prev_owner: Address;
    forward_payload: Slice as remaining;
}

message(0x6f89f5e3) NftExcesses {
    query_id: Int as uint64;
}

message(0x2fcb26a2) NftGetStaticData {
    query_id: Int as uint64;
}

message(0x8b771735) NftReportStaticData {
    query_id: Int as uint64;
    index: Int as uint256;
    owner: Address;
    collection: Address;
    BIP_value: Int as coins;
}

message(0x1f04537a) NftDestroy {
    query_id: Int as uint64;
}

message NftDeploy {
    index: Int as uint256;
    owner: Address;
    content: Cell;
    BIP_value: Int as coins;
}

message RequestNftDeploy {
    amount: Int as coins;
    owner: Address;
    content: Cell;
    BIP_value: Int as coins;
}

message(0x7362d09c) TokenNotification {
    query_id: Int as uint64;
    amount: Int as coins;
    from: Address;
    forward_payload: Slice as remaining;
}