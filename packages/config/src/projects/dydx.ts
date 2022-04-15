import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const dydx: Project = {
    name: 'dYdX',
    slug: 'dydx',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'The dYdX exchange is running on top of a layer-2 and allows for decentralized trading that supports multiple financial products such as perpetual, margin trading, leveraged trading, and spot trading. In simple terms, it combines off-chain order books with an on-chain settlement layer to enable trading.',
        benefits: 'Having veDYDX offers a few opportunities for its holders compared to just having DYDX. There could be a time lock model as well, however the exact time yet still has to be determined.',
        voting: 'When voting, veDYDX will be used to account for the amount of votes instead of DYDX. The exact ratio still has to be determined at the time of writing.',
        gaugeWeights: 'There could be a gauge weight system in place which can be used by veDYDX holders to incentivise the liveness of specific markets.',
        rewards: 'The current proposal doesn’t mention anything regarding revenue sharing with veDYDX holders.',
        purpose: 'Exchange',
        status: 'In progress',
        links: {
            websites: ['https://dydx.exchange'],
            apps: [''],
            documentation: ['https://docs.dydx.exchange/#general'],
            explorers: [''],
            governance: ['https://forums.dydx.community'],
            repositories: ['https://github.com/dydxprotocol'],
            socialMedia: [
                'https://twitter.com/dydxprotocol',
                'https://discord.com/invite/yah42Rb',
            ],
        },
        technology: {
            category: {
                name: 'Derivatives',
                details: 'dYdX',
            },
            contracts: {
                addresses: [
                    {
                        name: 'DYDX',
                        address: '0x92D6C1e31e14520e676a687F0a93788B716BEff5',
                    }
                ],
            },
        },
    },
}
