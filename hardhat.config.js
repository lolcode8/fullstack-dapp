require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  // The networks that you deploy to
  // The hardhat network is the local network that we develop on
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      // Copied from the Infura UI
      url: "https://ropsten.infura.io/v3/1ebe1e722391443980ecda8aeb7dd8a5",
      // Private key of the Ropsten test account on Metamask
      accounts: [
        `0x${"b45321b017bb5e673a6f4253c027609c98ac19edd050db9965321ccb50758217"}`,
      ],
    },
  },
};
