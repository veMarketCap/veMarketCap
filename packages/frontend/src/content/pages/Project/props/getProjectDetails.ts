// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import { L2Data } from '../../../L2Data'
import { ProjectDetailsProps } from '../view/ProjectDetails'
import { getBenefitSection } from './getBenefitSection'
import { getDescriptionSection } from './getDescriptionSection'
import {getGaugeWeightSection} from "./getGaugeWeightSection";
import { getLinkSection } from './getLinkSection'
import { getNewsSection } from './getNewsSection'
import {getRewardSection} from "./getRewardSection";
import { getRiskSection } from './getRiskSection'
import { getTechnologyOverview } from './getTechnologyOverview'
import { getVotingSection } from './getVotingSection'

export function getProjectDetails(
  project: Project,
  l2Data: L2Data
): ProjectDetailsProps {
  return {
    newsSection: getNewsSection(project),
    linkSection: getLinkSection(project, l2Data),
    descriptionSection: getDescriptionSection(project),
    riskSection: getRiskSection(project),
    benefitSection: getBenefitSection(project),
    votingSection: getVotingSection(project),
    gaugeWeightSection: getGaugeWeightSection(project),
    rewardSection: getRewardSection(project),
    ...getTechnologyOverview(project),
  }
}
