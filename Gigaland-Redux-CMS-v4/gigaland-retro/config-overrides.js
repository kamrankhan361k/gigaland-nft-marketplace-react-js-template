const webpack = require('webpack'); 
module.exports = function override(config) { 
    const fallback = config.resolve.fallback || {}; 
    Object.assign(fallback, { 
        "crypto": require.resolve("crypto-browserify"), 
        "stream": require.resolve("stream-browserify"), 
        "assert": require.resolve("assert"), 
        "http": require.resolve("stream-http"), 
        "https": require.resolve("https-browserify"), 
        "os": require.resolve("os-browserify"), 
        "url": require.resolve("url"),
        "path": require.resolve("path-browserify"), 
        "fs": false,
    }) 

    config.resolve.fallback = fallback; 
    config.ignoreWarnings = [
        {
            module: /node_modules\/wyvern-schemas/
        },
        {
            module: /node_modules\/wyvern-js/
        },
        {
            module: /node_modules\/web3/
        },
        {
            module: /node_modules\/opensea-js/
        },
        {
            module: /node_modules\/ethereumjs-vm/
        },
        {
            module: /node_modules\/ethereumjs-tx/
        },
        {
            module: /node_modules\/ethereumjs-blockchain/
        },
        {
            module: /node_modules\/ethereumjs-account/
        },
        {
            module: /node_modules\/ethereumjs-common/
        },
        {
            module: /node_modules\/ethereum-types/
        },
        {
            module: /node_modules\/@0x\/utils/
        },
        {
            module: /node_modules\/@0x\/json-schemas/
        },
        {
            module: /node_modules\/@0x\/base-contract/
        },
        {
            module: /node_modules\/@0x\/assert/
        },
        {
            module: /node_modules\/@opensea/
        },
    ];
    config.plugins = (config.plugins || []).concat([ 
        new webpack.ProvidePlugin({ 
            process: 'process/browser', 
            Buffer: ['buffer', 'Buffer']
        }) 
    ])

    return config; 
}
