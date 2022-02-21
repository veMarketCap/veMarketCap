import {
    CONTRACTS,
    DATA_AVAILABILITY,
    EXITS,
    FORCE_TRANSACTIONS,
    OPERATOR,
    RISK_VIEW,
    STATE_CORRECTNESS,
} from './common'
import { Project } from './types'

export const _88mph: Project = {
    name: '88mph',
    slug: '88mph',
    bridges: [],
    associatedTokens: [],
    details: {
        description:
            '88mph has a variety of features that make it a good place for earning a fixed yield rate on multiple assets. By depositing your assets the protocol will make sure you will get a fixed yield instead of a variable yield rate.',
        benefits: 'There currently is xMPH but that’s going to be phased out. Having veMPH offers a few opportunities for its holders, compared to just having MPH of xMPH.',
        voting: 'A user with veMPH will be eligible to vote on governance proposals.',
        gaugeWeights: 'Each 88mph pool will be regularly allocated MPH incentives based on gauge weights. The depositors will earn these incentives automatically when they deposit their assets.',
        rewards: 'There will also be a form of revenue share according to the proposal. It now suggests to share 50% of the revenue accrued by the platform with the holders of veMPH.',
        purpose: 'Exchange',
        status: 'In progress',
        links: {
            websites: ['https://88mph.app'],
            apps: [''],
            documentation: ['https://docs.88mph.app'],
            explorers: [''],
            governance: ['https://forum.88mph.app'],
            repositories: ['https://github.com/88mphapp'],
            socialMedia: [
                'https://twitter.com/88mphapp',
                'https://discord.gg/rq4bZPy7KS',
            ],
        },
        riskView: {
            stateValidation: {
                value: 'Fraud proofs (!)',
                description:
                    'Fraud proofs allow actors watching the chain to prove that the state is incorrect. Because the data is not present on chain the security of fraud proofs is severely weakened.',
                sentiment: 'warning',
            },
            dataAvailability: RISK_VIEW.DATA_EXTERNAL,
            upgradeability: RISK_VIEW.UPGRADABLE_YES,
            sequencerFailure: RISK_VIEW.SEQUENCER_EXIT_L1,
            validatorFailure: RISK_VIEW.VALIDATOR_ESCAPE_MP,
        },
        technology: {
            category: {
                name: 'Interest Rate',
                details: '88mph',
            },
            stateCorrectness: {
                ...STATE_CORRECTNESS.FRAUD_PROOFS,
                isIncomplete: true,
            },
            dataAvailability: {
                ...DATA_AVAILABILITY.PLASMA_OFF_CHAIN,
                isIncomplete: true,
            },
            operator: {
                ...OPERATOR.CENTRALIZED_OPERATOR,
                isIncomplete: true,
            },
            forceTransactions: {
                ...FORCE_TRANSACTIONS.WITHDRAW,
                isIncomplete: true,
            },
            exitMechanisms: [
                {
                    ...EXITS.PLASMA,
                    isIncomplete: true,
                },
            ],
            massExit: {
                name: 'The mass exit problem is unsolved',
                description:
                    'In case the operator is malicious all users need to exit within a predetermined time frame. Users that do not manage to do this will lose their funds.',
                references: [],
                risks: [
                    {
                        category: 'Funds can be stolen if',
                        text: 'users are unable to withdraw in a mass exit event.',
                    },
                ],
                isIncomplete: true,
            },
            contracts: {
                addresses: [
                    {
                        name: '88mph',
                        address: '0x8888801aF4d980682e47f1A9036e589479e835C5',
                    },
                    {
                        name: 'RegistryLogic',
                        address: '0x385827aC8d1AC7B2960D4aBc303c843D9f87Bb0C',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [0],
                        },
                    },
                    {
                        name: 'RegistryData',
                        address: '0x0fC25C7931679B838209c484d49Df0Cb9E633C41',
                        upgradeability: {
                            type: 'Reference',
                            base: 'RegistryLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'StakeLogic',
                        address: '0x84e34fD82FC368F1a072075114AdC4b552a7a1F4',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [1],
                        },
                    },
                    {
                        name: 'StakeData',
                        address: '0xaB3AC436D66CBEeDc734ed2c1562c3a213c9bc77',
                        upgradeability: {
                            type: 'Reference',
                            base: 'StakeLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'SpotLogic',
                        address: '0x2D627FF93d32f5FEBb04d68409A889895B4aef2D',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [2],
                        },
                    },
                    {
                        name: 'SpotData',
                        address: '0x0d283D685F0A741C463846176e4c8EFF90D3F9EC',
                        upgradeability: {
                            type: 'Reference',
                            base: 'SpotLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'DerivativesLogic',
                        address: '0xDfBFe895e07e5115773Cb9631CB2148114589caC',
                        upgradeability: {
                            type: 'Reference',
                            base: 'Gluon',
                            method: 'function current(uint32 id) view returns(address)',
                            args: [3],
                        },
                    },
                    {
                        name: 'DerivativesData',
                        address: '0x563052914Fd973a2305763269A106a7B0B6D50Cc',
                        upgradeability: {
                            type: 'Reference',
                            base: 'DerivativesLogic',
                            method: 'function data() view returns(address)',
                        },
                    },
                    {
                        name: 'LegacyTokensExtension',
                        address: '0xDA88EfA53c85Afa30564bb651A2E76b99a232082',
                    },
                ],
                risks: [CONTRACTS.UPGRADE_NO_DELAY_RISK],
            },
        },
        news: [
            {
                date: '2021-08-02',
                name: 'Funding Rates: July 16–31, 2021',
                link: 'https://blog.leverj.io/funding-rates-july-16-31-2021-610f3506b4d8',
            },
            {
                date: '2020-07-26',
                name: 'Funding Rates: July 1–15, 2021',
                link: 'https://blog.leverj.io/funding-rates-july-1-15-2021-5595b7e5ffcd',
            },
            {
                date: '2021-07-22',
                name: 'Where to see the referral reward I earned?',
                link: 'https://blog.leverj.io/where-to-see-the-referral-reward-i-earned-246758dc7d0a',
            },
        ],
    },
}
