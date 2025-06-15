import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: "black",
        justifyContent: 'center',
        padding: '0 4% 3rem',
        gap: '10rem',
        '@media (max-width: 1024px)': {
            gap: '6rem',
        },
        '@media (max-width: 900px)': {
            gap: '4rem',
            padding: '0 2% 2rem',
        },
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            gap: '2rem',
            padding: '0 1% 2rem',
            alignItems: 'center',
        },
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: 'auto',
        '@media (max-width: 600px)': {
            alignItems: 'center',
        },
    },
    footerColumnHeader: {
        fontSize: '1rem',
        lineHeight: '140%',
        fontWeight: '600',
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
        },
    },
    footerColumnTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        '@media (max-width: 600px)': {
            alignItems: 'center',
        },
    },
    footerColumnText: {
        fontSize: '1rem',
        lineHeight: '140%',
        cursor: 'pointer',
        fontWeight: '400',
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
        },
    },
    footerButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '15rem',
        gap: '1.5rem',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            minWidth: '10rem',
        },
    },
    donateButton: {
        minHeight: '2.75rem',
        borderRadius: '0.5rem',
        backgroundColor: '#387A3D',
        color: 'white',
        cursor: 'pointer',
        fontSize: '1.1rem',
        padding: '0.75rem 2rem',
        border: 'none',
        '&:hover': {
            backgroundColor: '#2F5A2B'
        },
        '@media (max-width: 600px)': {
            fontSize: '1rem',
            padding: '0.5rem 1.2rem',
        },
    },
    socialMediaGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'center',
    },
    socialMediaIcon: {
        width: '1.5rem',
        height: '1.5rem',
        '@media (max-width: 600px)': {
            width: '1.2rem',
            height: '1.2rem',
        },
    }
})