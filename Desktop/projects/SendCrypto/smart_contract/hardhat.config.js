// https://eth-goerli.g.alchemy.com/v2/DQ8RpH3_ZVbsPSdmzqSJrJM3nhTZcqrC

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/DQ8RpH3_ZVbsPSdmzqSJrJM3nhTZcqrC',
      accounts: ['334b9bdcf48755a20df6f9647f61de6ef67c8f4569876d4798d7b5db72de3cb9']
    }
  }
}