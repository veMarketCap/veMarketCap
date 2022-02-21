// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Project} from '@vemarketcap/config'
import React from 'react'

import {PercentChange} from '../../../../common'
import {
    InfoIcon,
    OptimismIcon,
    StarkWareIcon,
    WarningIcon
} from '../../../../common/icons'
import {ProjectLink} from '../ProjectLink'
import {Column, TableView} from '../TableView'
import {FinancialCell} from './FinancialCell'
import {TVLBreakdown, TVLBreakdownProps} from './TVLBreakdown'

export interface FinancialViewProps {
    items: FinancialViewEntry[]
}

export interface FinancialViewEntry {
    name: string
    slug: string
    provider?: Project['details']['provider']
    tvl: string
    tvlBreakdown: TVLBreakdownProps
    oneDayChange: string
    sevenDayChange: string
    marketShare: string
    purpose: string
    technology: {
        abbreviation: string
        name: string
    },
    status: string,
    chains: Array<string>,
    mcapTVL: string,
}

export function FinancialView({items}: FinancialViewProps) {
    const columns: Column<FinancialViewEntry>[] = [
        {
            name: 'Name',
            getValue: (project) => <ProjectLink project={project}/>,
        },
        {
            name: 'TVL',
            alignRight: true,
            getValue: (project) => project.tvl,
        },
        {
            name: '7d Change',
            alignRight: true,
            getValue: (project) => <PercentChange value={project.sevenDayChange}/>,
        },
        {
            name: 'Type',
            shortName: 'Tech',
            alignRight: true,
            getValue: (project) => {
                return (<FinancialCell>
                    {project.technology.name}
                </FinancialCell>)
            },
        },
        {
            name: `Status`,
            alignRight: true,
            getValue: (project) => project.status,
        },
        {
            name: 'Mcap / TVL',
            alignRight: true,
            getValue: (project) => parseFloat(project.mcapTVL).toFixed(4)
        }
    ]

    return (
        <div className="FinancialView active">
            <TableView items={items} columns={columns}/>
        </div>
    )
}
