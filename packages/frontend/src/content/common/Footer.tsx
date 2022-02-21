import React from 'react'

import {config} from '../config'
import {OutLink} from './OutLink'

export function Footer() {
    return (
        <footer className="Footer">
            <p className="Footer-Text">
                veMarketCap is made by a volunteer effort. TVL is provided by the lovely defi lama. If you find errors
                on the website, please join the discord to report.
            </p>
            <ul className="Footer-Links">
                <li className="Footer-Link">
                    <OutLink href={config.twitterLink}>Twitter</OutLink>
                </li>
                <li className="Footer-Link">
                    <OutLink href={config.veModelProject}>List a ve-model project</OutLink>
                </li>
                <li className="Footer-Link">
                    <OutLink href={config.discordLink}>Discord</OutLink>
                </li>
                <li className="Footer-Link">
                    <OutLink href={config.githubLink}>Github</OutLink>
                </li>
            </ul>
        </footer>
    )
}
