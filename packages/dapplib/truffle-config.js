require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember essay inner clock flame shed'; 
let testAccounts = [
"0x97ed797029d3c9857241a3cfadd781ecc0ae6b491f9edfcff5fc9ce08c534e7c",
"0x63a847a42b5fa5087a0bfe4600275c070a9554bbc0f6fc42bc11e8a346cd9df1",
"0x3ee0f17b1586653a20af80b5b282a53b00f5bda84bbeaa915d5d841bbe8d7d1d",
"0xbdb8d0aa6e3a1026e9855d8ce85c8e440d01dcdbb6d797e288ec1547b7f78bfc",
"0xdce3ada7f52470f76d1b12ab79d055388de7654648ff520cb0f71ed6f7d7bad2",
"0x98d2332e78a338e6fb2dc95e1868a77b597d34f55ccbe2b8dd44d492b30612e3",
"0xf657a252d308477e2e107273e6289769cbdfe27adb7c65495efe4bc863fec414",
"0x742417b56d47de62c2de830a1c43c610f56322aeeaa72d7f8a2750703a1e1bc2",
"0xe6370b359ec7bdce9bdf1ac52c664209e600cd6f041f3edd7f733471983d200c",
"0xcafa509c28bec65d1669c112d8a91a2ff0405a6184ed76ca6ac0c778b54f98f2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

