
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
        '@media (max-width: 480px)': {
            padding: '0 1% 3rem',
            gap: '4rem'
        },
        '@media (max-width: 768px) and (min-width: 480px)': {
            padding: '0 2% 3rem',
            gap: '4rem'
        },
        '@media (max-width: 1280px) and (min-width: 768px)': {
            gap: '4rem'
        },
        '@media (max-width: 1440px) and (min-width: 1280px)': {
            gap: '6rem'
        },
        '@media (max-width: 1680px) and (min-width: 1440px)': {
            gap: '8rem'
        },
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: 'auto'
    },
    footerColumnHeader: {
        fontSize: '1rem',
        lineHeight: '140%',
        fontWeight: '600'
    },
    footerColumnTextContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    footerColumnText: {
        fontSize: '1rem',
        lineHeight: '140%',
        cursor: 'pointer',
        fontWeight: '400'
    },
    footerButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '15rem',
        gap: '1.5rem'
    },
    donateButton: {
        minHeight: '2.75rem',
        borderRadius: '0.5rem',
        backgroundColor: '#387A3D',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2F5A2B'
        }
    },
    socialMediaGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
    },
    socialMediaIcon: {
        width: '1.5rem',
        height: '1.5rem'
    }
})