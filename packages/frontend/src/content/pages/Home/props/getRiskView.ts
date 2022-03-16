import l2Data from "@vemarketcap/backend";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import { ChartData, L2Data, ProjectData } from '../../../L2Data'
import { RiskViewEntry, RiskViewProps } from '../view/RiskView/RiskView'

export function getRiskView(
    projects: Project[],
    l2Data: L2Data,
): RiskViewProps {
  return {
    items: projects.map((x) =>
        getRiskViewEntry(x, l2Data.byProject[x.name])
    ),
  }
}

export function getRiskViewEntry(
    project: Project,
    projectData: ProjectData,
): RiskViewEntry {
  return {
    name: project.name,
    slug: project.slug,
    lockedValueByTVL: projectData.lockedValueByTVL,
    velockedUsd: projectData.velockedUsd,
    holdersCount: projectData.holdersCount,
    lockedUpPercentage: projectData.lockedUpPercentage,
    vecontract: projectData.vecontract
  }
}
