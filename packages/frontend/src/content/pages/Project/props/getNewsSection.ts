// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import { formatDate } from '../../../../shared'
import { NewsSectionProps } from '../view/NewsSection'

export function getNewsSection(project: Project): NewsSectionProps {
  const news = project.details.news.map((x:any) => ({
    title: x.name,
    href: x.link,
    date: formatDate(x.date),
    domain: new URL(x.link).host,
  }))
  return { news }
}
