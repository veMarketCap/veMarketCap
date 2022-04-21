import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const spiritSwap: Project = {
    name: 'SpiritSwap',
    slug: 'spiritSwap',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'SpiritSwap is one of the first decentralized exchanges built on the Fantom Opera Chain and it’s an Automated Market Maker. It allows users to swap without any intermediary or trusted third party.',
        benefits: 'Having inSPIRIT offers a few opportunities for its holders compared to just having SPIRIT.',
        voting: 'Users who have inSPIRIT may vote on proposals. Every inSPIRIT equals 1 vote. The protocol itself currently is in transition to a fully on-chain governance solution. It is expected to be fully live in Q3 2022.',
        gaugeWeights: 'Holders of inSPIRIT have the right to vote on how the rewards will be distributed over the multiple farms on the platform.',
        rewards: 'Holders of inSPIRIT will get up to a 2.5x boost of their farming rewards for their own liquidity provision, and will also get 16.6% share of the trading fees of the SpiritSwap platform.',
        purpose: 'Exchange',
        status: 'In progress',
        links: {
            websites: ['https://www.spiritswap.finance'],
            apps: [''],
            documentation: ['https://layer3.gitbook.io/spirit-swap'],
            explorers: [''],
            governance: ['https://snapshot.org/#/spiritswap.eth'],
            repositories: ['https://github.com/Layer3Org'],
            socialMedia: [
                'https://twitter.com/Spirit_Swap',
                'https://discord.com/invite/uYNsSCKcfT',
            ],
        },
        technology: {
            category: {
                name: 'AMM',
                details: 'spiritSwap',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Controller',
                        address: '',
                    },
                    {
                        name: 'Voting Escrow (inSPIRIT Token)',
                        address: '0x2fbff41a9efaeae77538bd63f1ea489494acdc08',
                    },
                    {
                        name: ' Minter',
                        address: '',
                    },
                    {
                        name: 'SPIRIT Token',
                        address: '0x5cc61a78f164885776aa610fb0fe1257df78e59b',
                    },
                    {
                        name: 'Fee Distributor',
                        address: '0x18CeF75C2b032D7060e9Cf96F29aDF74a9a17ce6',
                    },
                ],
            }
        },
    },
}
