// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import {createClient} from 'urql'
import { createClient,gql } from '@urql/core';
import {projects} from '@vemarketcap/config'
import axios, {AxiosError} from "axios";
import fs from 'fs'
import 'isomorphic-unfetch';

import {calculateAggregate} from './helpers'
// import {getTvl} from "./helpers/updateProjectTvl";

let mappedData: any;
let veTokenProjects: any = []
let holdersCount: any = []
let topHolders: any = []
let velocked: any = []
let vecontract: any = []
let veTotalSupply: any = []
let lockedUpPercentage: any = []
let tokenPrice: any = []
let revenue: any = []

const coinNames: Array<string> = projects.map((e: any) => e.slug);
const datatypes: Array<string> = ["date", "usd", "eth"];
const APIURL: any = 'https://api.thegraph.com/subgraphs/name/jaqensyrio/vemarketcap'

const projectData: any = {
    "byProject": {}
}

const query = `
    query {
      weeklyRevenues {
        id
        protocol {
          token {
            name
          }
          veAsset {
            name
          }
        }
        amount
    }
}
`

const client = createClient({
    url: APIURL
})
const getQuery = async () => {
    const res = await client.query(query).toPromise()
    // console.log(res.data)
}

getQuery()

const fetchDefillamaData = async () => {
    // const a = await getTvl()
    // console.log('a', a)
    return new Promise((resolve, reject) => {
        Promise.all(coinNames.map(async (item: any, i: any) => {
            return axios.get('https://api.llama.fi/protocol/' + item)
        })).then(res => {
            res.forEach((e: any, i: number) => data(e.data, i))
            resolve(res)
        }).catch((error: AxiosError) => console.error(error))
    })
}

const fetchVetokenData = async () => {
    const res = await axios.get('https://model.vetoken.finance/v1/projects')
    const projects = res.data

    const mcapTvlArr: Array<string> = []
    const holdersCountArr: Array<string> = []
    const velockedArr: Array<string> = []
    const vecontractArr: Array<string> = []
    const velockedUpPercentage: any = []
    const topHoldersArr: Array<string> = []
    const totalSupply: Array<string> = []
    const tokenPriceUsd: Array<string> = []
    const revenueArr: Array<string> = []
    coinNames.forEach((coin, index) => {
        const found = projects.find((project: any) => project.name.toLowerCase() === coin.toLowerCase())
        // console.log(found?.name)
        // console.log(found?.veTotalSupply)
        // console.log(found?.circulationSupply)
        // console.log('found?.veTotalSupply / found?.circulationSupply', (found?.veTotalSupply / (found?.circulationSupply) * 100) || 0)

        mcapTvlArr.push(found?.mcapTvl || 0)
        holdersCountArr.push(found?.holdersCount || 0)
        velockedArr.push(found?.velocked || 0)
        vecontractArr.push(found?.vecontract || 0)
        velockedUpPercentage.push(((found?.veTotalSupply / found?.circulationSupply) * 100) || 0)
        topHoldersArr.push(found?.topHolders || 0)
        totalSupply.push(found?.veTotalSupply || 0)
        tokenPriceUsd.push(found?.tokenPriceUsd || 0)
        revenueArr.push(found?.revenue || 0)
    })

    veTokenProjects = mcapTvlArr
    holdersCount = holdersCountArr
    velocked = velockedArr
    vecontract = vecontractArr
    lockedUpPercentage = velockedUpPercentage
    topHolders = topHoldersArr
    veTotalSupply = totalSupply
    tokenPrice = tokenPriceUsd
    revenue = revenueArr
}

// const fetchCurveMarketData = async () => {
//     const res = await axios.get('https://curvemarketcap.com/leaderboard.json');
//     projectData.curveMarket = res.data.data
// }

const data = (coinData: any, index: number) => {
    mappedData = coinData?.tvl?.map((e: any) => {
        return [
            new Date(e.date * 1000),
            e.totalLiquidityUSD,
            0
        ]
    })
    // console.log('mappedData', coinData)
    projectData.byProject[coinData.name] = {
        aggregate: {
            data: mappedData,
            types: datatypes
        },
        chains: coinData.chains,
        mcapTvl: veTokenProjects[index],
        velocked: velocked[index],
        holdersCount: holdersCount[index],
        lockedUpPercentage: lockedUpPercentage[index],
        vecontract: vecontract[index],
        topHolders: topHolders[index],
        veTotalSupply: veTotalSupply[index],
        tokenPrice: tokenPrice[index],
        revenue: revenue[index]
    }
}

(async () => {
    await fetchVetokenData()
    await fetchDefillamaData()
    // await fetchCurveMarketData()

    const aggregate = calculateAggregate(projectData)
    const data = Object.assign({}, projectData, {aggregate})

    await saveData(data)
})()

async function saveData(data: any) {
    if (!fs.existsSync('./build')) {
        await fs.promises.mkdir('./build')
    }
    await fs.promises.writeFile(
        './build/data.json',
        JSON.stringify(data),
        'utf-8'
    )
}
