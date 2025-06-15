'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '1.75rem 2rem',
        gap: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 900px)': {
            padding: '1.2rem 1rem',
        },
        '@media (max-width: 600px)': {
            padding: '0.7rem 0.5rem',
        },
    },
    headerTextSection: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            gap: '0.5rem',
        },
    },
    headerLogo: {
        width: '2.5rem',
        height: '2.5rem',
        '@media (max-width: 600px)': {
            width: '1.7rem',
            height: '1.7rem',
        },
    },
    headerText: {
        fontSize: '1.25rem',
        color: '#317CE8',
        '@media (max-width: 900px)': {
            fontSize: '1rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.85rem',
        },
    },
    navSection: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white'
    }
})