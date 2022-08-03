import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const wild: Project = {
    name: 'Wild Credit',
    slug: 'wild-credit',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Wild Credit is a lending platform that provides the ability to lend and borrow ERC-20 tokens — including those within the long-tail sector of the market — by implementing a novel ‘isolated lending pool’ design. Wild Credit is the only platform to allow Uniswap v3 Liquidity Providers to borrow against their collateral. The platform provides a holistic solution to the borrowing of native ERC-20 tokens and their equivalent TOKEN:ETH Uniswap LP positions.',
        benefits: '',
        voting: 'The purpose of this token is to incentivise governance of the protocol and time-weight (i.e. locking up your token for a defined period) a token holders influence with the intention of aligning their time horizon with the long term success of the protocol. For example, a veWILD holder that locks up their token for 1 year will have greater voting power and higher proportion of revenue distribution (including both staking rewards and platform fees) compared to a veWILD holder that locks their token for 1 month.',
        gaugeWeights: '',
        rewards: '',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://wild.credit/'],
            apps: [''],
            documentation: [''],
            explorers: [''],
            governance: ['https://wild-credit.gitbook.io/wild-credit/wild-tokenomics/vewild-staking'],
            repositories: [''],
            socialMedia: [
                'https://twitter.com/WildCredit',
                'JimBob#9516',
            ],
        },
        technology: {
            category: {
                name: 'Lending',
                details: 'wild-credit',
            },
            contracts: {
                addresses: [
                    {
                        name: 'wild-credit',
                        address: '0x08A75dbC7167714CeaC1a8e43a8d643A4EDd625a',
                    },
                    {
                        name: 'veWild',
                        address: '0xc4347dbda0078d18073584602CF0C1572541bb15',
                    },
                ],
            },
        },
    },
}
