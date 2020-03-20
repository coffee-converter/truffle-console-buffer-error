# truffle-console-buffer-error

This package illustrates an issue in the truffle console (or possibly the hdwallet-provider).

If there is a compiled contract (or library) named exactly `Buffer`, truffle console fails to
connect to testnets, at least through an Infura node.  The issue can be worked around by simply
renaming the contract (not the contract file) to something else.

Perhaps the name `Buffer` is colliding with or shadowing something
in Node's repl or elsewhere?  I have tested this on Node 13 on both Windows and Ubuntu, getting the same error
in both.  I have not yet tried older versions of Node.

I found this issue while developing a contract that imports the `provableAPI_0.6.sol` contract 
in the `solidity_0.6` branch of `https://github.com/provable-things/ethereum-api`.  This contract includes a library named `Buffer`.

## Installation

**1. Clone the repo and install dependencies:**

    git clone https://github.com/coffee-converter/truffle-console-buffer-error.git
    cd truffle-console-buffer-error
    npm ci
    
**2. Configure Infura Project ID:**

Open `truffle-config.js` and replace `YOUR_INFURA_PROJECT_ID` with your actual Infura Project ID:

    const infuraProjectID = "YOUR_INFURA_PROJECT_ID";
    
## Usage

Run the test script, which compiles the included contract and then attempts to open a rinkeby console:

    npm run test

## Error Output

    Error: CONNECTION ERROR: Couldn't connect to node https://rinkeby.infura.io/v3/**************************.
        at Object.InvalidConnection (\node_modules\web3-core-helpers\src\errors.js:35:16)
        at HttpProvider.send (\node_modules\web3-providers-http\src\index.js:109:25)
        at ProviderSubprovider.handleRequest (\node_modules\web3-provider-engine\subproviders\provider.js:16:17)
        at next (\node_modules\web3-provider-engine\index.js:119:18)
        at FilterSubprovider.handleRequest (\node_modules\web3-provider-engine\subproviders\filters.js:89:7)
        at next (\node_modules\web3-provider-engine\index.js:119:18)
        at NonceTrackerSubprovider.handleRequest (\node_modules\web3-provider-engine\subproviders\nonce-tracker.js:79:7)
        at next (\node_modules\web3-provider-engine\index.js:119:18)
        at HookedWalletSubprovider.handleRequest (\node_modules\web3-provider-engine\subproviders\hooked-wallet.js:234:7)
        at next (\node_modules\web3-provider-engine\index.js:119:18)
        at Web3ProviderEngine._handleAsync (\node_modules\web3-provider-engine\index.js:106:3)
        at EthQuery.sendAsync (\node_modules\eth-query\index.js:66:24)
        at EthQuery.getBlockByNumber (\node_modules\eth-query\index.js:80:10)
        at \node_modules\pify\index.js:29:7
        at new Promise (<anonymous>)
        at EthQuery.<anonymous> (\node_modules\pify\index.js:12:10)
        at EthQuery.ret (\node_modules\pify\index.js:56:34)
        at RpcBlockTracker._fetchBlockByNumber (\node_modules\eth-block-tracker\src\index.js:200:47)
        at RpcBlockTracker._performSync (\node_modules\eth-block-tracker\src\index.js:120:35)
        at Timeout._onTimeout (\node_modules\eth-block-tracker\src\index.js:110:27)
        at listOnTimeout (internal/timers.js:549:17)
        at processTimers (internal/timers.js:492:7)
