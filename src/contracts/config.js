import dotenv from "dotenv";

dotenv.config();

const config = {
  SafeMutual: {
    2000: "0xF8F7695D105AfD24B7a1Cd46Cf3adAc8Ae6eC93c", // Mainnet
    568: "0xAB0e7A2c5340f4EB85BaEe8FeE81Fb3a22efBbeF", // Testnet //Not verified
  },
  RpcURL: {
    2000: "https://rpc-us.dogechain.dog",
    568: "https://rpc-testnet.dogechain.dog",
  },
  chainHexID: {
    2000: "0x7d0",
    568: "0x238",
  },
  INFURA_ID: "9f08884ad87343d89b817b96e19e5808",
  chainID: 2000,
};

export default config;
