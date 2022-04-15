// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'

import { L2Data } from '../../../L2Data'
import { AddressSectionProps } from '../view/links/addressSection'

export function getAddressSection(
  project: Project,
  // l2Data: L2Data
): AddressSectionProps {
  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    addresses: project.details.technology.contracts.addresses,
    name: project.name,
  }
}
