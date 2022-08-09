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
    veLocked: string
    technology: {
        abbreviation: string
        name: string
    },
    status: string,
    chains: Array<string>,
    mcapTVL: string,
}

export function FinancialView({items}: FinancialViewProps) {
    const convertNumber = (number: any, decPlaces: any) => {
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10, decPlaces);

        // Enumerate number abbreviations
        const abbrev = ["k", "m", "b", "t"];

        // Go through the array backwards, so we do the largest first
        for (let i = abbrev.length - 1; i >= 0; i--) {

            // Convert array index to "1000", "1000000", etc
            const size = Math.pow(10, (i + 1) * 3);

            // If the number is bigger or equal do the abbreviation
            if (size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round(number * decPlaces / size) / decPlaces;

                // Handle special case where we round up to the next abbreviation
                if ((number == 1000) && (i < abbrev.length - 1)) {
                    number = 1;
                    i++;
                }

                // Add the letter for the abbreviation
                number += abbrev[i];

                // We are done... stop
                break;
            }
        }

        return number;
    }

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
            name: 'veLocked',
            alignRight: true,
            getValue: (project) => convertNumber(project.veLocked, 2),
        },
        // {
        //     name: 'Type',
        //     shortName: 'Tech',
        //     alignRight: true,
        //     getValue: (project) => project.technology.name,
        // },
        {
            name: `Status`,
            alignRight: true,
            getValue: (project) => project.status,
        },
        {
            name: 'Mcap / TVL',
            alignRight: true,
            getValue: (project) => {
                if (parseFloat(project.mcapTVL) !== 0) {
                    return parseFloat(project.mcapTVL).toFixed(4)
                }
                return '?'
            }
        }
    ]

    return (
        <div className="FinancialView active">
            <TableView items={items} columns={columns}/>
        </div>
    )
}
