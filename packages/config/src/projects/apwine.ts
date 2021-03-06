import { Project } from './types'

export const apwine: Project = {
    name: 'APWine',
    slug: 'apwine',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'APwine is a decentralized protocol and aims to tokenize the future yield so a user doesn’t have to worry about future yield fluctuations.',
        benefits: 'Having veAPW offers a few opportunities for its holders compared to just having APW.',
        voting: 'The veAPW token can be locked up for veAPW for a period up to 2 years. The veAPW will be non-transferable until the lock will expire. Locking the tokens up will grant you the right to participate in the governance process. The more veAPW a user has, the more voting right they will have.',
        gaugeWeights: "Currently the rewards are being distributed evenly over all the pools but there is a governance proposal up to create a dynamic gauge weight. The gauge weight could be voted on every week to determine which pools should get the emission of the APW token.",
        rewards: "Holders of veAPW will get to share in the platform revenue generated by the 0.05% swapfees. This will also include all kinds of other future protocol revenue flows which are not in production yet.",
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://www.apwine.fi/'],
            apps: [''],
            documentation: ['https://docs.apwine.fi/'],
            explorers: ['https://medium.com/@glowyield/announcing-cw900-lv-the-first-ever-vote-escrowed-token-implementation-for-cosmwasm-plus-a-twist-cf4f79826b92'],
            governance: ['https://gov.apwine.fi/', 'https://gov.apwine.fi/t/apgp-2-enable-gauges-for-apw-rewards/171', 'https://gov.apwine.fi/t/apgp-1-how-should-be-used-the-dao-fees/150'],
            repositories: ['https://github.com/APWine'],
            socialMedia: [
                'https://twitter.com/APWineFinance',
                'https://discord.com/invite/AxbH7sE6sc',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'apwine',
            },
            contracts: {
                addresses: [
                    {
                        name: 'APwine Token',
                        address: '0x4104b135dbc9609fc1a9490e61369036497660c8',
                    }
                ],
            },
        },
    },
}
