import {Project} from './types'

export const curve: Project = {
    name: 'Curve',
    slug: 'curve',
    bridges: [],
    associatedTokens: [],
    details: {
        description: [
            'Curve is a decentralized exchange for swapping stable assets (foremostly assets with the same value, such as stablecoin pairs). Curve’s Automated Market Maker (AMM) uses the “Stableswap Invariant Formula” to manage liquidity.',
            'The Curve DAO officially launched in August 2020. The DAO will allow liquidity providers to make decisions on adding new pools, changing pool parameters, adding CRV incentives and many other aspects of the Curve protocol.'
        ],
        benefits: 'Having veCRV offers a few opportunities for its holders compared to just having CRV.',
        voting: 'The CRV can be time-locked for veCRV (this means locking up the token for a certain period of time). The veCRV is a non-transferable token. The longer the CRV tokens are staked, the more veCRV you’ll receive in return. Locking up these tokens grants you voting rights in the governance of the DAO. You can use these votes if you agree with certain proposals (or not).',
        gaugeWeights: 'Curve offers the possibility to direct the incentivization of different pools. The incentivization will be determined based on the gauge weight a certain pool has. The bigger the gauge weight, the more CRV a certain pool will receive.',
        rewards: 'Holders of veCRV will get up to a 2.5x boost of the CRV rewards for their own liquidity provision, and will also get a 50% share of the trading fees on the Curve platform.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://curve.fi'],
            apps: [''],
            documentation: ['https://resources.curve.fi/base-features/understanding-voting'],
            explorers: [''],
            governance: ['https://gov.curve.fi/'],
            repositories: ['https://github.com/curvefi/'],
            socialMedia: [
                'https://twitter.com/CurveFinance',
                'https://discord.com/invite/9uEHakc',
            ],
        },
        technology: {
            category: {
                name: 'AMM',
                details: 'Curve',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Proxy',
                        address: '',
                    },
                    {
                        name: 'Gauge Controller',
                        address: '0x2F50D538606Fa9EDD2B11E2446BEb18C9D5846bB',
                    },
                    {
                        name: 'Voting Escrow (veCRV Token)',
                        address: '0x5f3b5DfEb7B28CDbD7FAba78963EE202a494e2A2',
                    },
                    {
                        name: 'Minter',
                        address: '0xd061D61a4d941c39E5453435B6345Dc261C2fcE0',
                    },
                    {
                        name: 'CRV Token',
                        address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
                    },
                    {
                        name: 'Fee Distributor',
                        address: '0xA464e6DCda8AC41e03616F95f4BC98a13b8922Dc',
                    },
                ],
            }
        },
    },
}
