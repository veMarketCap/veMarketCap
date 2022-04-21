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
    velocked: string
    holdersCount: string
    lockedUpPercentage: string
    vecontract: string
    status: string
    veTotalSupply: string
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
            getValue: (project) => <ProjectLink project={project}/>
        },
        {
            name: 'veLocked',
            getValue: (project) => convertNumber(project.velocked, 2),
        },
        {
            name: 'Holders Count',
            getValue: (project) => {
                if (project.holdersCount == '0') {
                    return '?'
                }
                return project.holdersCount
            }
        },
        // {
        //     name: 'veContract',
        //     getValue: (project) => {
        //         let url
        //         const seperator = project.vecontract.toString().split(':')
        //         if (project.vecontract.toString().includes('solana')) {
        //             url = `https://solscan.io/account/${seperator[1]}`;
        //         } else if (project.vecontract.toString().includes('avax')) {
        //             // const seperator = project.vecontract.split(':')
        //             url = `https://snowtrace.io/address/${seperator[1]}`;
        //         } else if (project.vecontract.toString().includes('fantom')) {
        //             // const seperator = project.vecontract.split(':')
        //             url = `https://ftmscan.com/address/${seperator[1]}`;
        //         } else if (project.vecontract.toString().includes('arb')) {
        //             // const seperator = project.vecontract.split(':')
        //             url = `https://arbiscan.io/address/${seperator[1]}`;
        //         } else {
        //             url = `https://etherscan.io/address/${project.vecontract}`
        //         }
        //         if (project.vecontract.toString().includes(':')) {
        //             return <a href={url} target={"_blank"}>{(project.vecontract.toString().split(':')[1]).slice(0, 5)}...{(project.vecontract.toString().split(':')[1]).slice(-5, -1)}</a>
        //         } else if (project.vecontract == '0') {
        //             return <a href={'#'} target={"_blank"} style={{textDecoration: 'none'}}>{project.vecontract}</a>
        //         } else {
        //             return <a href={url} target={"_blank"}>{project.vecontract.toString().slice(0, 5)}...{project.vecontract.toString().slice(-5, -1)}</a>
        //         }
        //     },
        // },
    ]
    const filteredItems = items.filter(item => item.status == 'On' && item.name !== 'Saber' && item.holdersCount !== '0' && item.velocked.toString() !== '0')
    return (
        <div className="RiskView">
            <TableView items={filteredItems} columns={columns}/>
        </div>
    )
}
