import { ethers } from "ethers";
import { REGISTRY_ADDRESS } from "./config";

export default function getNetwork(network: string): any {
  // currently subgraphs used under this function are outdated,
  // we will have namewrapper support and more attributes when latest subgraph goes to production
  const RPC_URL = `https://eth.mainnet.ocean.jellyfishsdk.com/`;
  const NETWORKISH = {
    name: "DMC Metachain",
    chainId: 1130,
    ensAddress: REGISTRY_ADDRESS,
  };

  const provider = new ethers.providers.StaticJsonRpcProvider(
    RPC_URL,
    NETWORKISH
  );
  return { RPC_URL, provider };
}
