import React from 'react'

import {ShieldWarnIcon} from '../../../common/icons'
import {Section} from './Section'

export interface BenefitSectionProps {
    editLink: string
    issueLink: string
    benefits: string
    warning?: string
}

export function BenefitSection(props: BenefitSectionProps) {
    return (
        <Section
            title="Benefits"
            id="benefits"
            className="DescriptionSection"
            editLink={props.editLink}
            issueLink={props.issueLink}
        >
            {props.warning && (
                <div className="DescriptionSection-Warning">
                    <ShieldWarnIcon/>
                    {props.warning}
                </div>
            )}
            <p className="DescriptionSection-Text">{props.benefits}</p>
        </Section>
    )
}
