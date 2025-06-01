'use client'
import { makeStyles } from "@griffel/react"
import bg from "./images/bg.svg"

export const useStyle = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white'
    },
    bodySection1: {
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: '10rem',
        paddingLeft: '10rem',
        paddingRight: '10rem',
        gap: '0.5rem',
        height: '100vh'
    },
    bodySectionHeader: {
        backgroundColor: '#E88D31',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        color: 'white',
        fontSize: '4rem'
    },
    bodySectionBody: {
        borderRadius: '1rem',
        border: 'none',
        backgroundColor: '#387A3D',
        color: 'white',
        fontSize: ''
    }

})
