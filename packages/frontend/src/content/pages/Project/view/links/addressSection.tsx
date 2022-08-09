// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {ProjectLinks} from '@vemarketcap/config'
import React from 'react'

import {ExperimentalStats, ExperimentalStatsProps} from './ExperimentalStats'
import {LinkSectionLink} from "./LinkSectionLink";
import {LinkSectionLinks} from './LinkSectionLinks'

export interface AddressSectionProps {
    name: string
    slug: string
    addresses: Array<string>
}

export function AddressSection(props: AddressSectionProps) {
    return (
        <section className="AddressSection">
            <h2 id="links" className="NewsSection">
                Contract Addresses
            </h2>
            <table className="LinkSection-Table">
                <tbody>
                {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    props.addresses.map(({address, name}) => {
                        return (
                            <tr>
                                <th>
                                    {name}&nbsp;&nbsp;&nbsp;
                                </th>
                                <td>
                                    {address ? <a href={`https://etherscan.io/address/${address}`}
                                                  target={'_blank'}>{address.slice(0, 9)}.....{address.slice(-9, -1)}</a> : ''}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/*<ExperimentalStats {...props.experimentalStats7d} />*/}
        </section>
    )
}
