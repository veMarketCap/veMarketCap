import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const LiquidDriver: Project = {
    name: 'Liquid Driver',
    slug: 'liquid-driver',
    bridges: [],
    associatedTokens: [],
    details: {
        description: 'Liquiddriver is a liquidity mining protocol and provides Liquidity-as-a-Service in the Fantom ecosystem. The protocol therefore aims to bring its users more utility, rewards and long-term benefits through the LQDR token. LQDR can be locked from 2 weeks up to 2 years. From the moment it is being locked, the amount of xLQDR will decrease linearly until the tokens can be unlocked again.',
        benefits: 'Having xLQDR offers a few opportunities for its holders compared to just having LQDR.',
        voting: 'The xLQDR token gives the right to vote on proposals regarding the platform. There will also be a voting mechanism in the future in which xLQDR holders can be bribed for their votes.',
        gaugeWeights: 'There probably will be some form of gauges but this has yet to be announced according to their docs.',
        rewards: 'There probably will be some form of boosted rewards but this has yet to be announced according to their docs.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://www.liquiddriver.finance'],
            apps: [''],
            documentation: ['https://docs.liquiddriver.finance'],
            explorers: [''],
            governance: ['https://vote.liquiddriver.finance/#/'],
            repositories: ['https://github.com/LiquidDriver-finance'],
            socialMedia: [
                'https://twitter.com/LiquidDriver',
                'https://discord.com/invite/6BvXc9Bbfu',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'Liquid Driver',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Liquid Driver',
                        address: '0x10b620b2dbac4faa7d7ffd71da486f5d44cd86f9',
                    }
                ],
            },
        },
    },
}
