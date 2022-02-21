// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

export function getEditLink(project: Project) {
  return `https://github.com/veMarketCap/veMarketCap/edit/master/packages/config/src/projects/${project.slug}.ts`
}

export function getIssueLink(title: string) {
  return `https://github.com/veMarketCap/veMarketCap/issues/new?title=${title}&labels=website`
}
