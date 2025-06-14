
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
        "@media (max-width: 768px)": {
            gap: '4rem',
        }
    },
    leftSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
    },
    textHeader: {
        color: 'black',
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: '140%',
        letterSpacing: '0%',
    },
    descriptions: {
        fontSize: '1rem',
        color: 'black',
        lineHeight: '140%',
        letterSpacing: '0%',
    },
    rightSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        paddingTop: '4rem',
        paddingBottom: '4rem',
    },
    donationPillContainer: {
        display: 'flex',
        justifyContent: 'center',
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
        transition: 'background-color 0.3s ease'
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
        color: 'white'
    },
    donationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    },
    donationHeader: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'black',
        padding: '0 4rem'
    },
    donationbuttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        rowGap: '0.5rem'
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
    },
    donationInput: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: 'transparent',
        fontSize: '1rem',
        color: 'black'
    },
    donationInputSelected: {
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid white',
        backgroundColor: 'white',
        fontSize: '1rem',
        color: 'black'
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
        '&:disabled': {
            '&:hover': {
                backgroundColor: '#ccc',
            },
            backgroundColor: '#ccc',
            cursor: 'not-allowed',
        },
        '&:hover': {
            backgroundColor: '#333',
        }
    }

})