import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const stargate: Project = {
    name: 'Stargate',
    slug: 'stargate',
    bridges: [],
    associatedTokens: [],
    details: {
        description: 'Stargate is a fully composable liquidity transport protocol that lives at the heart of Omnichain DeFi. With Stargate, users & dApps can transfer native assets cross-chain while accessing the protocol’s unified liquidity pools with instant guaranteed finality.',
        benefits: '',
        voting: '',
        gaugeWeights: '',
        rewards: '',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://stargate.finance'],
            apps: [''],
            documentation: ['https://stargateprotocol.gitbook.io/stargate/v/user-docs/governance/governance-model'],
            explorers: [''],
            governance: ['https://snapshot.org/#/stgdao.eth'],
            repositories: ['https://github.com/LayerZero-Labs/sdk/blob/163c635ed6297374165eb4faf07c4f4bf58d7c58/packages/sg-sdk/src/constants/addresses.ts#L138'],
            socialMedia: [
                'https://twitter.com/StargateFinance',
                '@Luke0x on Telegram',
            ],
        },
        technology: {
            category: {
                name: 'Cross Chain',
                details: 'stargate',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Stargate (STG)',
                        address: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
                    },
                    {
                        name: 'veSTG',
                        address: '0x0e42acBD23FAee03249DAFF896b78d7e79fBD58E',
                    },
                ],
            },
        },
    },
}
