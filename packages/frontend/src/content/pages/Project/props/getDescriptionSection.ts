// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import { DescriptionSectionProps } from '../view/DescriptionSection'
import { getEditLink, getIssueLink } from './links'

export function getDescriptionSection(
  project: Project
): DescriptionSectionProps {
  return {
    issueLink: getIssueLink(`Problem: ${project.name} - Description`),
    editLink: getEditLink(project),
    warning: project.details.warning,
    description: project.details.description,
  }
}
