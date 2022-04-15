import { Project } from './types'

export const glow: Project = {
    name: 'Glow',
    slug: 'glow',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Glow is a yield ecosystem built on the Terra blockchain. The goal of the project is to build a world of yield focused dApps in which $UST plays a central role. It currently just offers a lottery but it will add multiple dApps overtime.',
        benefits: 'Having veGLOW offers a few opportunities for its holders compared to just having GLOW.',
        voting: 'The GLOW tokens can be like time-locked and instead a user will get veGLOW (in this case a user will lock the token for a certain period of time). The veGLOW will likely be a non-transferable token and will have a linear vesting period.',
        gaugeWeights: "There is nothing mentioned regarding gauge weights.",
        rewards: "The idea of GLOW is to increase in value in alignment with its TVL. The more deposits will be made in the protocol, the more yield will be generated through Anchor protocol. Rewards distributed amongst the shareholders will be taxed with a 5% cut which in turn will go to the reserve.",
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://glowyield.com/'],
            apps: [''],
            documentation: ['https://docs.glowyield.com/glow-yield/'],
            explorers: ['https://medium.com/@glowyield/announcing-cw900-lv-the-first-ever-vote-escrowed-token-implementation-for-cosmwasm-plus-a-twist-cf4f79826b92'],
            governance: ['https://gov.glowyield.com/'],
            repositories: ['https://github.com/glow-protocol'],
            socialMedia: [
                'https://twitter.com/glowyield',
                'https://discord.com/invite/usKfE46BAW',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'glow',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Glow Token',
                        address: 'terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
                    }
                ],
            },
        },
    },
}
