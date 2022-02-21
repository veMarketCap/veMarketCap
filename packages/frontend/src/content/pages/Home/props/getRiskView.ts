import { Project } from '@vemarketcap/config'

import { RiskViewEntry, RiskViewProps } from '../view/RiskView/RiskView'

export function getRiskView(projects: Project[]): RiskViewProps {
  return { items: projects.map(getRiskViewEntry) }
}

export function getRiskViewEntry(project: Project): RiskViewEntry {
  return {
    name: project.name,
    slug: project.slug,
    provider: project.details.provider,
    ...project.details.riskView,
  }
}
