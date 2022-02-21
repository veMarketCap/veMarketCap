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
exports.FORCE_TRANSACTIONS = void 0;
var EXIT_CENSORSHIP = {
    category: 'Users can be censored if',
    text: 'the operator refuses to include their transactions. They can still exit the system.'
};
var WITHDRAW = {
    name: 'Users can independently exit the system',
    description: 'Independent exit allows the users to escape censorship by withdrawing their funds. The system allows users to  withdraw their funds by submitting a transaction directly to the contract on-chain.',
    risks: [EXIT_CENSORSHIP],
    references: []
};
var WITHDRAW_OR_HALT = {
    name: 'Users can force exit the system',
    description: 'Force exit allows the users to escape censorship by withdrawing their funds. The system allows users to force the withdrawal of funds by submitting a request directly to the contract on-chain.  The request must be served within a defined time period. If this does not happen, the system will halt regular operation and permit trustless withdrawal of funds.',
    risks: [EXIT_CENSORSHIP],
    references: []
};
var STARKEX_SPOT_WITHDRAW = __assign(__assign({}, WITHDRAW_OR_HALT), { references: [
        {
            text: 'Censorship Prevention - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/architecture/overview#8-censorship-prevention'
        },
    ] });
var STARKEX_PERPETUAL_WITHDRAW = __assign(__assign({}, WITHDRAW_OR_HALT), { description: WITHDRAW_OR_HALT.description +
        ' Perpetual positions can also be force closed before withdrawing, however this requires the user to find the counterparty for the trade themselves.', references: [
        {
            text: 'Censorship Prevention - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/architecture/overview#8-censorship-prevention'
        },
        {
            text: 'Forced Trade - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/regular-flows/flows-for-off-chain-accounts/forced-operations/perpetual-trading-forced-withdrawal-and-forced-trade#forced-trade'
        },
    ], risks: [
        EXIT_CENSORSHIP,
        {
            category: 'Funds can be lost if',
            text: 'the user is unable to find the counterparty for the force trade.'
        },
    ] });
var CANONICAL_ORDERING = {
    name: 'Users can force any transaction',
    description: 'Because the state of the system is based on transactions submitted on-chain and anyone can submit their transactions there it allows the users to circumvent censorship by interacting with the smart contract directly.',
    risks: [],
    references: []
};
var PROPOSE_OWN_BLOCKS = {
    name: 'Users can force any transaction',
    description: 'Because the block production is open to anyone if users experience censorship from the operator they can propose their own blocks which would include their transactions.',
    risks: [
        {
            category: 'Users can be censored if',
            text: 'the operator refuses to include their transactions and users lack resources to propose blocks themselves.'
        },
    ],
    references: []
};
var NO_MECHANISM = {
    name: "Users can't force any transaction",
    description: 'There is no general mechanism to force the sequencer to include the transaction.',
    risks: [
        {
            category: 'Users can be censored if',
            text: 'the operator refuses to include their transactions.'
        },
    ],
    references: []
};
exports.FORCE_TRANSACTIONS = {
    WITHDRAW: WITHDRAW,
    WITHDRAW_OR_HALT: WITHDRAW_OR_HALT,
    STARKEX_SPOT_WITHDRAW: STARKEX_SPOT_WITHDRAW,
    STARKEX_PERPETUAL_WITHDRAW: STARKEX_PERPETUAL_WITHDRAW,
    CANONICAL_ORDERING: CANONICAL_ORDERING,
    PROPOSE_OWN_BLOCKS: PROPOSE_OWN_BLOCKS,
    NO_MECHANISM: NO_MECHANISM
};
