
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/x9yKDMMr64MzZXOxKGaR3Zzfe4Ew5-f-',
      accounts: [ '2fdca2c65dff08543d62900d9f2c127120e754e31f7bce08044bedf3bfb6798e' ],
    },
  },
};

