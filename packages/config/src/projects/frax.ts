import {Project} from './types'

export const frax: Project = {
    name: 'Frax',
    slug: 'frax',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Frax is the first fractional-algorithmic stablecoin protocol which partially uses an algorithm and partially uses collateral to maintain its peg to the USD. Frax is open-source, permissionless, and entirely on-chain – it started on Ethereum but is currently multichain. The end goal of the Frax protocol is to provide highly scalable, decentralized, algorithmic money in place of fixed-supply digital assets.',
        benefits: 'Having veFXS offers a few opportunities for its holders compared to just having FXS. These tokens can be locked for up to 4 years as well. It needs to be mentioned that 50% of the profits are being used to buy back FXS and burn it, and the other 50% is sent to the yield distributor contract for distribution to veFXS holders.',
        voting: 'The FXS is acting as the voting token in the system. Users may propose new changes to the protocol if they are holding a certain threshold of FXS. To be eligible to vote on certain proposals voters need to have veFXS.',
        gaugeWeights: 'Frax Finance offers the possibility to direct the incentivization of different pools. The incentivization will be determined on the gauge weight a certain pool has. The bigger the gauge weight, the more FXS a certain pool will receive. The liquidity incentive can be directed by the holders of veFXS.',
        rewards: 'Holding veFXS will give the user more weight when collecting certain farming rewards. The boost is an additive boost that will be added to each farmer\'s yield proportional to their veFXS balance.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://frax.finance'],
            apps: [''],
            documentation: ['https://docs.frax.finance'],
            explorers: [''],
            governance: ['https://app.frax.finance/governance'],
            repositories: ['https://github.com/FraxFinance'],
            socialMedia: [
                'https://twitter.com/fraxfinance',
                'https://discord.com/invite/4b8nuuWTZV',
            ],
        },
        technology: {
            category: {
                name: 'Stable Coin',
                details: 'Frax',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Proxy',
                        address: '',
                    },
                    {
                        name: 'Gauge Controller',
                        address: '',
                    },
                    {
                        name: 'Voting Escrow (veFXS Token)',
                        address: '0xc8418aF6358FFddA74e09Ca9CC3Fe03Ca6aDC5b0',
                    },
                    {
                        name: 'DistributorProxy (Minter)',
                        address: '',
                    },
                    {
                        name: 'FXS Token',
                        address: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
                    },
                    {
                        name: 'Fee Distributor',
                        address: 'Fee Distributor',
                    },
                ],
            }
        },
    },
}
