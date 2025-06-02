'use strict'

import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: 'row',
        color: "black",
        gap: '1.25rem',
        justifyContent: 'center',
        padding: '0 18% 5rem'
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '16.5rem'
    },
    footerColumnHeader: {
        fontSize: '1rem',
        lineHeight: '140%',
        fontWeight: '600'
    },
    footerColumnTextContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    footerColumnText: {
        fontSize: '1rem',
        lineHeight: '140%',
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
        color: 'white'
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