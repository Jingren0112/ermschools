'use client'
import { makeStyles } from "@griffel/react"
import bg from './images/bg.svg'

export const useStyle = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white'
    },
    body: {
        paddingBottom: '5rem',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    bodySection1: {
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '10rem',
        height: '100vh',
        backgroundImage: `url(${bg.src})`,
        '@media (max-width: 900px)': {
            padding: '4rem 1rem',
            height: 'auto',
        },
        '@media (max-width: 600px)': {
            padding: '2rem 0.5rem',
            height: 'auto',
        },
    },
    bodySection1HeaderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodySection1Header: {
        backgroundColor: '#E88D31',
        padding: '1rem 2rem',
        color: 'white',
        fontSize: '4rem',
        '@media (max-width: 900px)': {
            fontSize: '2.5rem',
            padding: '0.75rem 1.5rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1.5rem',
            padding: '0.5rem 1rem',
        },
    },
    bodySection1BodyContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10rem',
        '@media (max-width: 900px)': {
            padding: '2rem 0.5rem',
        },
        '@media (max-width: 600px)': {
            padding: '1rem 0.25rem',
        },
    },
    bodySection1Body: {
        borderRadius: '1rem',
        border: 'none',
        backgroundColor: '#387A3D',
        color: 'white',
        fontSize: '2rem',
        fontWeight: '2rem',
        lineHeight: '120%',
        letterSpacing: '0%',
        padding: '1rem',
        '@media (max-width: 900px)': {
            fontSize: '1.2rem',
            padding: '0.75rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1rem',
            padding: '0.5rem',
        },
    },
    bodySection2: {
        background: '#2176D2',
        padding: '48px 0 40px 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 900px)': {
            padding: '32px 0 24px 0',
        },
        '@media (max-width: 600px)': {
            padding: '20px 0 16px 0',
        },
    },
    bodySection2Body: {
        height: 'auto',
        objectFit: 'cover',
        minHeight: '100%',
        maxHeight: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        width: 'auto'
    },
    bodySection2Stats: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '80px',
        width: '100%',
        maxWidth: '900px',
        '@media (max-width: 900px)': {
            gap: '32px',
            maxWidth: '100%',
        },
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
        },
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '180px',
        '@media (max-width: 900px)': {
            minWidth: '120px',
        },
        '@media (max-width: 600px)': {
            minWidth: '0',
            width: '100%',
        },
    },
    statIcon: {
        width: '64px',
        height: '64px',
        marginBottom: '18px',
        '@media (max-width: 900px)': {
            width: '48px',
            height: '48px',
        },
        '@media (max-width: 600px)': {
            width: '36px',
            height: '36px',
        },
    },
    statNumber: {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '6px',
        lineHeight: 1.1,
        '@media (max-width: 900px)': {
            fontSize: '1.3rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1.1rem',
        },
    },
    statLabel: {
        fontSize: '1.1rem',
        color: '#fff',
        fontWeight: 400,
        marginTop: '0px',
        letterSpacing: '0.5px',
        '@media (max-width: 900px)': {
            fontSize: '1rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
        },
    },
    learnMoreButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0',
        '@media (max-width: 600px)': {
            margin: '1rem 0',
        },
    },
    learnMoreButton: {
        backgroundColor: '#E88D31',
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '1rem 4rem',
        cursor: 'pointer',
        letterSpacing: '0.1em',
        '@media (max-width: 900px)': {
            fontSize: '1.5rem',
            padding: '0.75rem 2rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1rem',
            padding: '0.5rem 1rem',
        },
    },
    bodySection3: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        color: 'black',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%',
        textAlign: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
        '@media (max-width: 900px)': {
            paddingLeft: '3%',
            paddingRight: '3%',
            paddingTop: '3%',
            paddingBottom: '3%',
        },
        '@media (max-width: 600px)': {
            paddingLeft: '1%',
            paddingRight: '1%',
            paddingTop: '2%',
            paddingBottom: '2%',
        },
    },
    bodySection3Paragraph1: {
        padding: '0 20%',
        fontSize: '1.5rem',
        lineHeight: '150%',
        letterSpacing: '-3%',
        '@media (max-width: 900px)': {
            padding: '0 5%',
            fontSize: '1.1rem',
        },
        '@media (max-width: 600px)': {
            padding: '0 2%',
            fontSize: '1rem',
        },
    },
    bodySection3Paragraph2: {
        fontSize: '3rem',
        lineHeight: '150%',
        letterSpacing: '-3%',
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
            fontSize: '2rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1.2rem',
        },
    },
    bodySection4: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10%',
        gap: '3rem',
        '@media (max-width: 900px)': {
            padding: '0 2%',
            gap: '1.5rem',
        },
        '@media (max-width: 600px)': {
            padding: '0 1%',
            gap: '1rem',
        },
    },
    bodySection4HeaderContainer: {
        padding: '0 20%',
        '@media (max-width: 900px)': {
            padding: '0 5%',
        },
        '@media (max-width: 600px)': {
            padding: '0 2%',
        },
    },
    bodySection4Header: {
        padding: '1rem 0',
        backgroundColor: '#E88D31',
        color: 'white',
        fontSize: '3rem',
        fontWeight: '700',
        lineHeight: '120%',
        letterSpacing: '-3%',
        textAlign: 'center',
        alignContent: 'top',
        '@media (max-width: 900px)': {
            fontSize: '2rem',
            padding: '0.75rem 0',
        },
        '@media (max-width: 600px)': {
            fontSize: '1.2rem',
            padding: '0.5rem 0',
        },
    },
    bodySection4BodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '3rem',
        justifyContent: 'center',
        '@media (max-width: 900px)': {
            gap: '1.5rem',
        },
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
        },
    }
})
