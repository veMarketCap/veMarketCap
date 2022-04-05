import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const pickle: Project = {
    name: 'Pickle',
    slug: 'pickle',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Pickle Finance is a yield aggregator which aggregates and compounds yields from other protocols. They are aggregating many parts of DeFi, including lending platforms, liquidity protocols, stock synthetics, automated market makers, and more. They optimize the yields of their users through auto compounding.',
        benefits: 'The voting escrow token of the project is called DILL. The PICKLE token can be time-locked for DILL (this means locking up the token for a certain period of time). The longer the PICKLE tokens are staked, the more DILL you’ll receive in return.',
        voting: 'The DILL token gives the right to participate in the on-chain governance of the protocol. It simultaneously gives the right to farm weight voting rights. DILL holders get to vote on the farm gauges for PICKLE emissions.',
        gaugeWeights: 'Users who have locked their PICKLE for DILL will be able to vote on how they would like their vote weight to be distributed across one or more Farms. The weights ultimately applied to the various farms depend on the allocation and DILL balance of the users who vote. In short, users with more DILL get more voting power.',
        rewards: 'The DILL token holders receive 45% of a protocol’s revenue which will be distributed in market-bought PICKLE. Holders of DILL can also boost their rewards up to 2.5x paid out in PICKLE.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://www.pickle.finance'],
            apps: [''],
            documentation: ['https://docs.pickle.finance'],
            explorers: [''],
            governance: ['https://forum.pickle.finance'],
            repositories: ['https://github.com/pickle-finance'],
            socialMedia: [
                'https://twitter.com/picklefinance',
                'https://discord.com/invite/pickle-finance',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'Pickle',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Pickle',
                        address: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
                    }
                ],
            },
        },
    },
}
