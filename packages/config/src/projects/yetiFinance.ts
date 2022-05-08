import { Project } from './types'

export const yetiFinance: Project = {
    name: 'Yeti Finance',
    slug: 'yeti-finance',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Yeti Finance is a cross-margin lending protocol on Avalanche that allows users to borrow up to 21x against their portfolio of LP tokens, staked assets such as sJOE and sAVAX, and yield-bearing stablecoins in a single debt position for 0% interest.',
        benefits: [
            'veYETI can be be used for four things:',
            ' (1) Boosting $YETI rewards for stability pool staking',
            ' (2) Boosting $YETI rewards for liquidity providing for YUSD.',
            ' (3) Reducing the protocol’s cut of yield on deposited assets (YUSD rebates)',
            " (4) Getting access to special strategies like Pandora's box (aUST-Anchor).",
            "The veYETI model is designed to incentivize users to accumulate and stake $YETI through providing real utility to farmers and protocol users. When you unstake YETI, you lose your veYETI balance, similar to vePTP and veJOE."
        ],
        voting: '',
        gaugeWeights: "",
        rewards: "",
        purpose: '',
        status: 'On',
        links: {
            websites: ['https://yeti.finance/'],
            apps: [''],
            documentation: ['https://docs.yeti.finance/'],
            explorers: [''],
            governance: [''],
            repositories: [''],
            socialMedia: [
                'https://twitter.com/YetiFinance',
                'https://discord.com/invite/yetifinance',
            ],
        },
        technology: {
            category: {
                name: 'CDP',
                details: 'yeti-finance',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Yeti Token',
                        address: 'avax:0x77777777777d4554c39223C354A05825b2E8Faa3',
                    },
                    {
                        name: 'veYeti Token',
                        address: '0x88888888847DF39Cf1dfe1a05c904b4E603C9416',
                    }
                ],
            },
        },
    },
}
