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
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Controller',
                        address: '',
                    },
                    {
                        name: 'Voting Escrow (vePTP Token)',
                        address: '0x5857019c749147EEE22b1Fe63500F237F3c1B692',
                    },
                    {
                        name: ' Minter',
                        address: '',
                    },
                    {
                        name: 'PTP Token',
                        address: '0x22d4002028f537599bE9f666d1c4Fa138522f9c8',
                    },
                    {
                        name: 'Fee Distributor',
                        address: '',
                    },
                ],
            },
        },
    },
}
