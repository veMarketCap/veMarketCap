import React from 'react'

import { OptimismIcon, StarkWareIcon } from '../../../../common/icons'
import {FinancialViewEntry} from "../FinancialView/FinancialView";
import { ProjectLink } from '../ProjectLink'
import { Column, TableView } from '../TableView'
import { RiskCell } from './RiskCell'

export interface RiskViewProps {
  items: RiskViewEntry[]
}

export interface RiskViewEntry {
  name: string
  slug: string
  lockedValueByTVL: string
  velockedUsd: string
  holdersCount: string
  lockedVetokenBytotalCirculationToken: string
  vecontract: string
}

export function RiskView({ items }: RiskViewProps) {
  const columns: Column<RiskViewEntry>[] = [
    {
      name: 'Name',
      getValue: (project) => <ProjectLink project={project} />,
    },
    {
      name: 'Locked Value/TVL',
      alignRight: true,
      getValue: (project) => project.lockedValueByTVL,
    },
    {
      name: 'veLockedUsd',
      alignRight: true,
      getValue: (project) => parseFloat(project.velockedUsd).toFixed(2),
    },
    {
      name: 'Holders Count',
      alignRight: true,
      getValue: (project) => project.holdersCount,
    },
    {
      name: 'Vetoken/Total Amount',
      alignRight: true,
      getValue: (project) => project.lockedVetokenBytotalCirculationToken,
    },
    {
      name: 'veContract',
      alignRight: true,
      getValue: (project) => project.vecontract,
    },
  ]

  return (
    <div className="RiskView">
      <TableView items={items} columns={columns} />
      {/*<div className="RiskView-Symbols">*/}
      {/*  <p>*/}
      {/*    <StarkWareIcon /> &ndash; This project is built using StarkEx.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    <OptimismIcon /> &ndash; This project is based on Optimism&apos;s code*/}
      {/*    base.*/}
      {/*  </p>*/}
      {/*</div>*/}
    </div>
  )
}
