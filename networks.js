var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fac3b6da'),
  addressVersion: 0x1e,
  privKeyVersion: 128,
  P2SHVersion: 5,
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
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
