var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fac3b6da'),
  addressVersion: 0x1e,
  P2SHVersionTwo: 0x63,
  privKeyVersion: 128,
  P2SHVersion: 5,
  bech32Prefix: 'dgb',
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('96841e6ecc8dc9643aaddfb6fcd616e08f0777c87b508f1c9fb35e461bea9774'),
    merkle_root: hex('72ddd9496b004221ed0557358846d9248ecd4c440ebd28ed901efc18757d0fad'),
    height: 0,
    nonce: 2447652,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1389388394,
    bits: 486604799,
  },
  dnsSeeds: [
    '74.208.230.160',
    '216.250.125.121',
    '195.130.216.149',
    '96.18.212.86',
    '188.226.239.21',
    '54.201.183.106',
    '213.81.142.62'
  ],
    defaultClientPort: 12024,
    peerVersion: 70003
};


exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fdc8bddd'),
  addressVersion: 0x7e,
  privKeyVersion: 254,
  bech32Prefix: 'dgbt',
  P2SHVersion: 140,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('522282aaac58be581dda845a286135757298cad90d679529be63571d71a08e30'),
    merkle_root: hex('ad0f7d7518fc1e90ed28bd0e444ccd8e24d94688355705ed2142006b49d9dd72'),
    height: 0,
    nonce: 2411473,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1516939474,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.digibyteprojects.com',
    'testnet-1.us.digibyteservers.io'
  ],
  defaultClientPort: 12025
};
