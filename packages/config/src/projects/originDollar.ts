import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const originDollar: Project = {
    name: 'Origin Dollar (OUSD)',
    slug: 'origin-dollar',
    bridges: [],
    associatedTokens: [],
    details: {
        description: 'Origin Dollar (OUSD) is a new stablecoin that was initially launched on the Ethereum network. Its design is superior to existing stablecoins because OUSD captures competitive yields while being passively held in wallets.',
        benefits: '',
        voting: '',
        gaugeWeights: '',
        rewards: '',
        purpose: 'Exchange',
        status: 'In progress',
        links: {
            websites: ['https://ousd.com'],
            apps: [''],
            documentation: ['https://docs.ousd.com/governance/ogv-staking', 'https://docs.ousd.com/smart-contracts/registry'],
            explorers: [''],
            governance: ['https://governance.ousd.com/'],
            repositories: [''],
            socialMedia: [
                'https://twitter.com/originprotocol',
                'josh@originprotocol.com',
            ],
        },
        technology: {
            category: {
                name: 'Algo-Stables',
                details: 'stargate',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Origin Dollars (OUSD)',
                        address: '0x2a8e1e676ec238d8a992307b495b45b3feaa5e86',
                    },
                ],
            },
        },
    },
}
