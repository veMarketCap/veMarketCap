import { Project } from './types'

export const perp: Project = {
    name: 'Perpetual Protocol',
    slug: 'perpetual-protocol',
    bridges: [],
    associatedTokens: [],
    details: {
        description: 'Perpetual Protocol (PERP) is an Ethereum token that powers Perpetual Protocol, a decentralized exchange for perpetual contracts. Using perpetual contracts, users can open leveraged long or short trading positions for a variety of assets.',
        benefits: '',
        voting: '',
        gaugeWeights: '',
        rewards: '',
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://perp.com/'],
            apps: [''],
            documentation: [''],
            explorers: [''],
            governance: ['https://perp.com/governance'],
            repositories: [''],
            socialMedia: [
                'https://twitter.com/perpprotocol',
                'hsing@perp.fi',
            ],
        },
        technology: {
            category: {
                name: 'Derivatives',
                details: 'PERP',
            },
            contracts: {
                addresses: [
                    {
                        name: 'PERP',
                        address: '0xbc396689893d065f41bc2c6ecbee5e0085233447',
                    },
                    {
                        name: 'vePERP',
                        address: '0xD360B73b19Fb20aC874633553Fb1007e9FcB2b78',
                    }
                ]
            },
        },
    },
}
