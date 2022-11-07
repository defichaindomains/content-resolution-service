import { ethers } from 'ethers';



const NETWORK = {
  MUMBAI: 'mumbai',
  DEFICHAIN: 'defichain',
};


export default function getNetwork(network: string): any {

  let RPC_URL: string;
  switch (network) {
    case NETWORK.MUMBAI:
      RPC_URL = `https://rpc-mumbai.maticvigil.com`;
      break;
    default:
      throw new Error(`Unknown network '${network}'`);
  }


  const provider = new ethers.providers.JsonRpcProvider( RPC_URL);
  return {provider};
}
