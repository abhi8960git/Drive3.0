require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "KyGu_C8hJa30QOG1nL_ajfQkLuLrhCjx";

const GOERLI_PRIVATE_KEY = "f3123f7b45920a686363fe33f92c6619952c30cd988c51f633386c327b89ba2c";

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
