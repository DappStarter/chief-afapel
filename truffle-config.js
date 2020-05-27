require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stock rebel magic arrow history light army giant'; 
let testAccounts = [
"0x205c39167523924c7ecaafbc125a3ec3c3fb62830015e638068a38a615580731",
"0x291bbc6412fee05260ab01326f205d98f5cc763cc53fa54a75f4e5d0dc92ae22",
"0xb1b56fd292bd2dc7ceb5dd36e82b6e1ba8a1679176ce1e0edbefac69c689f4d4",
"0x189a8c817d4601c018e4c43457ee3df867aa4ddf5d58b22ef5265846724b7612",
"0xc9a95bc68e794deee9547abbc909ee157f18d5604b9d590f038c86157cdd7614",
"0xb4c400077cc263fb1da059fb3129c7c967153cbea77a9a8c489a4d9dbcb4ee52",
"0xa6bfe16a89b7e9097402aae78b8385dc2471eab3fa67a494d75deda515adbe27",
"0x63718314b428867faf7ac4ef5c14b51caad7e3e9ddf61259a215c3e9da8df220",
"0x60c9d034f270f3b16e28cf7aac97085fca7b7e04a03165e003c93b1f22c94826",
"0xcae96a288fad6451ce4d175adf135c57577e1ab90088f7abaefee1b6099eb4c0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
