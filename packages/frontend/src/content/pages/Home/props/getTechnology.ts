// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

export function getTechnology(project: Project) {
  const name = project.details.technology.category.name
  switch (name) {
    case 'AMM':
      return { abbreviation: 'AMM', name }
    case 'Derivatives':
      return { abbreviation: 'DRV', name }
    case 'Interest Rate':
      return { abbreviation: 'IR', name }
    case 'Lending':
      return { abbreviation: 'LNG', name }
    case 'Stable Coin':
      return { abbreviation: 'STC', name }
    case 'Yield':
      return { abbreviation: 'YLD', name }
    case 'CDP':
      return { abbreviation: 'CDP', name }
    case 'Options':
      return { abbreviation: 'OPT', name }
    case 'Algo-Stables':
      return { abbreviation: 'AS', name }
    case 'Cross Chain':
      return { abbreviation: 'Cross Chain', name }
  }
}
