import l2Data from "@vemarketcap/backend";
import {prop} from "cheerio/lib/api/attributes";
import {ethers} from 'ethers'
import React from "react";

import {
    Footer,
    Header,
    HeaderProps,
    Navbar,
    Page,
} from '../../common'
import {PageMetadata} from "../../PageMetadata";

export interface ProjectPageProps {
    metadata: PageMetadata
    header: HeaderProps
}

export function TopHolderPage(props: ProjectPageProps) {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const price = l2Data.byProject[props.header.title].tokenPrice
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const topHolders: Array<string> = Object.keys(l2Data.byProject[props.header.title].topHolders).map(key => {
        return {
            address: key,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            amount: (l2Data.byProject[props.header.title].topHolders)[key],
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            totalSupply: (l2Data.byProject[props.header.title].velocked),
            chain: l2Data.byProject[props.header.title].chains
        }
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const sortedArr = topHolders?.sort((a, b) => ethers.utils.formatEther(b?.amount?.hex) - ethers.utils.formatEther(a?.amount?.hex))

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filteredArr = sortedArr.filter(e => parseInt(ethers.utils.formatEther(e?.amount?.hex)) !== 0 && e.chain.includes('Ethereum'))
    let veName
    if (props.header.title == 'Pickle') {
        veName = 'veDill'
    } else if(props.header.title == 'Curve') {
        veName = 'veCRV'
    } else {
        veName = `ve${props.header.title}`
    }
    return (
        <>
            <Page metadata={props.metadata}>
                <Navbar/>
                <Header {...props.header} /><br/>
                {filteredArr.length ? (
                    <table className="TableView-Table-topHolders">
                        <thead className="TableView-Header">
                        <tr>
                            <th>Ranking</th>
                            <th>Address</th>
                            <th>Percentage&nbsp;&#63;</th>
                            <th>{veName}</th>
                            <th>USD Value</th>
                        </tr>
                        </thead>
                        <tbody className="TableView-Body">
                        {filteredArr?.map((item: any, i: number) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>
                                    <a
                                        href={`https://etherscan.io/address/${item.address}`}
                                        target={'_blank'}>
                                        {(item.address).slice(0, 7)}.....{item.address.slice(-7, -1)}
                                    </a>
                                </td>
                                <td>
                                    {
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        parseFloat((ethers.utils.formatEther(item.amount.hex) / (item.totalSupply)) * 100).toFixed(4)
                                    } %
                                </td>
                                <td>{convertNumber(parseFloat(ethers.utils.formatEther(item.amount.hex)).toFixed(2), 2)}</td>
                                <td>$ {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    convertNumber((ethers.utils.formatEther(item.amount.hex) * price).toFixed(2), 2)}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>) : <h2>We are currently working on non-Ethereum Projects</h2>
                }
                <Footer/>
            </Page>
        </>
    )
}
