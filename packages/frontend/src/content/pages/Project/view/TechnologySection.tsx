import React from 'react'

import { Heading } from '../../../common'
import { InlineReferences } from './InlineReferences'
import { RiskList, TechnologyRisk } from './RiskList'
import { Section } from './Section'

export interface TechnologySectionProps {
  id: string
  title: string
}

export interface TechnologyChoice {
  id: string
  name: string
  editLink: string
  issueLink: string
  description: string
  isIncomplete: boolean
  referenceIds: number[]
  risks: TechnologyRisk[]
}

export function TechnologySection({
  id,
  title,
  // items,
}: TechnologySectionProps) {
  return (
    <Section title={title} id={id} className="TechnologySection">
    </Section>
  )
}
