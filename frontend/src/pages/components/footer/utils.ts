'use strict'
import str from './string.json'

export interface footerContent {
    header: string,
    body1: string,
    body2: string,
    body3: string,
    body4: string
}

export const footerContent: footerContent[] = [
    {
        header: str.footer1Header['en-us'],
        body1: str.footer1Body1['en-us'],
        body2: str.footer1Body2['en-us'],
        body3: str.footer1Body3['en-us'],
        body4: str.footer1Body4['en-us']
    },
    {
        header: str.footer2Header['en-us'],
        body1: str.footer2Body1['en-us'],
        body2: str.footer2Body2['en-us'],
        body3: str.footer2Body3['en-us'],
        body4: str.footer2Body4['en-us']
    },
    {
        header: str.footer3Header['en-us'],
        body1: str.footer3Body1['en-us'],
        body2: str.footer3Body2['en-us'],
        body3: str.footer3Body3['en-us'],
        body4: str.footer3Body4['en-us']
    }
]