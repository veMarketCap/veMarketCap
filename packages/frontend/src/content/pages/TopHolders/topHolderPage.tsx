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
    const data: Array<object> = l2Data.curveMarket;

    return (
        <>
            {
                data ? (
                    <Page metadata={props.metadata}>
                        <Navbar/>
                        <Header title={'Ranked by Daily Total Profits'} /><br/>
                        <table className="TableView-Table-marketcap">
                            <thead className="TableView-Header">
                            <tr>
                                <th>Ranking</th>
                                <th>Address</th>
                                <th>Annualized Returns</th>
                                <th>veCRV</th>
                                <th>Balance</th>
                                <th>Daily Total Profits</th>
                            </tr>
                            </thead>
                            <tbody className="TableView-Body">
                            {data?.map((item: any) => (
                                <tr>
                                    <td>{item.rank}</td>
                                    <td>{item.public_address}</td>
                                    <td>0</td>
                                    <td>{item.vecrv}</td>
                                    <td>{item.balance}</td>
                                    <td>{item.profits}</td>
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
