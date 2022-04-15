import l2Data from "@vemarketcap/backend";
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const topHolders: any = Object.keys(l2Data.byProject[props.header.title].topHolders).map(key => {
        return {
            address: key,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            amount: (l2Data.byProject[props.header.title].topHolders)[key]
        }
    })

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
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody className="TableView-Body">
                            {topHolders?.map((item: any, i: number) => (
                                <tr>
                                    <td>{i}</td>
                                    <td>{(item.address)}</td>
                                    <td>{parseInt(item.amount.hex)}</td>
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
