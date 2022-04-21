import l2Data from "@vemarketcap/backend";
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
import {prop} from "cheerio/lib/api/attributes";

export interface ProjectPageProps {
    metadata: PageMetadata
    header: HeaderProps
}

export function TopHolderPage(props: ProjectPageProps) {
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
            totalSupply: (l2Data.byProject[props.header.title].velocked)
        }
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const sortedArr = topHolders.sort((a, b) => ethers.utils.formatEther(b.amount.hex) - ethers.utils.formatEther(a.amount.hex))

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filteredArr = sortedArr.filter(e => parseInt(ethers.utils.formatEther(e.amount.hex)) !== 0)

    return (
        <>
            {
                topHolders ? (
                    <Page metadata={props.metadata}>
                        <Navbar/>
                        <Header {...props.header} /><br/>
                        <table className="TableView-Table-marketcap">
                            <thead className="TableView-Header">
                            <tr>
                                <th>Ranking</th>
                                <th>Address</th>
                                <th>Percentage</th>
                                <th>ve{props.header.title}</th>
                                <th>Balance</th>
                            </tr>
                            </thead>
                            <tbody className="TableView-Body">
                            {filteredArr?.map((item: any, i: number) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{(item.address)}</td>
                                    <td>
                                        {
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            // @ts-ignore
                                            parseFloat((ethers.utils.formatEther(item.amount.hex) / (item.totalSupply)) * 100).toFixed(4)
                                        } %
                                    </td>
                                    <td>{parseFloat(ethers.utils.formatEther(item.amount.hex)).toFixed(2)}</td>
                                    <td>$ {// eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        (ethers.utils.formatEther(item.amount.hex) * price).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <Footer/>
                    </Page>) : null
            }
        </>
    )

}
