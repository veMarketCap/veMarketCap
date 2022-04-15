import { Project } from './types'

export const angle: Project = {
    name: 'Angle',
    slug: 'angle',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            'Angle is an over-collateralized, decentralized and capital-efficient stablecoin protocol. It offers full convertibility between stable assets and collateral at oracle value: you can swap 1 of collateral against 1 of stablecoin and conversely.',
        benefits: 'Having veANGLE offers a few opportunities for its holders compared to just having ANGLE.',
        voting: 'The veANGLE token will be non-transferable. This token can be locked for a duration up to 4 years and then in return will give 1 veANGLE. (The exact duration periods are yet to be determined according to the proposal). If you lock up your ANGLE for veANGLE you\'ll be having the right to vote on certain proposals.',
        gaugeWeights: "The veANGLE gives the holders voting power to receive additional ANGLE emissions (up to 2.5x) boosted emission. But it's dependent on the veANGLE amount.",
        rewards: "On top of the ANGLE emission, stakers will also earn a bit of interest accrued by the protocol as well. The other part of the interest that's being earned by the protocol will be used to buy back ANGLE from the open market and redistribute it back to veANGLE holders.",
        purpose: 'Exchange',
        status: 'On',
        links: {
            websites: ['https://www.angle.money'],
            apps: [''],
            documentation: ['https://docs.angle.money'],
            explorers: [''],
            governance: ['https://gov.angle.money'],
            repositories: ['https://github.com/AngleProtocol'],
            socialMedia: [
                'https://twitter.com/AngleProtocol',
                'https://discord.com/invite/bsfZjvgx2s',
            ],
        },
        technology: {
            category: {
                name: 'Yield',
                details: 'angle',
            },
            contracts: {
                addresses: [
                    {
                        name: 'Gauge Controller',
                        address: '0x9aD7e7b0877582E14c17702EecF49018DD6f2367',
                    },
                    {
                        name: 'Voting Escrow (veANGLE Token)',
                        address: '0x0C462Dbb9EC8cD1630f1728B2CFD2769d09f0dd5',
                    },
                    {
                        name: 'Minter',
                        address: '',
                    },
                    {
                        name: 'ANGLE Token',
                        address: '0x31429d1856aD1377A8A0079410B297e1a9e214c2',
                    },
                    {
                        name: 'Fee Distributor',
                        address: '0x7F82ff050128e29Fd89D85d01b93246F744E62A0',
                    },
                ],
            },
        },
    },
}
