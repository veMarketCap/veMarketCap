import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const hundred: Project = {
    name: 'Hundred Finance',
    slug: 'hundred-finance',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Hundred Finance is a multi-chain protocol which enables the lending and borrowing of multiple cryptocurrencies. It is actually a fork of the Compound protocol.',
        benefits: 'There currently is no direct revenue share with the veHND holders. They now are getting a relatively low APR paid out in the asset that they stake. This rate is increased by the protocol because they pay out an additional reward in HND. This additional reward can be boosted up to 2.5x by staking a certain amount of HND for veHND.',
        voting: 'The veHND gives you the right to participate in the governance process. Since Hundred Finance is multichain, the governance rights only apply to the chain that you’ve staked on.',
        gaugeWeights: 'Hundred Finance offers the possibility to direct the incentivization of different assets. The incentivization will be determined on the gauge weight a certain asset has. The bigger the gauge weight, the more HND a certain asset will receive as reward. In this way the liquidity incentive can be directed by the holders of veHND.',
        rewards: 'If you’re staking certain assets in the protocol you’ll be able to get a higher ROI on the asset that you’re staking. This additional reward can be boosted up to 2.5x by staking a certain amount of HND for veHND.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://hundred.finance'],
            apps: [''],
            documentation: ['https://docs.hundred.finance'],
            explorers: [''],
            governance: ['https://snapshot.org/#/hundredfinance.eth'],
            repositories: ['https://github.com/hundred-finance'],
            socialMedia: [
                'https://twitter.com/veTokenFinance',
                'https://discord.gg/hundred',
            ],
        },
        technology: {
            category: {
                name: 'Lending',
                details: 'hundred',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Hundred',
                        address: '0x10010078a54396F62c96dF8532dc2B4847d47ED3',
                    }
                ],
            },
        },
    },
}
