// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import {GaugeWeightSectionProps} from "../view/GaugeWeightSection";
import { getEditLink, getIssueLink } from './links'

export function getGaugeWeightSection(
    project: Project
): GaugeWeightSectionProps {
    return {
        issueLink: getIssueLink(`Problem: ${project.name} - Gauge Weights`),
        editLink: getEditLink(project),
        warning: project.details.warning,
        gaugeWeights: project.details.gaugeWeights,
    }
}
