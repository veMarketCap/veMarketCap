import { divOrZero } from '@vemarketcap/common'
import { BigNumber } from 'ethers'

import { TEN_TO_18 } from '../../../constants'
import { asNumber } from '../../common/asNumber'
import { FetchedPrices } from '../../prices/model'
import { ProjectStats } from './getProjectStats'

export function getAggregateTVL(
  projectStats: ProjectStats[],
  prices: FetchedPrices
) {
  const totalUsdBalance = projectStats
    .map((x) => x.usdBalance)
    .reduce((a, b) => a.add(b), BigNumber.from(0))
  const totalEthBalance = divOrZero(totalUsdBalance.mul(TEN_TO_18), prices.eth)
  const TVL = {
    usd: asNumber(totalUsdBalance, 18, 2),
    eth: asNumber(totalEthBalance, 18, 6),
  }
  return TVL
}
