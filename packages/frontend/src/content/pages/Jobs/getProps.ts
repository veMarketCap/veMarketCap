import { PageMetadata } from '../../PageMetadata'

export interface JobsPageProps {
  title: string
  metadata: PageMetadata
}

export function getProps(): JobsPageProps {
  return {
    title: 'Open positions',
    metadata: {
      title: 'Jobs – veMarket Cap',
      description: '',
      image: 'https://vemarketcap.com//meta-images/jobs.png',
      url: 'https://vemarketcap.com/jobs/',
    },
  }
}
