import { ProjectContracts } from './ProjectContracts'

export interface ProjectTechnology {
  category: {
    /** Name of the category the project belongs to */
    name: ProjectCategory
    /** Additional details about the technology */
    details?: string
  }
  /** List of smart contracts used in the project */
  contracts: ProjectContracts
}

export type ProjectCategory =
  | 'AMM'
  | 'Stable Coin'
  | 'Yield'
  | 'Lending'
  | 'Interest Rate'
  | 'Derivatives'
  | 'Options'
