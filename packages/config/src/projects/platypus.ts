import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import {Project} from './types'

export const platypus: Project = {
    name: 'Platypus Finance',
    slug: 'platypus-finance',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Platypus Finance protocol is a single-side AMM designed for swapping stable assets on Avalanche. Platypus features single-token provision, eliminating impermanent loss risk for liquidity providers, and minimizing slippage for traders.',
        benefits: 'Having vePTP offers a few opportunities for its holders compared to just having PTP. The native fungible token of Platypus, PTP, is a representation of governance and utility functions within the Platypus platform. It offers some benefits, such as boosted rewards, but more is yet to be announced.',
        voting: 'There currently is no governance mechanism active for Platypus Finance, however this is going to change in the future.',
        gaugeWeights: 'There currently is no gauge weight mechanism active for Platypus Finance, however this might change in the future.',
        rewards: [
            'There are three pools which qualify for liquidity mining. These pools are the:',
            '1. Base pool',
            '2. Boosting pool',
            '3. AVAX - PTP pool',
            'The base pool isn’t special in a sense that it just offers “regular” liquidity mining incentives. However the rewards from the boosting pool, as the name suggests, can be boosted. This can be done by staking PTP for vePTP. Depending on the amount of vePTP a user has, the more rewards they will get.',
        ],
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://platypus.finance'],
            apps: [''],
            documentation: ['https://docs.platypus.finance/platypus-finance-docs'],
            explorers: [''],
            governance: [''],
            repositories: ['https://github.com/platypus-finance'],
            socialMedia: [
                'https://twitter.com/Platypusdefi',
                'https://discord.com/invite/B6ThAvev2A',
            ],
        },
        technology: {
            category: {
                name: 'AMM',
                details: 'platypus',
            },
            stateCorrectness: {
                ...STATE_CORRECTNESS.FRAUD_PROOFS,
                isIncomplete: true,
            },
            dataAvailability: {
                ...DATA_AVAILABILITY.PLASMA_OFF_CHAIN,
                isIncomplete: true,
            },
            operator: {
                ...OPERATOR.CENTRALIZED_OPERATOR,
                isIncomplete: true,
            },
            forceTransactions: {
                ...FORCE_TRANSACTIONS.WITHDRAW,
                isIncomplete: true,
            },
            exitMechanisms: [
                {
                    ...EXITS.PLASMA,
                    isIncomplete: true,
                },
            ],
            massExit: {
                name: 'The mass exit problem is unsolved',
                description:
                    'In case the operator is malicious all users need to exit within a predetermined time frame. Users that do not manage to do this will lose their funds.',
                references: [],
                risks: [
                    {
                        category: 'Funds can be stolen if',
                        text: 'users are unable to withdraw in a mass exit event.',
                    },
                ],
                isIncomplete: true,
            },
            contracts: {
                addresses: [
                    {
                        name: 'Platypus',
                        address: '0x22d4002028f537599bE9f666d1c4Fa138522f9c8',
                    },
                    {
                        name: 'RegistryLogic',
                        address: '0x385827aC8d1AC7B2960D4aBc303c843D9f87Bb0C',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [0],
                        },
                    },
                    {
                        name: 'RegistryData',
                        address: '0x0fC25C7931679B838209c484d49Df0Cb9E633C41',
                        upgradeability: {
                            type: 'Reference',
                            base: 'RegistryLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'StakeLogic',
                        address: '0x84e34fD82FC368F1a072075114AdC4b552a7a1F4',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [1],
                        },
                    },
                    {
                        name: 'StakeData',
                        address: '0xaB3AC436D66CBEeDc734ed2c1562c3a213c9bc77',
                        upgradeability: {
                            type: 'Reference',
                            base: 'StakeLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'SpotLogic',
                        address: '0x2D627FF93d32f5FEBb04d68409A889895B4aef2D',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [2],
                        },
                    },
                    {
                        name: 'SpotData',
                        address: '0x0d283D685F0A741C463846176e4c8EFF90D3F9EC',
                        upgradeability: {
                            type: 'Reference',
                            base: 'SpotLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'DerivativesLogic',
                        address: '0xDfBFe895e07e5115773Cb9631CB2148114589caC',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [3],
                        },
                    },
                    {
                        name: 'DerivativesData',
                        address: '0x563052914Fd973a2305763269A106a7B0B6D50Cc',
                        upgradeability: {
                            type: 'Reference',
                            base: 'DerivativesLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'LegacyTokensExtension',
                        address: '0xDA88EfA53c85Afa30564bb651A2E76b99a232082',
                    },
                ],
                risks: [CONTRACTS.UPGRADE_NO_DELAY_RISK],
            },
        },
    },
}
