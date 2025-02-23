'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    menuGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-end',
        float: 'right',
        height: '2rem',
        alignSelf: 'flex-end',
        marginLeft: '2rem',
        marginRight: '2rem'
    },
    menuButtonGroup: {
        display: 'flex',
        columnGap: '1rem'
    },
    meanuButton: {
        backgroundColor: 'transparent',
        color: 'black',
        border: 'none',
        '&:hover': {
            borderBottomStyle: 'solid',
            borderBottomColor: 'blue'
        }
    }
})