const HDWalletProvider = require('@truffle/hdwallet-provider');

const getEnv = env => {
  const value = process.env[env];

  if (typeof value === 'undefined') {
    throw new Error('ENV NOT SET');
  }

  return value;
}

const mainPrivate = getEnv('MAIN_WALLET_PRIVATE');
const testPrivate = getEnv('TEST_WALLET_PRIVATE');

const mainURL = getEnv('MAIN_URL');
const rinURL = getEnv('RIN_URL');
const kURL = getEnv('KOVAN_URL');

const mainID = getEnv('MAIN_NETWORK_ID');
const rinID = getEnv('RIN_NETWORK_ID');
const kID = getEnv('KOVAN_ID');

module.exports = {
  networks: {
    dev: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      skipDryRun: true
    },
    main: {
      provider: () => new HDWalletProvider(mainPrivate, mainURL),
      network_id: mainID,
      gas: 2900000,
      gasPrice: 35000000000,
      skipDryRun: false
    },
    rinkeby: {
      provider: () => new HDWalletProvider(testPrivate, rinURL),
      network_id: rinID,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      skipDryRun: false     // Skip dry run before migrations? (default: false for public nets )
    },
    kovan: {
      provider: () => new HDWalletProvider(testPrivate, kURL),
      network_id: kID,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    evmos_dev: {
      provider: () => new HDWalletProvider(testPrivate, 'https://eth.bd.evmos.dev:8545'),
      network_id: 9000,
      gas: 5500000,
      skipDryRun: true
    },
    gnosis: {
      provider: () => new HDWalletProvider(testPrivate, proccess.env.GNOSIS_URL),
      network_id: proccess.env.GNOSIS_ID,
      gas: 5500000,
      skipDryRun: true
    },
    polygon: {
      provider: () => new HDWalletProvider(testPrivate, proccess.env.POLYGON_URL),
      network_id: proccess.env.POLYGON_ID,
      gas: 5500000,
      skipDryRun: true
    },
    scroll: {
      provider: () => new HDWalletProvider(testPrivate, proccess.env.SCROLL_URL),
      network_id: proccess.env.SCROLL_ID,
      gas: 5500000,
      skipDryRun: true
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.14",
    }
  },
};
