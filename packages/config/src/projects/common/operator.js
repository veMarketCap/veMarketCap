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
exports.OPERATOR = void 0;
var FRONTRUNNING_RISK = {
    category: 'MEV can be extracted if',
    text: 'the operator exploits their centralized position and frontruns user transactions.'
};
var CENTRALIZED_OPERATOR = {
    name: 'The system has a centralized operator',
    description: 'The operator is the only entity that can propose blocks. A live and trustworthy operator is vital to the health of the system.',
    risks: [FRONTRUNNING_RISK],
    references: []
};
var CENTRALIZED_SEQUENCER = {
    name: 'The system has a centralized sequencer',
    description: 'While proposing blocks is open to anyone the system employs a privileged sequencer that has priority for submitting transaction batches and ordering transactions.',
    risks: [FRONTRUNNING_RISK],
    references: []
};
var STARKEX_OPERATOR = __assign(__assign({}, CENTRALIZED_OPERATOR), { description: CENTRALIZED_OPERATOR.description +
        ' Typically, the Operator is the hot wallet of the StarkEx service submitting state updates for which proofs have been already submitted and verified.', references: [
        {
            text: 'Operator - StarkEx documentation',
            href: 'https://docs.starkware.co/starkex-v3/starkex-deep-dive/smart-contracts-1/contract-management#operator'
        },
    ] });
var DECENTRALIZED_OPERATOR = {
    name: 'There is no central operator',
    description: 'There is no privileged entity that sequences transactions or produces blocks. This activity is permissionless and open to anyone.',
    risks: [],
    references: []
};
exports.OPERATOR = {
    CENTRALIZED_OPERATOR: CENTRALIZED_OPERATOR,
    CENTRALIZED_SEQUENCER: CENTRALIZED_SEQUENCER,
    STARKEX_OPERATOR: STARKEX_OPERATOR,
    DECENTRALIZED_OPERATOR: DECENTRALIZED_OPERATOR
};
