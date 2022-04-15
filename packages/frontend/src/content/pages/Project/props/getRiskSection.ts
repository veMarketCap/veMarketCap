// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project, ProjectRisk, ProjectRiskCategory } from '@vemarketcap/config'

import { RiskSectionProps } from '../view/RiskSection'

export function getRiskSection(project: Project): RiskSectionProps {
  const technology = project.details.technology

  const risks: (ProjectRisk & { referencedId: string })[] = []

  const categories: ProjectRiskCategory[] = [
    'Funds can be stolen if',
    'Funds can be lost if',
    'Funds can be frozen if',
    'Users can be censored if',
    'MEV can be extracted if',
  ]

  let nextStart = 1
  const riskGroups = categories
    .map((name) => {
      const start = nextStart
      const items = risks
        .filter((x) => x.category === name)
        .map((x, i, a) => ({
          text: i !== a.length - 1 ? x.text.slice(0, -1) + ',' : x.text,
          referencedId: x.referencedId,
          isCritical: !!x.isCritical,
        }))
      nextStart += items.length
      return { start, name, items }
    })
    .filter((x) => x.items.length > 0)

  return { riskGroups }
}
