import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const yAxis: Project = {
    name: 'yAxis',
    slug: 'yaxis',
    bridges: [],
    associatedTokens: [],
    details: {
        description: 'The project yAxis is a DAO for meta yield farming. It basically allows its investors to deposit stablecoins in the vault, and will farm with these stablecoins using other protocols such as Yearn Vaults and the jars on Pickle Finance.',
        benefits: 'Having veYAXIS offers a few opportunities for its holders compared to just having YAXIS.',
        voting: 'The YAXIS can be time-locked for a duration between 1 week and 1 year for veYAXIS (so you’ll be locking up your tokens for a certain period of time). The veYAXIS is a non-transferable token. The longer the YAXIS tokens are staked, the more veYAXIS you’ll receive in return. Locking up these tokens grants you voting rights in the governance of the DAO. These voting rights can be used to vote (or not) on certain proposals.',
        gaugeWeights: 'The veYAXIS gives the holders voting power to skew emissions towards their favored gauge of USD, BTC, ETH, LINK and now YAXIS as well.',
        rewards: 'Besides the YAXIS emission, stakers will also earn a percentage of the yield on top of the emissions that they will receive. A total of 20% of the farmed governance tokens will be taken by the vault as a performance fee, and these profits will be used to buyback YAXIS tokens on the open market.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://www.yaxis.io'],
            apps: [''],
            documentation: ['https://yaxis.discourse.group/t/frequently-asked-questions-faqs/24'],
            explorers: [''],
            governance: ['https://yaxis.discourse.group'],
            repositories: ['https://github.com/yaxis-project'],
            socialMedia: [
                'https://twitter.com/yaxis_project',
                'https://discord.com/invite/yaxis-project',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'yAxis',
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
                        name: 'yAxis',
                        address: '0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73',
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
