'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    menuGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '1rem',
        position: 'relative',
        '@media (max-width: 600px)': {
            flexDirection: 'row',
            gap: '0.3rem',
        },
    },
    menuButtonGroup: {
        display: 'flex',
        columnGap: '1rem',
        '@media (max-width: 600px)': {
            display: 'none', // Hide on mobile, show in mobile menu
        },
    },
    menuButton: {
        backgroundColor: 'transparent',
        color: 'black',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        padding: '0.3rem 0.7rem',
        '&:hover': {
            borderBottomStyle: 'solid',
            borderBottomWidth: '2px',
            borderBottomColor: '#E88D31',
            color: '#E88D31',
            background: '#f5f5f5',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
            padding: '0.2rem 0.4rem',
        },
    },
    menuLanguageSwitchGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            gap: '0.3rem',
        },
    },
    menuActionButtonGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.75rem',
        '@media (max-width: 600px)': {
            display: 'none', // Hide on mobile, show in mobile menu
        },
    },
    hamburger: {
        display: 'none',
        background: 'none',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
        color: 'black', // Make hamburger icon visible
        '@media (max-width: 600px)': {
            display: 'block',
        },
    },
    mobileMenu: {
        display: 'none',
        '@media (max-width: 600px)': {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '2.5rem',
            right: 0,
            background: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            borderRadius: '0.5rem',
            zIndex: 100,
            minWidth: '160px',
            padding: '1rem',
            gap: '1rem',
        },
    },
    mobileMenuOpen: {
        display: 'flex',
    },
    mobileMenuButton: {
        background: 'none',
        border: 'none',
        color: 'black',
        fontSize: '1rem',
        padding: '0.5rem 0',
        textAlign: 'left',
        cursor: 'pointer',
        '&:hover': {
            color: '#E88D31',
        },
    },
    mobileMenuActionButton: {
        backgroundColor: '#E88D31',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '0.5rem 1.5rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '0.5rem',
        '&:hover': {
            backgroundColor: '#D77B2A'
        },
    },
    mobileMenuDonateButton: {
        backgroundColor: '#387A3D',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '0.5rem 1.5rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '0.5rem',
        '&:hover': {
            backgroundColor: '#2F5A2B'
        },
    },
    shopButton: {
        minWidth: '5rem',
        minHeight: '2rem',
        backgroundColor: '#E88D31',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '0.5rem 1.5rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: '#D77B2A'
        },
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
            padding: '0.3rem 0.8rem',
            minWidth: '3.5rem',
        },
    },
    donateButton: {
        minWidth: '5rem',
        minHeight: '2rem',
        backgroundColor: '#387A3D',
        color: 'white',
        borderRadius: '0.5rem',
        padding: '0.5rem 1.5rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: '#2F5A2B'
        },
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
            padding: '0.3rem 0.8rem',
            minWidth: '3.5rem',
        },
    }
})