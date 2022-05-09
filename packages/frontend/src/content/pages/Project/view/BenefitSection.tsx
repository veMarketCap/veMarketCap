import React from 'react'

import {ShieldWarnIcon} from '../../../common/icons'
import {Section} from './Section'

export interface BenefitSectionProps {
    editLink: string
    issueLink: string
    benefits: Array<string> | string
    warning?: string
}

export function BenefitSection(props: BenefitSectionProps) {
    let benefit: Array<string>
    if (typeof props.benefits === "string") {
        benefit = [props.benefits]
    } else {
        benefit = props.benefits
    }
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
            {benefit.map(e => {
                return <p className="DescriptionSection-Text">{e}</p>
            })}
        </Section>
    )
}
