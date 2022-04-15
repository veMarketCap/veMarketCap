import { Project } from './types'

export const balancer: Project = {
    name: 'Balancer',
    slug: 'balancer',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            [
                'Balancer is a community-driven protocol, automated portfolio manager, liquidity provider, and price sensor that empowers decentralized exchange and the automated portfolio management of tokens on the Ethereum blockchain and other EVM compatible systems.',
                'Balancer Pools contains two or more tokens that traders can swap between. Liquidity Providers put their tokens in the pools in order to collect swap fees.',
                'Balancer adopts powerful features to slash gas costs, super-charge capital efficiency, unlock arbitrage with zero-token starting capital, and open the door to custom AMMs.'
            ],
        benefits: 'Having veBAL offers a few opportunities for its holders compared to just having BAL.',
        voting: 'When voting, veBAL will be used to account for the amount of votes instead of BAL. This applies to the on-chain votes or votes on snapshot based.',
        gaugeWeights: 'There will be a gauge weight system in place which can be used by veBAL holders to direct the emission of new tokens to certain pools.',
        rewards: 'There will also be a form of revenue share according to the proposal. It now suggests to share 75% of the revenue accrued by the platform with the holders of veBAL.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://balancer.fi'],
            apps: [''],
            documentation: ['https://docs.balancer.fi'],
            explorers: [''],
            governance: ['https://forum.balancer.fi'],
            repositories: ['https://github.com/balancer-labs'],
            socialMedia: [
                'https://twitter.com/BalancerLabs',
                'http://discord.balancer.fi',
            ],
        },
        technology: {
            category: {
                name: 'AMM',
                details: 'balancer',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Controller',
                        address: '0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD',
                    },
                    {
                        name: 'Voting Escrow (veBAL Token)',
                        address: '0xC128a9954e6c874eA3d62ce62B468bA073093F25',
                    },
                    {
                        name: 'Minter',
                        address: '',
                    },
                    {
                        name: 'BAL Token',
                        address: '0xba100000625a3754423978a60c9317c58a424e3D',
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
