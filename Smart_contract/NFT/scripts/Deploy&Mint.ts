import {run as deployNFTCollection} from "./deployNFTCollection"
import {run as mintNFT} from "./mintNFT"

import {NetworkProvider} from "@ton/blueprint";
import {owner} from "../data";


export async function run(provider: NetworkProvider) {
    await deployNFTCollection(provider,owner);
    await mintNFT(provider)
}


