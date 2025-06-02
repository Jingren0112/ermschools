'use strict'

import { makeStyles, shorthands } from "@griffel/react"

export const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.borderColor('#D9D9D9'),
        padding: '1.5rem',
        borderRadius: '0.5rem',
        gap: '0.75rem',
        boxShadow: 'initial',
        alignItems: 'center',
        ...shorthands.borderStyle('solid'),
        ...shorthands.borderWidth('thin')
    },
    header: {
        color: 'black',
        textAlign: 'center'
    },
    bodyHeader: {
        color: 'black',
        fontSize: '1.5rem',
        fontWeight: '600',
        lineHeight: '120%',
        letterSpacing: '-2%',
        width: '100%',
        textAlign: 'center'
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '0.75rem',
        width: '100%'
    },
    projectContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-start'
    },
    projectName: {
        color: '#757575',
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '140%'
    },
    projectCatogery: {
        color: '#B3B3B3',
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '140%'
    }
})