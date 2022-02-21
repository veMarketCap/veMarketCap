"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RISK_VIEW = exports.PROVER_DOWN = exports.VALIDATOR_WHITELISTED_BLOCKS = exports.VALIDATOR_NO_MECHANISM = exports.VALIDATOR_PROPOSE_BLOCKS_ZKP = exports.VALIDATOR_PROPOSE_BLOCKS = exports.VALIDATOR_ESCAPE_U = exports.VALIDATOR_ESCAPE_STARKEX_NFT = exports.VALIDATOR_ESCAPE_STARKEX_PERPETUAL = exports.VALIDATOR_ESCAPE_ZKP = exports.VALIDATOR_ESCAPE_MP = exports.SEQUENCER_NO_MECHANISM = exports.SEQUENCER_PROPOSE_BLOCKS_ZKP = exports.SEQUENCER_PROPOSE_BLOCKS = exports.SEQUENCER_EXIT_L1 = exports.SEQUENCER_FORCE_EXIT_L1 = exports.SEQUENCER_STARKEX_SPOT = exports.SEQUENCER_STARKEX_PERPETUAL = exports.SEQUENCER_TRANSACT_L1 = exports.UPGRADABLE_NO = exports.UPGRADE_DELAY = exports.UPGRADABLE_YES = exports.DATA_EXTERNAL = exports.DATA_EXTERNAL_DAC = exports.DATA_MIXED = exports.DATA_ON_CHAIN = exports.STATE_EXITS_ONLY = exports.STATE_ZKP_ST = exports.STATE_ZKP_SN = exports.STATE_FP_INT = exports.STATE_FP_1R = exports.STATE_FP = void 0;
// State validation
exports.STATE_FP = {
    value: 'Fraud proofs',
    description: 'Fraud proofs allow actors watching the chain to prove that the state is incorrect.'
};
exports.STATE_FP_1R = {
    value: 'Fraud proofs (1R)',
    description: 'Fraud proofs allow actors watching the chain to prove that the state is incorrect. Single round proofs (1R) only require a single transaction to resolve.'
};
exports.STATE_FP_INT = {
    value: 'Fraud proofs (INT)',
    description: 'Fraud proofs allow actors watching the chain to prove that the state is incorrect. Interactive proofs (INT) require multiple transactions over time to resolve.'
};
exports.STATE_ZKP_SN = {
    value: 'ZK proofs (SN)',
    description: 'ZK-SNARKS are zero knowledge proofs that ensure state correctness, but require trusted setup.'
};
exports.STATE_ZKP_ST = {
    value: 'ZK proofs (ST)',
    description: 'ZK-STARKS are zero knowledge proofs that ensure state correctness.'
};
exports.STATE_EXITS_ONLY = {
    value: 'Exits only',
    description: 'Exits from the network are subject to a period when they can be challenged. The internat network state is left unchecked.',
    sentiment: 'bad'
};
// Data availability
exports.DATA_ON_CHAIN = {
    value: 'On chain',
    description: 'All of the data needed for proof construction is published on chain.'
};
exports.DATA_MIXED = {
    value: 'Mixed',
    description: 'Some of the data needed for proof construction is not published on chain.',
    sentiment: 'warning'
};
exports.DATA_EXTERNAL_DAC = {
    value: 'External (DAC)',
    description: 'Proof construction relies fully on data that is NOT published on chain. There exists a data availability committee (DAC) that is tasked with protecting and supplying the data.',
    sentiment: 'warning'
};
exports.DATA_EXTERNAL = {
    value: 'External',
    description: 'Proof construction relies fully on data that is NOT published on chain.',
    sentiment: 'bad'
};
// Upgradable
exports.UPGRADABLE_YES = {
    value: 'Yes',
    description: 'The code that secures the system can be changed arbitrarily and without notice.',
    sentiment: 'bad'
};
function UPGRADE_DELAY(delay) {
    return {
        value: "".concat(delay, " delay"),
        description: 'The code that secures the system can be changed arbitrarily but users have some time to react.',
        sentiment: 'warning'
    };
}
exports.UPGRADE_DELAY = UPGRADE_DELAY;
exports.UPGRADABLE_NO = {
    value: 'No',
    description: 'The code that secures the system can never change.'
};
// Operator is censoring
exports.SEQUENCER_TRANSACT_L1 = {
    value: 'Transact using L1',
    description: 'The user is able to submit a transaction through L1 and force its inclusion on L2.'
};
exports.SEQUENCER_STARKEX_PERPETUAL = {
    value: 'Force trade/exit to L1',
    description: 'The user can force the sequencer to include a trade or withdrawal transaction by submitting a request through L1. The user is required to find a counterparty for the trade by out of system means. If the sequencer is down, the user can use the exit hatch to withdraw funds.',
    sentiment: 'warning'
};
exports.SEQUENCER_STARKEX_SPOT = {
    value: 'Force exit to L1',
    description: 'The user can force the the sequencer to include their withdrawal transaction by submitting a request through L1. If the sequencer is down, the user can use the exit hatch to withdraw funds.'
};
exports.SEQUENCER_FORCE_EXIT_L1 = {
    value: 'Force exit to L1',
    description: 'The user is only able to submit an L1 withdrawal request and force the sequencer to include it on L2. After that the user exits the system with their funds.'
};
exports.SEQUENCER_EXIT_L1 = {
    value: 'Exit to L1',
    description: 'The user is only able to submit an L1 withdrawal request. After that the user exits the system with their funds.'
};
exports.SEQUENCER_PROPOSE_BLOCKS = {
    value: 'Propose blocks',
    description: 'The user needs to run their own node and use it to propose new blocks that include otherwise censored transactions.'
};
exports.SEQUENCER_PROPOSE_BLOCKS_ZKP = {
    value: 'Propose blocks (ZK)',
    description: 'The user needs to run their own node and use it to propose new blocks that include otherwise censored transactions. Proposing new blocks requires creating ZK proofs which are very computationally expensive.',
    sentiment: 'warning'
};
exports.SEQUENCER_NO_MECHANISM = {
    value: 'No mechanism',
    description: 'There is no mechanism to have transactions be included if the sequencer is down or censoring.',
    sentiment: 'bad'
};
// Operator is down
exports.VALIDATOR_ESCAPE_MP = {
    value: 'Escape hatch (MP)',
    description: 'Users are able to trustlessly exit by submitting a merkle proof of funds.'
};
exports.VALIDATOR_ESCAPE_ZKP = {
    value: 'Escape hatch (ZK)',
    description: 'Users are able to trustlessly exit by submitting a zero knowledge proof of funds.',
    sentiment: 'warning'
};
exports.VALIDATOR_ESCAPE_STARKEX_PERPETUAL = __assign(__assign({}, exports.VALIDATOR_ESCAPE_MP), { description: 'Users are able to trustlessly exit their collateral by submitting a merkle proof of funds. Positions will be closed using average price from the last batch state update.' });
exports.VALIDATOR_ESCAPE_STARKEX_NFT = {
    value: 'Escape hatch (MP)',
    description: 'Users are able to trustlessly exit by submitting a merkle proof of their assets. NFTs will be minted on L1 on exit.'
};
exports.VALIDATOR_ESCAPE_U = {
    value: 'Escape hatch (?)',
    description: 'Users are able to exit the system. The details are unknown.',
    sentiment: 'warning'
};
exports.VALIDATOR_PROPOSE_BLOCKS = {
    value: 'Propose blocks',
    description: 'The user needs to run their own node and use it to propose new blocks to replace the validator.'
};
exports.VALIDATOR_PROPOSE_BLOCKS_ZKP = {
    value: 'Propose blocks (ZK)',
    description: 'The user needs to run their own node and use it to propose new blocks to replace the validator. Proposing new blocks requires creating ZK proofs which are very computationally expensive.',
    sentiment: 'warning'
};
exports.VALIDATOR_NO_MECHANISM = {
    value: 'No mechanism',
    description: 'There is no mechanism to handle the validator going down.',
    sentiment: 'bad'
};
exports.VALIDATOR_WHITELISTED_BLOCKS = {
    value: 'No mechanism',
    description: 'If the whitelisted validator goes down, no activity including withdrawals can happen. Funds will be frozen.',
    sentiment: 'bad'
};
exports.PROVER_DOWN = {
    value: 'No mechanism',
    description: 'There is no generic escape hatch as StarkNet cannot be frozen. Application-specific escape hatches can be built.',
    sentiment: 'warning'
};
exports.RISK_VIEW = {
    STATE_FP: exports.STATE_FP,
    STATE_FP_1R: exports.STATE_FP_1R,
    STATE_FP_INT: exports.STATE_FP_INT,
    STATE_ZKP_SN: exports.STATE_ZKP_SN,
    STATE_ZKP_ST: exports.STATE_ZKP_ST,
    STATE_EXITS_ONLY: exports.STATE_EXITS_ONLY,
    DATA_ON_CHAIN: exports.DATA_ON_CHAIN,
    DATA_MIXED: exports.DATA_MIXED,
    DATA_EXTERNAL_DAC: exports.DATA_EXTERNAL_DAC,
    DATA_EXTERNAL: exports.DATA_EXTERNAL,
    UPGRADABLE_YES: exports.UPGRADABLE_YES,
    UPGRADE_DELAY: UPGRADE_DELAY,
    UPGRADABLE_NO: exports.UPGRADABLE_NO,
    SEQUENCER_TRANSACT_L1: exports.SEQUENCER_TRANSACT_L1,
    SEQUENCER_STARKEX_PERPETUAL: exports.SEQUENCER_STARKEX_PERPETUAL,
    SEQUENCER_STARKEX_SPOT: exports.SEQUENCER_STARKEX_SPOT,
    SEQUENCER_FORCE_EXIT_L1: exports.SEQUENCER_FORCE_EXIT_L1,
    SEQUENCER_EXIT_L1: exports.SEQUENCER_EXIT_L1,
    SEQUENCER_PROPOSE_BLOCKS: exports.SEQUENCER_PROPOSE_BLOCKS,
    SEQUENCER_PROPOSE_BLOCKS_ZKP: exports.SEQUENCER_PROPOSE_BLOCKS_ZKP,
    SEQUENCER_NO_MECHANISM: exports.SEQUENCER_NO_MECHANISM,
    VALIDATOR_ESCAPE_MP: exports.VALIDATOR_ESCAPE_MP,
    VALIDATOR_ESCAPE_ZKP: exports.VALIDATOR_ESCAPE_ZKP,
    VALIDATOR_ESCAPE_STARKEX_PERPETUAL: exports.VALIDATOR_ESCAPE_STARKEX_PERPETUAL,
    VALIDATOR_ESCAPE_STARKEX_NFT: exports.VALIDATOR_ESCAPE_STARKEX_NFT,
    VALIDATOR_ESCAPE_U: exports.VALIDATOR_ESCAPE_U,
    VALIDATOR_PROPOSE_BLOCKS: exports.VALIDATOR_PROPOSE_BLOCKS,
    VALIDATOR_PROPOSE_BLOCKS_ZKP: exports.VALIDATOR_PROPOSE_BLOCKS_ZKP,
    VALIDATOR_NO_MECHANISM: exports.VALIDATOR_NO_MECHANISM,
    VALIDATOR_WHITELISTED_BLOCKS: exports.VALIDATOR_WHITELISTED_BLOCKS,
    PROVER_DOWN: exports.PROVER_DOWN
};
