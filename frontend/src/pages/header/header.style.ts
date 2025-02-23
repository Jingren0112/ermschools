'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'column',
    },
    headerTextSection: {
        background: '#008bbf',
        color: 'white',
        padding: '10px 30px'
    },
    navSection: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white'
    }
})
