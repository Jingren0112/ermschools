import { makeStyles } from "@griffel/react";

export const useStyle = makeStyles({
    localeSwitcherGroup: {
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
    },
    localeButton: {
        background: 'none',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.25rem 0.75rem',
        fontSize: '1rem',
        lineHeight: '100%',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s',
        ':hover': {
            background: '#f5f5f5',
            color: 'black',
        },
        ':disabled': {
            opacity: 0.7,
            cursor: 'not-allowed',
            ':hover': {
                background: 'transparent',
                color: 'black',
            },
        },
    },
});