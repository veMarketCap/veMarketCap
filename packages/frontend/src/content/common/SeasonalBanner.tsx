import React from 'react'

import { config } from '../config'
import { OutLink } from './OutLink'

export function SeasonalBanner() {
  if (!config.showSeasonalBanner) {
    return null
  }
  return (
      <></>
    // <OutLink className="SeasonalBanner" href="#">
    //   We&apos;re organizing Layer Two Amsterdam! Check it out!
    // </OutLink>
  )
}
