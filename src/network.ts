import { ethers } from 'ethers';
import { REGISTRY_ADDRESS } from './config';

const NETWORK = {
  MUMBAI: 'mumbai',
  DEFICHAIN: 'metachain',
};

export default function getNetwork(network: string): any {
  // currently subgraphs used under this function are outdated,
  // we will have namewrapper support and more attributes when latest subgraph goes to production
  let RPC_URL: string;
  let NETWORKISH: any = undefined;
  switch (network) {
    case NETWORK.MUMBAI:
      RPC_URL = `https://rpc-mumbai.maticvigil.com`;
      NETWORKISH = {
        name: "mumbai",
        chainId: 80001,
        ensAddress: REGISTRY_ADDRESS
      }
      break;
    case NETWORK.DEFICHAIN:
      RPC_URL = `https://eth.testnet.ocean.jellyfishsdk.com/`; 
      NETWORKISH = {
        name: "metachain",
        chainId: 1130,
        ensAddress: REGISTRY_ADDRESS
      }
      break;
    
    default:
      throw new Error(`Unknown network '${network}'`);
  }


  const provider = new ethers.providers.StaticJsonRpcProvider(RPC_URL, NETWORKISH);
  return { RPC_URL, provider };
}
