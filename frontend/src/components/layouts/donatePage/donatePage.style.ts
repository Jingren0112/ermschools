import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        minHeight: '100vh',
    },
    rootContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '4rem',
        gap: '8rem',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        "@media (max-width: 1024px)": {
            gap: '4rem',
            padding: '2rem',
        },
        "@media (max-width: 768px)": {
            flexDirection: 'column',
            gap: '2rem',
            padding: '1rem',
        }
    },
    leftSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        width: '400px',
        "@media (max-width: 1024px)": {
            width: '320px',
        },
        "@media (max-width: 768px)": {
            width: '100%',
            alignItems: 'center',
        }
    },
    image: {
        width: '100%',
        height: 'auto',
        maxWidth: '400px',
        "@media (max-width: 1024px)": {
            maxWidth: '320px',
        },
        "@media (max-width: 768px)": {
            maxWidth: '100%',
        }
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        width: '100%',
        "@media (max-width: 768px)": {
            alignItems: 'center',
            textAlign: 'center',
        }
    },
    textHeader: {
        color: 'black',
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: '140%',
        letterSpacing: '0%',
        marginBottom: '0.5rem',
    },
    descriptions: {
        fontSize: '1rem',
        color: 'black',
        lineHeight: '140%',
        letterSpacing: '0%',
        marginBottom: '0.25rem',
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        minWidth: '320px',
        "@media (max-width: 1024px)": {
            minWidth: '260px',
            paddingTop: '2rem',
            paddingBottom: '2rem',
        },
        "@media (max-width: 768px)": {
            width: '100%',
            minWidth: '0',
            paddingTop: '1rem',
            paddingBottom: '1rem',
        }
    },
    donationPillContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        "@media (max-width: 768px)": {
            gap: '0.5rem',
        }
    },
    donationPillButton: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        color: 'black',
        cursor: 'pointer',
        justifyContent: 'center',
        fontSize: '1rem',
        border: 'solid 1px black',
        transition: 'background-color 0.3s ease',
        "@media (max-width: 768px)": {
            padding: '0.75rem',
            fontSize: '0.95rem',
        }
    },
    donationPillButtonSelected: {
        padding: '1rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: '#387A3D',
        border: 'solid 1px #387A3D',
        justifyContent: 'center',
        color: 'white',
        "@media (max-width: 768px)": {
            padding: '0.75rem',
            fontSize: '0.95rem',
        }
    },
    donationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
    },
    donationHeader: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
        padding: '0 4rem',
        "@media (max-width: 768px)": {
            fontSize: '1.1rem',
            padding: '0 1rem',
        }
    },
    donationbuttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        rowGap: '0.5rem',
        "@media (max-width: 768px)": {
            flexDirection: 'column',
            gap: '0.5rem',
        }
    },
    donationAmountButton: {
        borderRadius: '1.5rem',
        width: '50%',
        height: 'auto',
        cursor: 'pointer',
        padding: '1rem',
        fontSize: '1rem',
        backgroundColor: 'transparent',
        border: 'solid 1px #387A3D',
        lineHeight: '100%',
        color: 'black',
        "@media (max-width: 768px)": {
            width: '100%',
            padding: '0.75rem',
            fontSize: '0.95rem',
        }
    },
    donationAmountButtonSelected: {
        borderRadius: '1.5rem',
        width: '50%',
        height: 'auto',
        cursor: 'pointer',
        padding: '1rem',
        fontSize: '1rem',
        backgroundColor: '#387A3D',
        border: 'solid 1px #387A3D',
        lineHeight: '100%',
        color: 'white',
        "@media (max-width: 768px)": {
            width: '100%',
            padding: '0.75rem',
            fontSize: '0.95rem',
        }
    },
    donationCustomAmount: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    donationCustomAmountButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '1.5rem',
        width: '100%',
        height: 'auto',
        cursor: 'pointer',
        textAlign: 'start',
        padding: '1rem 3rem',
        fontSize: '1rem',
        backgroundColor: 'transparent',
        border: 'solid 1px #387A3D',
        lineHeight: '100%',
        color: 'black',
        "@media (max-width: 768px)": {
            padding: '0.75rem 1rem',
            fontSize: '0.95rem',
        }
    },
    donationCustomAmountButtonSelected: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '1.5rem',
        width: '100%',
        height: 'auto',
        cursor: 'pointer',
        textAlign: 'start',
        padding: '1rem 3rem',
        fontSize: '1rem',
        backgroundColor: '#387A3D',
        border: 'solid 1px #387A3D',
        lineHeight: '100%',
        color: 'white',
        "@media (max-width: 768px)": {
            padding: '0.75rem 1rem',
            fontSize: '0.95rem',
        }
    },
    donationInput: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: 'transparent',
        fontSize: '1rem',
        color: 'black',
        "@media (max-width: 768px)": {
            fontSize: '0.95rem',
        }
    },
    donationInputSelected: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid white',
        backgroundColor: 'white',
        fontSize: '1rem',
        color: 'black',
        "@media (max-width: 768px)": {
            fontSize: '0.95rem',
        }
    },
    donateNowButton: {
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        backgroundColor: 'black',
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'white',
        border: 'none',
        transition: 'background-color 0.3s ease',
        marginTop: '1rem',
        width: '100%',
        alignSelf: 'center',
        '&:disabled': {
            '&:hover': {
                backgroundColor: '#ccc',
            },
            backgroundColor: '#ccc',
            cursor: 'not-allowed',
        },
        '&:hover': {
            backgroundColor: '#333',
        },
        "@media (max-width: 768px)": {
            fontSize: '0.95rem',
            padding: '0.5rem',
            maxWidth: '100%',
        }
    }
})