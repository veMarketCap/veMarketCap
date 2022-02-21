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
exports.EXITS = exports.RISK_CENTRALIZED_VALIDATOR = void 0;
function REGULAR(type, proof) {
    var finalized = type === 'zk' ? 'proven' : 'finalized';
    var requires = proof === 'no proof' ? 'does not require' : 'requires';
    var time = type === 'optimistic'
        ? ' The process of block finalization usually takes several days to complete.'
        : '';
    return {
        name: 'Regular exit',
        description: "The user initiates the withdrawal by submitting a transaction on L2. When the block containing that transaction is ".concat(finalized, " the funds become available for withdrawal on L1.").concat(time, " Finally the user submits an L1 transaction to claim the funds. This transaction ").concat(requires, " a merkle proof."),
        risks: [],
        references: []
    };
}
var FORCED = {
    name: 'Forced exit',
    description: 'If the user experiences censorship from the operator with regular exit they can submit their withdrawal requests directly on L1. The system is then obliged to service this request. Once the force operation is submitted if the request is serviced the operation follows the flow of a regular exit.',
    risks: [],
    references: []
};
function EMERGENCY(state, proof) {
    var risks = proof === 'zero knowledge proof'
        ? [
            {
                category: 'Funds can be lost if',
                text: 'the user is unable to generate the non-trivial zk proof for exodus withdraw.'
            },
        ]
        : [];
    return {
        name: 'Emergency exit',
        description: "If enough time passes and the forced exit is still ignored the user can put the system into ".concat(state, ", disallowing further state updates. In that case everybody can withdraw by submitting a ").concat(proof, " of their funds with their L1 transaction."),
        risks: risks,
        references: []
    };
}
var STARKEX_REGULAR = __assign(__assign({}, REGULAR('zk', 'no proof')), { references: [
        {
            text: 'Withdrawal - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/regular-flows/flows-for-off-chain-accounts/withdrawal'
        },
    ] });
var STARKEX_REGULAR_NFT = __assign(__assign({}, REGULAR('zk', 'no proof')), { description: REGULAR('zk', 'no proof').description +
        ' When withdrawing NFTs they are minted on L1.', references: [
        {
            text: 'Withdrawal - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/regular-flows/flows-for-off-chain-accounts/withdrawal'
        },
    ] });
var STARKEX_FORCED = __assign(__assign({}, FORCED), { references: [
        {
            text: 'Forced Operations - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/regular-flows/flows-for-off-chain-accounts/forced-operations'
        },
        {
            text: 'Forced Withdrawal - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/smart-contracts-1/in-spot-trading/in-perpetual-trading'
        },
        {
            text: 'Full Withdrawal - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/smart-contracts-1/in-spot-trading/in-spot-trading'
        },
    ] });
var STARKEX_EMERGENCY = __assign(__assign({}, EMERGENCY('a frozen state', 'merkle proof')), { references: [
        {
            text: 'Forced Operations - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/regular-flows/flows-for-off-chain-accounts/forced-operations'
        },
        {
            text: 'Forced Withdrawal - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/smart-contracts-1/in-spot-trading/in-perpetual-trading'
        },
        {
            text: 'Full Withdrawal - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/smart-contracts-1/in-spot-trading/in-spot-trading'
        },
    ] });
var OPERATOR_CENSORS_WITHDRAWAL = {
    category: 'Funds can be frozen if',
    text: 'the operator censors withdrawal transaction.'
};
var STARKNET_REGULAR = __assign(__assign({}, REGULAR('zk', 'no proof')), { description: REGULAR('zk', 'no proof').description +
        ' Note that the withdrawal request can be censored by the Sequencer.', references: [
        {
            text: ' Withdrawing is based on l2 to l1 messages - StarkNet documentation',
            href: 'https://www.cairo-lang.org/docs/hello_starknet/l1l2.html'
        },
    ], risks: [OPERATOR_CENSORS_WITHDRAWAL] });
var STARKNET_EMERGENCY = {
    name: 'Emergency exit',
    risks: [],
    description: 'There is no generic escape hatch mechanism as StarkNet cannot be frozen. Application developers can develp app-specific escape hatches that\
    could allow users to exit funds when L2 app is frozen. Note that freezing mechanizm on L2, to be secure, requires anti-censorship protection.',
    references: [
        {
            text: ' StarkNet code',
            href: 'https://etherscan.io/address/0xd8cd77206fcb239bddaaddda8c87cbfe7d67ca2b#code'
        },
    ]
};
var PLASMA = {
    name: 'Regular exit',
    description: 'The user executes the withdrawal by submitting a transaction on L1 that requires a merkle proof of funds.',
    risks: [],
    references: []
};
exports.RISK_CENTRALIZED_VALIDATOR = {
    category: 'Funds can be frozen if',
    text: 'the centralized validator goes down. Users cannot produce blocks themselves and exiting the system requires new block production.',
    isCritical: true
};
exports.EXITS = {
    REGULAR: REGULAR,
    FORCED: FORCED,
    EMERGENCY: EMERGENCY,
    STARKEX: [STARKEX_REGULAR, STARKEX_FORCED, STARKEX_EMERGENCY],
    STARKEX_NFT: [STARKEX_REGULAR_NFT, STARKEX_FORCED, STARKEX_EMERGENCY],
    STARKNET: [STARKNET_REGULAR, STARKNET_EMERGENCY],
    PLASMA: PLASMA,
    RISK_CENTRALIZED_VALIDATOR: exports.RISK_CENTRALIZED_VALIDATOR
};
