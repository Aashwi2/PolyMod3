const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/aashwi.sol/aashwi.json");

const tokenAddress = "0x1C8Dc0f815034763aB7368eCbdDddF0840f880Af"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xa9E7ce49adaaf7F86774295e6E2d40d45292164F"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });