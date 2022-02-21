import React from 'react'

import {ShieldWarnIcon} from '../../../common/icons'
import {Section} from './Section'

export interface DescriptionSectionProps {
    editLink: string
    issueLink: string
    description: string | Array<string>
    warning?: string
}

export function DescriptionSection(props: DescriptionSectionProps) {
    let description: Array<string>
    if (typeof props.description === "string") {
        description = [props.description]
    } else {
        description = props.description
    }
    return (
        <Section
            title="Description"
            id="description"
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
            {description.map(e => {
                return <p className="DescriptionSection-Text">{e}</p>
            })}
        </Section>
    )
}
