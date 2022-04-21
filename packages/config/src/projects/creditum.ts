import { Project } from './types'

export const creditum: Project = {
    name: 'Creditum',
    slug: 'creditum',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Creditum is a Fantom based lending and borrowing protocol that allows its users to mint borrow and mint cUSD, a stablecoin which is pegged to the price of the US-dollar.',
        benefits: 'Having veCREDIT offers a few opportunities for its holders compared to just having CREDIT.',
        voting: 'By having veCREDIT a user will have the right to participate in the on-chain governance of the protocol. The amount of veCREDIT is determined based on how long the tokens will be locked. The amount of these tokens will decay linearly overtime until they’ll be unlocked again.',
        gaugeWeights: 'There currently is no such thing implemented. It could be that this will be implemented in the future.',
        rewards: 'Having veCREDIT also gives its holder the right to receive a share of the platform revenue. A total of 75% of the revenue stream will be shared with veCREDIT holders.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://revenantlabs.io'],
            apps: [''],
            documentation: ['https://documentation.revenant.finance/creditum'],
            explorers: [''],
            governance: [''],
            repositories: ['https://github.com/revenant-finance'],
            socialMedia: [
                'https://twitter.com/RevenantLabs',
                'https://discord.com/invite/aDmKM7E7SY',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'creditum',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Controller',
                        address: '',
                    },
                    {
                        name: 'Voting Escrow (veCREDIT Token)',
                        address: '0xdB49A1190778623A872254ECca3a7bFD997223cb',
                    },
                    {
                        name: ' Minter',
                        address: '',
                    },
                    {
                        name: 'CREDIT Token',
                        address: '0x77128DFdD0ac859B33F44050c6fa272F34872B5E',
                    },
                    {
                        name: 'Fee Distributor',
                        address: '',
                    },
                ]
            },
        },
    },
}
