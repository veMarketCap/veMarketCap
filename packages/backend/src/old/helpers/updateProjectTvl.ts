// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {projects} from '@vemarketcap/config'
import axios, {AxiosError} from "axios";

const llamaApi = 'https://api.llama.fi'
const coinNames: Array<string> = projects.map((e: any) => e.slug)
let mappedData: any
export const getTvl = async () => {
    return new Promise((resolve, reject) => {
        Promise.all(coinNames.map(async (item: any, i: any) => {
            return axios.get(llamaApi + '/protocol/' + item)
        })).then(res => {
            res.forEach((e: any, i: number) => getData(e.data, i))
            resolve(res)
        }).catch((error: AxiosError) => console.error(error))
    })
}

const getData = (data: any, i: number) => {
    return mappedData = data.tvl.map((e: any, i: number) => {
        return [
            new Date(e.date*1000),
            e.totalLiquidityUSD
        ]
    })
    // console.log('mappedData', data.name, mappedData)
}
