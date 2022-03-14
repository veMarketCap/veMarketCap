import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const ribbon: Project = {
    name: 'Ribbon Finance',
    slug: 'ribbon-finance',
    bridges: [],
    associatedTokens: [],
    details: {
        description: [
            "Ribbon Finance is a protocol that helps users gain access to structured products in DeFi. It combines options, futures, and fixed income to improve a portfolio's risk-return profile.",
            "The project consists of a vault in which users can deposit ETH and WBTC. The vault earns yield on its deposits by running a weekly automated option selling strategy. This vault reinvests, and therefore auto-compounds, to create additional yield for the depositors over time."
        ],
        benefits: 'Having veRBN offers a few opportunities for its holders compared to just having RBN.',
        voting: 'The token will have the possibility to be locked up and therefore the owner will acquire more voting power.',
        gaugeWeights: [
            'Ribbon Finance is thinking about the possibility to incentivize the different vaults in the same way Curve does for their liquidity pools. The total number of incentives a certain vault receives, depends on the gauge weight this vault has. If the amount of gauge weight increases, so will the rewards that a certain vault receivesl.',
            'If you don’t want to vote as a user, you also have the possibility to delegate your vote.'
        ],
        rewards: 'The holders of veRBN will get up to a 2.5x boost of the RBN emission for depositing their funds into the vault. There will also be protocol sharing fee, but the exact percentage that will go to veRBN holders is yet to be determined at the time of writing.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://www.ribbon.finance'],
            apps: [''],
            documentation: ['https://docs.ribbon.finance'],
            explorers: [''],
            governance: ['https://snapshot.org/#/rbn.eth'],
            repositories: ['https://github.com/ribbon-finance/ribbon-v1'],
            socialMedia: [
                'https://twitter.com/ribbonfinance',
                'https://discord.com/invite/ribbon-finance',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'Ribbon Finance',
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
                        name: 'Ribbon Finance',
                        address: '0x6123B0049F904d730dB3C36a31167D9d4121fA6B',
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
