import React from 'react'

import {OptimismIcon, StarkWareIcon} from '../../../../common/icons'
import {FinancialViewEntry} from "../FinancialView/FinancialView";
import {ProjectLink} from '../ProjectLink'
import {Column, TableView} from '../TableView'
import {RiskCell} from './RiskCell'

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

export function RiskView({items}: RiskViewProps) {
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

    const columns: Column<RiskViewEntry>[] = [
        {
            name: 'Name',
            getValue: (project) => <ProjectLink project={project}/>,
        },
        {
            name: 'Locked Value/TVL',
            alignRight: true,
            getValue: (project) => project.lockedValueByTVL,
        },
        {
            name: 'veLockedUsd',
            alignRight: true,
            getValue: (project) => convertNumber(project.velockedUsd, 2),
        },
        {
            name: 'Holders Count',
            alignRight: true,
            getValue: (project) => convertNumber(project.holdersCount, 10),
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
            <TableView items={items} columns={columns}/>
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
