import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const yAxis: Project = {
    name: 'yAxis',
    slug: 'yaxis',
    bridges: [],
    associatedTokens: [],
    details: {
        description: 'The project yAxis is a DAO for meta yield farming. It basically allows its investors to deposit stablecoins in the vault, and will farm with these stablecoins using other protocols such as Yearn Vaults and the jars on Pickle Finance.',
        benefits: 'Having veYAXIS offers a few opportunities for its holders compared to just having YAXIS.',
        voting: 'The YAXIS can be time-locked for a duration between 1 week and 1 year for veYAXIS (so you’ll be locking up your tokens for a certain period of time). The veYAXIS is a non-transferable token. The longer the YAXIS tokens are staked, the more veYAXIS you’ll receive in return. Locking up these tokens grants you voting rights in the governance of the DAO. These voting rights can be used to vote (or not) on certain proposals.',
        gaugeWeights: 'The veYAXIS gives the holders voting power to skew emissions towards their favored gauge of USD, BTC, ETH, LINK and now YAXIS as well.',
        rewards: 'Besides the YAXIS emission, stakers will also earn a percentage of the yield on top of the emissions that they will receive. A total of 20% of the farmed governance tokens will be taken by the vault as a performance fee, and these profits will be used to buyback YAXIS tokens on the open market.',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://www.yaxis.io'],
            apps: [''],
            documentation: ['https://yaxis.discourse.group/t/frequently-asked-questions-faqs/24'],
            explorers: [''],
            governance: ['https://yaxis.discourse.group'],
            repositories: ['https://github.com/yaxis-project'],
            socialMedia: [
                'https://twitter.com/yaxis_project',
                'https://discord.com/invite/yaxis-project',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'yAxis',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Controller',
                        address: '',
                    },
                    {
                        name: 'Voting Escrow (veYAXIS Token)',
                        address: '0x66b4c0daa0c65ed1eae84b4d738b9572a79389c4',
                    },
                    {
                        name: 'Minter',
                        address: '',
                    },
                    {
                        name: 'YAXIS Token',
                        address: '0x0ada190c81b814548ddc2f6adc4a689ce7c1fe73',
                    },
                    {
                        name: 'Fee Distributor',
                        address: '',
                    },
                ],
            }
        },
    },
}
