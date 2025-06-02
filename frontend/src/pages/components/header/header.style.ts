'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '1.75rem 2rem',
        gap: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTextSection: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'center'
    },
    headerLogo: {
        width: '2.5rem',
        height: '2.5rem'
    },
    headerText: {
        fontSize: '1.25rem',
        color: '#317CE8'
    },
    navSection: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white'
    }
})
