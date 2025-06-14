'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'white',
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
    },
    heroTitle: {
        backgroundColor: '#E88D31',
        color: 'white',
        fontWeight: 700,
        fontSize: '2.2rem',
        padding: '1rem 3rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        marginBottom: '2rem',
    },
    loginCard: {
        background: '#fff',
        border: '1px solid #E0E0E0',
        borderRadius: '0.5rem',
        padding: '2.5rem 2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        minWidth: '320px',
        maxWidth: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    label: {
        fontWeight: 500,
        fontSize: '1rem',
        color: '#222',
    },
    input: {
        padding: '0.7rem 1rem',
        border: '1px solid #E0E0E0',
        borderRadius: '0.4rem',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border 0.2s',
        ':focus': {
            border: '1.5px solid #E88D31',
        },
    },
    button: {
        backgroundColor: '#E88D31',
        color: 'white',
        fontWeight: 600,
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: '0.4rem',
        padding: '0.9rem 0',
        cursor: 'pointer',
        marginTop: '0.5rem',
        transition: 'background 0.2s',
        ':hover': {
            backgroundColor: '#d07b28',
        },
    },
    linkRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem',
    },
    link: {
        color: '#E88D31',
        fontSize: '0.98rem',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline',
        },
    },
})