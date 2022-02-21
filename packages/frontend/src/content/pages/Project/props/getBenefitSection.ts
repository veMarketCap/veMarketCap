// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import {BenefitSectionProps} from "../view/BenefitSection";
import { getEditLink, getIssueLink } from './links'

export function getBenefitSection(
    project: Project
): BenefitSectionProps {
    return {
        issueLink: getIssueLink(`Problem: ${project.name} - Benefits`),
        editLink: getEditLink(project),
        warning: project.details.warning,
        benefits: project.details.benefits,
    }
}
