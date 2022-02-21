import React from 'react'

import {ShieldWarnIcon} from '../../../common/icons'
import {Section} from './Section'

export interface GaugeWeightSectionProps {
    editLink: string
    issueLink: string
    gaugeWeights: string | Array<string>
    warning?: string
}

export function GaugeWeightSection(props: GaugeWeightSectionProps) {
    let gaugeWeights: Array<string>
    if (typeof props.gaugeWeights === "string") {
        gaugeWeights = [props.gaugeWeights]
    } else {
        gaugeWeights = props.gaugeWeights
    }
    return (
        <Section
            title="Gauge Weight"
            id="gaugeWeight"
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
            {gaugeWeights.map(e => {
                return <p className="DescriptionSection-Text">{e}</p>
            })}
        </Section>
    )
}
