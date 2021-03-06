import { ProjectLinks } from './ProjectLinks'
import { ProjectTechnology } from './ProjectTechnology'

export interface ProjectDetails {
  /** A warning displayed at the top of the project page */
  warning?: string
  /** status of integration */
  status: string
  /** benefits decription */
  benefits: string | Array<string>
  /** voting decription */
  voting: string
  /** Gauge Weights decription */
  gaugeWeights: string | Array<string>
  /** rewards decription */
  rewards: string | Array<string>
  /** A few sentences describing the project the project */
  description: string | Array<string>
  /** A short (<20 characters) description of the use case */
  purpose: string
  /** List of links */
  links: ProjectLinks
  /** Technology provider */
  provider?: 'StarkEx' | 'Optimism'
  /** Deep dive into project technology */
  technology: ProjectTechnology
}
