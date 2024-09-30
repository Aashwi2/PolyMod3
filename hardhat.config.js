require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.12", // Corrected solidity version
  networks: {
    hardhat: {}, // Explicitly define the hardhat network
    sepolia : {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    amoy : {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};