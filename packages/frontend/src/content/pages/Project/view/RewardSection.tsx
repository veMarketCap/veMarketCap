import React from 'react'

import {ShieldWarnIcon} from '../../../common/icons'
import {Section} from './Section'

export interface RewardSectionProps {
    editLink: string
    issueLink: string
    rewards: string | Array<string>
    warning?: string
}

export function RewardSection(props: RewardSectionProps) {
    let rewards: Array<string>
    if (typeof props.rewards === "string") {
        rewards = [props.rewards]
    } else {
        rewards = props.rewards
    }
    return (
        <Section
            title="Rewards"
            id="rewards"
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
            {rewards.map(e => {
                return <p className="DescriptionSection-Text">{e}</p>
            })}
        </Section>
    )
}
