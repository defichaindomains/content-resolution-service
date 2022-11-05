import { ethers } from 'ethers';
import { INFURA_API_KEY } from './config';

const NETWORK = {
  MUMBAI: 'mumbai',
  DEFICHAIN: 'defichain',
};

const NETWORK_ID: any = {
  80001: "mumbai",
  988: 'defichain',
};

export default function getNetwork(network: string): any {
  // currently subgraphs used under this function are outdated,
  // we will have namewrapper support and more attributes when latest subgraph goes to production
  let SUBGRAPH_URL: string;
  let INFURA_URL: string;
  let NETWORKISH: any = undefined;
  switch (network) {
    case NETWORK.MUMBAI:
      SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/miu-digital/dfi-domains-sub-graph-mumbai';
      INFURA_URL = `https://rpc-mumbai.maticvigil.com`;
      NETWORKISH = {
        name: "mumbai",
        chainId: 80001,
        ensAddress: "0x0277015E7cBa544a8acd4a3dB0331A74807e12ea"
      }
      break;
    case NETWORK.DEFICHAIN:
      SUBGRAPH_URL = 'https://api.thegraph.com/subgraphs/name/miu-digital/dfi-domains-sub-graph-mumbai';
      INFURA_URL = `https://rpc-mumbai.maticvigil.com`;
      NETWORKISH = {
        name: "defichain",
        chainId: 988,
        ensAddress: "0x0277015E7cBa544a8acd4a3dB0331A74807e12ea"
      }
      break;
    
    default:
      throw new Error(`Unknown network '${network}'`);
  }


  const provider = new ethers.providers.StaticJsonRpcProvider(INFURA_URL, NETWORKISH);
  return { INFURA_URL, SUBGRAPH_URL, provider };
}
