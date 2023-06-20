/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Ethereum } from "@thirdweb-dev/chains";
export const NETWORK = Ethereum;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x785F1098Eae4a2b33D663E4A455EdA885700ce1d";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://etherscan.io/address/0x785F1098Eae4a2b33D663E4A455EdA885700ce1d";
