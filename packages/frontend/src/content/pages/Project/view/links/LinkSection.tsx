// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ProjectLinks } from '@vemarketcap/config'
import React from 'react'

import { ExperimentalStats, ExperimentalStatsProps } from './ExperimentalStats'
import { LinkSectionLinks } from './LinkSectionLinks'

export interface LinkSectionProps {
  icon: string
  name: string
  links: ProjectLinks
  // experimentalStats7d: ExperimentalStatsProps
}

export function LinkSection(props: LinkSectionProps) {
  return (
    <section className="LinkSection">
      <img
        className="LinkSection-Logo"
        src={props.icon}
        alt={`${props.name} logo`}
      />
      <h2 id="links" className="LinkSection-Name">
        {props.name}
      </h2>
      <table className="LinkSection-Table">
        <tbody>
          <LinkSectionLinks name="Website" links={props.links.websites} />
          <LinkSectionLinks
            name="Social media"
            links={props.links.socialMedia}
            social
          />
          {/*<LinkSectionLinks name="App" links={props.links.apps} />*/}
          <LinkSectionLinks
            name="Documentation"
            links={props.links.documentation}
          />
          <LinkSectionLinks name="Governance" links={props.links.governance} />
          <LinkSectionLinks
            name="Source code"
            links={props.links.repositories}
          />
        </tbody>
      </table>
      {/*<ExperimentalStats {...props.experimentalStats7d} />*/}
    </section>
  )
}
