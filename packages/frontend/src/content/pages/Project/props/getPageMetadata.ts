// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import { PageMetadata } from '../../../PageMetadata'

export function getPageMetadata(project: Project): PageMetadata {
  return {
    title: `${project.name} – veMarketCap`,
    description: `${project.name} project overview on veMarketCap.`,
    image: `https://vemarketcap.com/meta-images/${project.slug}.png`,
    url: `https://vemarketcap.com/projects/${project.slug}/`,
  }
}
