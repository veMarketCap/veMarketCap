import React from 'react'

import {Heading} from '../../../common'

export function About() {
    return (
        <section className="About">
            <Heading level={2} id="about" title="About ve Market Cap"/>
            <p>
                ve Market Cap is an on-chain tracking website, focused on projects that adopt the voting escrow
                tokenomics (veCRV) model, created by Michael Egorov of Curve Finance. We provide relevant info for all
                projects who adopt, and are going to adopt, the ve-model.
            </p>
            <p>
                Regarding ve-model projects, there are few key metrics that people typically would like to evaluate,
                such as TVL, locked tokens / circulating tokens, protocol revenues, etc. Our goal is to put them all
                together to see the trend of ve-model adoption.
            </p>
            <p>
                As many projects have realized, this model can be beneficial in a number of different ways for
                protocols. The ve-model encourages and emphasizes long-term decision making given users typical
                long-term commitment to the protocol. Additionally, the ve-model has shown that aligned value and
                incentives are often present because participants are incentivized to hold their respective protocol
                token. Finally, supply and demand mechanisms are optimized within this model, prominently highlighted
                through vote-locked tokens relative to total supply.
            </p>
            <p>
                A majority of current DeFi protocols use an inflationary tokenomics model through liquidity mining to
                incentivize user participation. These are not sustainable in the long term if there is no demand to help
                offset the massively inflating supply. We want to bring increased attention around this to allow people
                to realize that the ve-model offers the most suitable tokenenomics available for DeFi projects to
                balance the supply and demand of the DeFi protocol governance token - regardless if the protocol is an
                AMM, yield, or lending protocol.
            </p>
            <p>
                There will be more features added in the future, and we hope you find ve Market Cap to be a valuable
                resource for you.
            </p>
        </section>
    )
}
