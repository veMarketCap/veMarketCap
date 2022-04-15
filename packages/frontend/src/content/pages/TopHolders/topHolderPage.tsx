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
    console.log('props.metadata', props.metadata)
    console.log('props.header', props.header)
    // console.log('l2Data.byProject[props.header.title].topHolders', l2Data.byProject[props.header.title].topHolders)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data: any = l2Data.byProject[props.header.title].topHolders;
    // console.log('Object.keys(data).map(e => [Number(e), data[e]])', Object.entries(data))
    // console.log('data', data)
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
                            {/*{data?.map((item: any, i: number) => (*/}
                            {/*    <tr>*/}
                            {/*        <td>{i}</td>*/}
                            {/*        <td>{item.address}</td>*/}
                            {/*    </tr>*/}
                            {/*))}*/}
                            </tbody>
                        </table>
                        <Footer/>
                    </Page>) : null
            }
        </>
    )

}
