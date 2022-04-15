import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const snowball: Project = {
    name: 'Snowball',
    slug: 'snowball',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Snowball is a decentralized finance protocol built on the Avalanche blockchain and was launched in March 2021. Snowball is an auto-compounder & exchange for stable-assets.',
        benefits: 'Having xSNOB offers a few opportunities for its holders compared to just having SNOB.',
        voting: 'The SNOB token is Snowball’s governance token. It can be locked for xSNOB to vote on proposals, vote on weekly SNOB allocations, earn a portion of protocol revenue, and earn boosted SNOB rewards.',
        gaugeWeights: 'Each pool in Snowball has an associated gauge, which can be voted on to add SNOB rewards. Pools earn a percentage of the total SNOB rewards distributed, depending on how xSNOB holders allocate them. They are updated on a daily basis to reflect the current votes.',
        rewards: 'Users have the opportunity to get boosted rewards. It is determined by two factors. The more xSNOB one has, the bigger the boost. On the other hand the rewards are paid out by the relative size in the pool. If you have a big share then you’ll be needing more xSNOB to boost your rewards in the pool.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://snowball.network'],
            apps: [''],
            documentation: ['https://docs.snowball.network/welcome/readme'],
            explorers: [''],
            governance: ['https://app.snowball.network/governance'],
            repositories: ['https://github.com/Snowball-Finance'],
            socialMedia: [
                'https://twitter.com/snowballdefi',
                'https://discord.com/invite/MCVJmBb27w',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'Snowball',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Snowball',
                        address: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
                    }
                ],
            },
        },
    },
}
