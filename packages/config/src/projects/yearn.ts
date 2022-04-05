import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const yearn: Project = {
    name: 'Yearn Finance',
    slug: 'yearn-finance',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Yearn Finance is a gateway for a set of Decentralized Finance solutions, powered by the Ethereum blockchain, that allows one to maximize your investments through lending aggregation, yield-generation, and insurance.',
        benefits: 'Having veYFI offers a few opportunities for its holders compared to just having YFI.',
        voting: 'The YFI can be time-locked for veYFI. The longer the YFI tokens are staked, the more veYFI you’ll receive in return. Locking up these tokens grants you voting rights in the governance of the DAO. You can use these votes if you agree with certain proposals (or not).',
        gaugeWeights: 'According to the proposal vault gauges will be introduced where vault depositors stake their vault tokens and earn YFI rewards according to their veYFI weight. The YFI tokens are allocated to gauges based on weekly governance votes.',
        rewards: 'Holders of veYFI will receive more of the token emissions if they lock their token up for a longer period of time. The exact amount of time is yet to be determined.',
        purpose: 'Exchange',
        status: 'In progress',
        links: {
            websites: ['https://yearn.finance'],
            apps: [''],
            documentation: ['https://docs.yearn.finance'],
            explorers: [''],
            governance: ['https://gov.yearn.finance'],
            repositories: ['https://github.com/yearn/yearn-finance-v3'],
            socialMedia: [
                'https://twitter.com/iearnfinance',
                'https://discord.com/invite/6PNv2nF',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'yearn',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Yearn',
                        address: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
                    }
                ],
            },
        },
    },
}
