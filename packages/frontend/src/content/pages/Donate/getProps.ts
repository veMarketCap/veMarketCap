import {toDataURL} from 'qrcode'

import {PageMetadata} from '../../PageMetadata'

export interface DonatePageProps {
    title: string
    metadata: PageMetadata
    details: DonationDetailsProps
}

export interface DonationDetailsProps {
    ethereumAddress: string
    qrLightURL: string
    qrDarkURL: string
    networks: {
        name: string
        linkURL: string
    }[]
}

export async function getProps(): Promise<DonatePageProps> {
    const address = '0x7a0a5480Cd981Bb8c6B2E6F50BFEcf018F603221'
    return {
        title: 'Donate',
        metadata: {
            title: 'Donate – veMarket Cap',
            description: '',
            image: 'https://vemarketcap.com//meta-images/overview.png',
            url: 'https://vemarketcap.com/donate/',
        },
        details: {
            ethereumAddress: address,
            qrLightURL: await toDataURL(address, {
                width: 240,
                color: {
                    light: '#fafafa',
                },
                errorCorrectionLevel: 'H',
                margin: 0,
            }),
            qrDarkURL: await toDataURL(address, {
                width: 240,
                color: {
                    light: '#1b1b1b',
                    dark: '#ffffff',
                },
                errorCorrectionLevel: 'H',
                margin: 0,
            }),
            networks: [
                {
                    name: 'Ethereum mainnet',
                    linkURL: `https://etherscan.io/address/${address}`,
                },
                {
                    name: 'Arbitrum',
                    linkURL: `https://arbiscan.io/address/${address}`,
                }
            ],
        },
    }
}
