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
        backgroundImage: `url(${bg.src})`
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
        fontSize: '4rem'
    },
    bodySection1BodyContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10rem'
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
        padding: '1rem'
    },
    bodySection2: {
        background: '#2176D2',
        padding: '48px 0 40px 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '180px',
    },
    statIcon: {
        width: '64px',
        height: '64px',
        marginBottom: '18px',
    },
    statNumber: {
        fontSize: '2rem',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '6px',
        lineHeight: 1.1,
    },
    statLabel: {
        fontSize: '1.1rem',
        color: '#fff',
        fontWeight: 400,
        marginTop: '0px',
        letterSpacing: '0.5px',
    },
    learnMoreButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0',
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
        paddingBottom: '5%'
    },
    bodySection3Paragraph1: {
        padding: '0 20%',
        fontSize: '1.5rem',
        lineHeight: '150%',
        letterSpacing: '-3%'
    },
    bodySection3Paragraph2: {
        fontSize: '3rem',
        lineHeight: '150%',
        letterSpacing: '-3%',
        fontWeight: 'bold'
    },
    bodySection4: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10%',
        gap: '3rem'
    },
    bodySection4HeaderContainer: {
        padding: '0 20%'
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
        alignContent: 'top'
    },
    bodySection4BodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '3rem',
        justifyContent: 'center'
    }

})
