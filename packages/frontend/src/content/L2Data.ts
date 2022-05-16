export interface L2Data {
  aggregate: ChartData
  byProject: Record<string, ProjectData>
  experimental: Record<string, ExperimentalData>
  curveMarket: any
}

export interface ProjectData {
  aggregate: ChartData
  byToken: Record<string, ChartData>
  chains: Array<string>
  mcapTvl: string
  lockedValueByTVL: string
  velocked: string
  holdersCount: string
  lockedUpPercentage: string
  vecontract: string
  veTotalSupply: string,
  revenue: string
}

export interface ChartData {
  types: ['date', string, string]
  data: [string, number, number][]
}

export interface ExperimentalData {
  usdIn7DayNoEth: number
  usdOut7DayNoEth: number
  batchCount7d?: number
  messageCount7d?: number
}
