// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import {RewardSectionProps} from "../view/RewardSection";
import { getEditLink, getIssueLink } from './links'

export function getRewardSection(
    project: Project
): RewardSectionProps {
    return {
        issueLink: getIssueLink(`Problem: ${project.name} - Rewards`),
        editLink: getEditLink(project),
        warning: project.details.warning,
        rewards: project.details.rewards,
    }
}
