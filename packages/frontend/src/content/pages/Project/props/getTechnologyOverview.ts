// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {
    Project,
    ProjectContract,
    ProjectReference,
    ProjectTechnology,
    ProjectTechnologyChoice,
} from '@vemarketcap/config'

import {
    ContractsSectionProps,
    TechnologyContract,
} from '../view/ContractsSection'
import {
    ReferencesSectionProps,
    TechnologyReference,
} from '../view/ReferencesSection'
import {TechnologyIncompleteProps} from '../view/TechnologyIncomplete'
import {
    TechnologyChoice,
    TechnologySectionProps,
} from '../view/TechnologySection'
import {getEditLink, getIssueLink} from './links'

interface TechnologyOverview {
    incomplete?: TechnologyIncompleteProps
    sections: TechnologySectionProps[]
    contractsSection: ContractsSectionProps
    referencesSection: ReferencesSectionProps
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function getTechnologyOverview(project: Project): TechnologyOverview {
    const tech = project.details.technology
    const references: TechnologyReference[] = []

    function addReference(reference: ProjectReference) {
        const index = references.findIndex((x) => x.href === reference.href)
        if (index !== -1) {
            return index + 1
        } else {
            const id = references.length + 1
            references.push({id, text: reference.text, href: reference.href})
            return id
        }
    }

    function makeTechnologyChoice(
        id: string,
        item: ProjectTechnologyChoice
    ): TechnologyChoice {
        const risks = item.risks.map((risk: any) => ({
            referenceIds: (risk.references ?? []).map(addReference),
            text: `${risk.category} ${risk.text}`,
            isCritical: !!risk.isCritical,
        }))

        const issueTitle = `Problem: ${project.name} - ${item.name}`

        return {
            id,
            name: item.name,
            editLink: getEditLink(project),
            issueLink: getIssueLink(issueTitle),
            description: item.description,
            isIncomplete: !!item.isIncomplete,
            referenceIds: item.references.map(addReference),
            risks,
        }
    }

    function makeSections(tech: ProjectTechnology) {
        const technology: TechnologySectionProps = {
            id: 'technology',
            title: 'Technology'
        }

        const operator: TechnologySectionProps = {
            id: 'operator',
            title: 'Operator'
        }

        const withdrawals: TechnologySectionProps = {
            id: 'withdrawals',
            title: 'Withdrawals'
        }

        const other: TechnologySectionProps = {
            id: 'other-considerations',
            title: 'Other considerations'
        }
    }

    function makeTechnologyContract(item: ProjectContract): TechnologyContract {
        const links = []

        if (
            item.upgradeability?.type === 'EIP1967' ||
            item.upgradeability?.type === 'NutBerry' ||
            item.upgradeability?.type === 'ZeppelinOs'
        ) {
            links.push({
                name: 'Implementation (Upgradable)',
                href: `https://etherscan.io/address/${item.upgradeability.implementation}#code`,
            })
            links.push({
                name: 'Admin',
                href: `https://etherscan.io/address/${item.upgradeability.admin}#code`,
            })
        }

        if (item.upgradeability?.type === 'StarkWare') {
            const delay = item.upgradeability.upgradeDelay !== 0
            const days = item.upgradeability.upgradeDelay / (60 * 60 * 24)
            const implementation =
                item.upgradeability.callImplementation ??
                item.upgradeability.implementation
            links.push({
                name: `Implementation (Upgradable${
                    delay ? ` ${days} days delay` : ''
                })`,
                href: `https://etherscan.io/address/${implementation}#code`,
            })
        }

        if (item.upgradeability?.type === 'Reference') {
            links.push({
                name: 'Code (Upgradable)',
                href: `https://etherscan.io/address/${item.address}#code`,
            })
        }

        const tokens = project.bridges.find(
            (x: any) => x.address === item.address
        )?.tokens
        let description = item.description
        if (tokens) {
            const joined = tokens.join(', ')
            const tokenText = `This contract stores the following tokens: ${joined}.`
            if (!description) {
                description = tokenText
            } else {
                description += ' ' + tokenText
            }
        }

        return {
            name: item.name,
            address: item.address,
            description,
            links,
        }
    }

    function makeContractSection(tech: ProjectTechnology) {
        const contracts = tech.contracts.addresses.map(makeTechnologyContract)

        return {
            editLink: getEditLink(project),
            issueLink: getIssueLink(`Problem: ${project.name} - Contracts`),
            contracts,
        }
    }

    const sections = makeSections(tech)

    function getTwitterLink(project: Project) {
        const twitterSocialMedia = project.details.links.socialMedia.find((x: any) =>
            x.includes('twitter')
        )
        if (!twitterSocialMedia) {
            return
        }
        const twitterAccount = twitterSocialMedia.substring(
            'https://twitter.com/'.length
        )

        const message = `Hey @${twitterAccount}. Your project overview on @vemarketcap.com would benefit from your help.`
        const url = `https://vemarketcap.com/projects/${project.slug}`

        const options = [
            ['text', encodeURIComponent(message)],
            ['url', encodeURIComponent(url)],
        ]
            .map((x) => `${x[0]}=${x[1]}`)
            .join('&')

        return `https://twitter.com/intent/tweet?${options}`
    }

    function noUndefined<T>(x: T | undefined): x is T {
        return x !== undefined
    }
}
