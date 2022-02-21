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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DATA_AVAILABILITY = void 0;
var ON_CHAIN = {
    name: 'All data required for proofs is published on chain',
    description: 'All the data that is used to construct the system state is published on chain in the form of cheap calldata. This ensures that it will always be available when needed.',
    risks: [],
    references: []
};
var ON_CHAIN_CANONICAL = {
    name: 'All transaction data is recorded on chain',
    description: 'All executed transactions are submitted to an on chain smart contract. The execution of the rollup is based entirely on the submitted transactions, so anyone monitoring the contract can know the correct state of the rollup chain.',
    risks: [],
    references: []
};
var STARKEX_ON_CHAIN = {
    name: 'All data required for proofs is published on chain',
    description: "All the relevant data that is used to recover the L2 balances Merkle Tree is published on-chain as calldata. This includes, in addition to the proven new state, the complete list of differences of the users' balances from the previous state.",
    risks: [],
    references: [
        {
            text: 'ZK-Rollup - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/data-availability-modes#zk-rollup'
        },
    ]
};
var STARKNET_ON_CHAIN = {
    name: 'All data required to reconstruct rollup state is published on chain',
    description: 'State diffs are publish on-chain as calldata on every state update. The state diffs contain information on every contact whose storage was updated, and additional information on contract deployments. From diffs full system state can be recovered.',
    risks: [],
    references: [
        {
            text: 'On-chain Data',
            href: 'https://starknet.io/on-chain-data/'
        },
    ]
};
var PICKLE_ON_CHAIN = {
    name: 'All data required to reconstruct rollup state is published on chain',
    description: 'State diffs are publish on-chain as calldata on every state update. The state diffs contain information on every contact whose storage was updated, and additional information on contract deployments. From diffs full system state can be recovered.',
    risks: [],
    references: [
        {
            text: 'On-chain Data',
            href: 'https://starknet.io/on-chain-data/'
        },
    ]
};
var GENERIC_OFF_CHAIN = {
    name: 'Data is not stored on chain',
    description: 'The transaction data is not recorded on the Ethereum main chain.',
    risks: [
        {
            category: 'Funds can be lost if',
            text: 'the external data becomes unavailable.'
        },
    ],
    references: []
};
var STARKEX_OFF_CHAIN = __assign(__assign({}, GENERIC_OFF_CHAIN), { description: 'The balances of the users are not published on-chain, but rather sent to several well known and trusted parties, also known as committee members. A state update is valid and accepted on-chain only if at least a quorum of the committee members sign a state update.', risks: __spreadArray(__spreadArray([], GENERIC_OFF_CHAIN.risks, true), [
        {
            category: 'Users can be censored if',
            text: 'the committee restricts their access to the external data.'
        },
    ], false), references: [
        {
            text: 'Validium - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/data-availability-modes#validium'
        },
        {
            text: 'Availability Verifiers - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/smart-contracts-1/contract-management#availability-verifiers'
        },
    ] });
var PICKLE_OFF_CHAIN = __assign(__assign({}, GENERIC_OFF_CHAIN), { description: 'The balances of the users are not published on-chain, but rather sent to several well known and trusted parties, also known as committee members. A state update is valid and accepted on-chain only if at least a quorum of the committee members sign a state update.', risks: __spreadArray(__spreadArray([], GENERIC_OFF_CHAIN.risks, true), [
        {
            category: 'Users can be censored if',
            text: 'the committee restricts their access to the external data.'
        },
    ], false), references: [
        {
            text: 'Validium - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/data-availability-modes#validium'
        },
        {
            text: 'Availability Verifiers - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/smart-contracts-1/contract-management#availability-verifiers'
        },
    ] });
var PLASMA_OFF_CHAIN = __assign(__assign({}, GENERIC_OFF_CHAIN), { description: 'The transaction data is stored on a plasma chain and is not recorded on the Ethereum main chain.' });
exports.DATA_AVAILABILITY = {
    ON_CHAIN: ON_CHAIN,
    ON_CHAIN_CANONICAL: ON_CHAIN_CANONICAL,
    STARKEX_ON_CHAIN: STARKEX_ON_CHAIN,
    STARKNET_ON_CHAIN: STARKNET_ON_CHAIN,
    PICKLE_ON_CHAIN: PICKLE_ON_CHAIN,
    GENERIC_OFF_CHAIN: GENERIC_OFF_CHAIN,
    STARKEX_OFF_CHAIN: STARKEX_OFF_CHAIN,
    PLASMA_OFF_CHAIN: PLASMA_OFF_CHAIN,
    PICKLE_OFF_CHAIN: PICKLE_OFF_CHAIN
};
