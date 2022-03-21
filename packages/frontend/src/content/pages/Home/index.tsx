// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Project } from '@vemarketcap/config'
import React from 'react'

import { L2Data } from '../../L2Data'
import { getProps } from './props'
import { HomePage } from './view/HomePage'

export function getHomePage(projects: Project[], l2Data: L2Data) {
  return {
    slug: '/',
    page: <HomePage {...getProps(projects, l2Data)} />,
  }
}
