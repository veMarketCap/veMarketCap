import {Project} from "@vemarketcap/config";
import React from "react";

import { L2Data } from '../../L2Data'
import {PageMetadata} from "../../PageMetadata";
import { getProps } from '../Project/props/'
import {TopHolderPage} from "./topHolderPage";
export interface ProjectPageProps {
    metadata: PageMetadata
}

export function TopHolders(projects: Project[], l2Data: L2Data) {
    return projects.map((project) => ({
        slug: `/top-holders/${project.slug}`,
        page: <TopHolderPage  {...getProps(project, l2Data)} />,
    }))
}
