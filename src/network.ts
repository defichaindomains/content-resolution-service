import { ethers } from 'ethers';

const NETWORK = {
  MUMBAI: 'mumbai',
};

const NETWORK_ID: any = {
  80001: 'mumbai',
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
        ensAddress: "0x0277015E7cBa544a8acd4a3dB0331A74807e12ea"
      }
      break;
    
    default:
      throw new Error(`Unknown network '${network}'`);
  }


  const provider = new ethers.providers.StaticJsonRpcProvider(RPC_URL, NETWORKISH);
  return { RPC_URL, provider };
}