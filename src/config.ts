const path = require("path");
require("dotenv").config();

const REGISTRY_ADDRESS = process.env.ADDRESS_ENS_REGISTRY;
const RESOLVER_ADDRESS = process.env.ADDRESS_PUBLIC_RESOLVER;
const DEPLOYMENT_CHAIN = "metachain";

export { REGISTRY_ADDRESS, RESOLVER_ADDRESS, DEPLOYMENT_CHAIN };
