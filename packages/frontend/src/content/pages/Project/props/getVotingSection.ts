// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import {VotingSectionProps} from "../view/VotingSection";
import { getEditLink, getIssueLink } from './links'

export function getVotingSection(
    project: Project
): VotingSectionProps {
    return {
        issueLink: getIssueLink(`Problem: ${project.name} - Voting`),
        editLink: getEditLink(project),
        warning: project.details.warning,
        voting: project.details.voting,
    }
}
