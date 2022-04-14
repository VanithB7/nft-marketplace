require("@nomiclabs/hardhat-waffle");

const fs =require('fs');
const metamaskPrivateKey=fs.readFileSync('.secret').toString();
const projectId='2db3642800c6438d8aca8c49c5e6e111';
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
   hardhat:{
     chainId:1337
   },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[metamaskPrivateKey]
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts:[metamaskPrivateKey]
    },
  },

};
