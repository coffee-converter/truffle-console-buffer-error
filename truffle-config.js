
const infuraProjectID = "YOUR_INFURA_PROJECT_ID"; // TODO: Put your Infura Project ID here


const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "brain vacuum true local damage switch loan rail jealous sunset cross clarify";

module.exports = {
  networks: {
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraProjectID}`)
      },
      network_id: 4
    },
  },
  compilers: {
    solc: {
      version: "0.6.4",
    }
  }
};
