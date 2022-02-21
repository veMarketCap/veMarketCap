"use strict";
exports.__esModule = true;
exports.CONTRACTS = exports.SHARP_VERIFIER_CONTRACT = void 0;
var UNVERIFIED_DESCRIPTION = 'The source code of this contract is not verified on Etherscan.';
var UNVERIFIED_RISK = {
    category: 'Funds can be stolen if',
    text: 'the source code of unverified contracts contains malicious code.',
    isCritical: true
};
var UPGRADE_NO_DELAY_RISK = {
    category: 'Funds can be stolen if',
    text: 'a contract receives a malicious code upgrade. There is no delay on code upgrades.',
    isCritical: true
};
function UPGRADE_WITH_DELAY_RISK(delay) {
    return {
        category: 'Funds can be stolen if',
        text: "a contract receives a malicious code upgrade. There is a ".concat(delay, " delay on code upgrades.")
    };
}
exports.SHARP_VERIFIER_CONTRACT = {
    name: 'GpsStatementVerifier',
    description: 'Starkware SHARP verifier used collectively by StarkNet, Sorare, Immutable X and DeversiFi. It receives STARK proofs from the Prover attesting to the integrity of the Execution Trace of these four Programs including correctly computed L2 state root which is part of the Program Output.',
    address: '0x47312450B3Ac8b5b8e247a6bB6d523e7605bDb60',
    upgradeability: {
        type: 'StarkWare',
        implementation: '0xD4C4044ACa68ebBcB81B13cC2699e1Bca2d3F458',
        callImplementation: '0xa739B175325cCA7b71fcB51C3032935Ef7Ac338F',
        upgradeDelay: 0,
        isFinal: false
    }
};
exports.CONTRACTS = {
    UNVERIFIED_DESCRIPTION: UNVERIFIED_DESCRIPTION,
    UNVERIFIED_RISK: UNVERIFIED_RISK,
    UPGRADE_NO_DELAY_RISK: UPGRADE_NO_DELAY_RISK,
    UPGRADE_WITH_DELAY_RISK: UPGRADE_WITH_DELAY_RISK
};
