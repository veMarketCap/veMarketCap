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
                name: 'Options',
                details: 'Ribbon Finance',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Ribbon Finance',
                        address: '0x6123B0049F904d730dB3C36a31167D9d4121fA6B',
                    }
                ],
            },
        },
    },
}
