import React from 'react'

import {ShieldWarnIcon} from '../../../common/icons'
import {Section} from './Section'

export interface VotingSectionProps {
    editLink: string
    issueLink: string
    voting: string
    warning?: string
}

export function VotingSection(props: VotingSectionProps) {
    return (
        <Section
            title="Voting"
            id="voting"
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
            <p className="DescriptionSection-Text">{props.voting}</p>
        </Section>
    )
}
