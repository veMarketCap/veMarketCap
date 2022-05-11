import React from 'react'

import {BenefitSection, BenefitSectionProps} from './BenefitSection'
// import {ContractsSection, ContractsSectionProps} from './ContractsSection'
import {
    DescriptionSection,
    DescriptionSectionProps,
} from './DescriptionSection'
import {GaugeWeightSection, GaugeWeightSectionProps} from './GaugeWeightSection'
import {AddressSection, AddressSectionProps} from "./links/addressSection";
import {LinkSection, LinkSectionProps} from './links/LinkSection'
// import {NewsSection, NewsSectionProps} from './NewsSection'
// import {ReferencesSection, ReferencesSectionProps} from './ReferencesSection'
import {RewardSection, RewardSectionProps} from './RewardSection'
// import {RiskSection, RiskSectionProps} from './RiskSection'
// import {TechnologyIncomplete, TechnologyIncompleteProps} from './TechnologyIncomplete'
// import {TechnologySection, TechnologySectionProps} from './TechnologySection'
import {VotingSection, VotingSectionProps} from './VotingSection'

export interface ProjectDetailsProps {
    linkSection: LinkSectionProps
    descriptionSection: DescriptionSectionProps
    benefitSection: BenefitSectionProps
    votingSection: VotingSectionProps
    gaugeWeightSection: GaugeWeightSectionProps
    rewardSection: RewardSectionProps
    addressSection: AddressSectionProps
}

export function ProjectDetails(props: ProjectDetailsProps) {
    // console.log(props.addressSection.slug)
    return (
        <main className="ProjectDetails">
            <LinkSection {...props.linkSection} />
            <AddressSection {...props.addressSection} />
            <div className="ProjectDetails-Content">
                <DescriptionSection {...props.descriptionSection} />
                <BenefitSection {...props.benefitSection} />
                <VotingSection {...props.votingSection} />
                <GaugeWeightSection {...props.gaugeWeightSection} />
                <RewardSection {...props.rewardSection} />
                {/*<RiskSection {...props.riskSection} />*/}
                {/*{props.incomplete && <TechnologyIncomplete {...props.incomplete} />}*/}
                {/*{props.sections.map((section) => (*/}
                {/*    <TechnologySection key={section.id} {...section} />*/}
                {/*))}*/}
                {/*<ContractsSection {...props.contractsSection} />*/}
            </div>
            {/*<ReferencesSection {...props.referencesSection} />*/
            }
        </main>
    )
}
