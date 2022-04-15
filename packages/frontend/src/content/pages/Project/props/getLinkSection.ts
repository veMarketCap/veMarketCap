// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import { L2Data } from '../../../L2Data'
import { formatUSD } from '../../../utils'
import { LinkSectionProps } from '../view/links/LinkSection'

export function getLinkSection(
  project: Project,
  l2Data: L2Data
): LinkSectionProps {
  // const experimental = l2Data.experimental[project.name]

  const tokens = project.bridges
    .flatMap((x:any) => x.tokens)
    .filter((x:any, i:number, a:any) => a.indexOf(x) === i)

  const showNoEth = tokens.includes('ETH')
  const showInflowsOutflows = tokens.length !== 1 || tokens[0] !== 'ETH'

  return {
    links: project.details.links,
    name: project.name,
    icon: `/icons/${project.slug}.png` //,
    // experimentalStats7d: stats,
  }
}
