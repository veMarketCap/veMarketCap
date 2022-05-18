import React from 'react'

import {
    Chart,
    ChartProps,
    Footer,
    Header,
    HeaderProps,
    Navbar,
    Page,
} from '../../../common'
import {PageMetadata} from '../../../PageMetadata'
import {ProjectDetails, ProjectDetailsProps} from './ProjectDetails'

export interface ProjectPageProps {
    metadata: PageMetadata
    header: HeaderProps
    chart: ChartProps
    projectDetails: ProjectDetailsProps
}

export function ProjectPage(props: ProjectPageProps) {
    const link = `/top-holders/${props.projectDetails.addressSection.slug}/`

    return (
        <Page metadata={props.metadata} preloadApi={props.chart.endpoint}>
            <Navbar/>
            <Header {...props.header} />&nbsp;
            <div>
                <a href={link}>
                    <button>Top Holder page</button>
                </a>
            </div>
            <Chart {...props.chart} />
            <ProjectDetails {...props.projectDetails} />
            <Footer/>
        </Page>
    )
}
