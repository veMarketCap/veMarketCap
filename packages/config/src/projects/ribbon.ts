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
                        name: 'Gauge Controller',
                        address: '0x0cb9cc35cEFa5622E8d25aF36dD56DE142eF6415',
                    },
                    {
                        name: 'Voting Escrow (veRBN Token)',
                        address: '0x19854C9A5fFa8116f48f984bDF946fB9CEa9B5f7',
                    },
                    {
                        name: 'Minter',
                        address: '0x5B0655F938A72052c46d2e94D206ccB6FF625A3A',
                    },
                    {
                        name: 'RBN Token',
                        address: '0x6123b0049f904d730db3c36a31167d9d4121fa6b',
                    },
                    {
                        name: 'Fee Distributor',
                        address: '0x29893Bcd1fdA6da4f29D0e21edc55Abc3A29A202',
                    },
                ],
            },
        },
    },
}
