import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const saber: Project = {
    name: 'Saber',
    slug: 'saber',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Saber is a decentralized exchange that provides the liquidity for stablecoins,mwhose value is pegged to another asset, like the US dollar or bitcoin. Users deposit crypto into a Saber liquidity pool to earn passive yield from transaction fees, token-based incentives, and eventually automated DeFi strategies.',
        benefits: 'Having veSBR offers a few opportunities for its holders compared to just having CRV.',
        voting: 'Holding veSBR grants holders the rights to be involved in the governance of the protocol. Holders with at least 10 million veSBR have the right to create a proposal.',
        gaugeWeights: 'The holders of veSBR can vote which farms should have more or less incentives- the aggregate voting proportions weighted by the veSBR amount determine the reward distribution for the next epoch.',
        rewards: 'There currently are no rewards for locking tokens up.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://saber.so'],
            apps: [''],
            documentation: ['https://docs.saber.so'],
            explorers: [''],
            governance: ['https://gov.saber.so'],
            repositories: ['https://github.com/saber-hq'],
            socialMedia: [
                'https://twitter.com/Saber_HQ',
                'https://discord.com/invite/9buKA9E5Nm',
            ],
        },
        technology: {
            category: {
                name: 'AMM',
                details: 'saber',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Saber',
                        address: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
                    }
                ],
            },
        },
    },
}
