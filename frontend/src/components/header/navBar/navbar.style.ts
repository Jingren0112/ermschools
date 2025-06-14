'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    menuGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-end',
        float: 'right',
        height: '2rem',
        alignSelf: 'flex-end',
        marginLeft: '2rem',
        marginRight: '2rem',
        alignItems: 'center',
        gap: '1rem'
    },
    menuButtonGroup: {
        display: 'flex',
        columnGap: '1rem'
    },
    menuButton: {
        backgroundColor: 'transparent',
        color: 'black',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            borderBottomStyle: 'solid',
        }
    },
    menuLanguageSwitchGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem'
    },
    menuActionButtonGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.75rem'
    },
    shopButton: {
        minWidth: '5rem',
        minHeight: '2rem',
        backgroundColor: '#E88D31',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '1.5rem, 1.5rem, 0.5rem, 0.5rem',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#D77B2A'
        }
    },
    donateButton: {
        minWidth: '5rem',
        minHeight: '2rem',
        backgroundColor: '#387A3D',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '1.5rem, 1.5rem, 0.5rem, 0.5rem',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2F5A2B'
        }
    }
})