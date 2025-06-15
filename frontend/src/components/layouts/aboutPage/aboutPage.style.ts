'use client'
import { makeStyles } from "@griffel/react"

export const useStyle = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        minHeight: '100vh',
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        padding: '0 0 2.5rem 0',
        width: '100%',
        alignItems: 'center',
    },
    heroSection: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2.5rem',
        marginBottom: '2.5rem',
        gap: '1.5rem',
    },
    heroBar: {
        width: '90%',
        maxWidth: '900px',
        backgroundColor: '#E88D31',
        borderRadius: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60px',
        marginBottom: '1.5rem',
        '@media (max-width: 600px)': {
            minHeight: '40px',
        },
    },
    heroTitle: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '2.5rem',
        letterSpacing: '0.5px',
        padding: '0.7rem 0',
        textAlign: 'center',
        width: '100%',
        '@media (max-width: 900px)': {
            fontSize: '1.7rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1.1rem',
            padding: '0.4rem 0',
        },
    },
    heroImageWrapper: {
        width: '90%',
        maxWidth: '900px',
        aspectRatio: '16/6',
        position: 'relative',
        borderRadius: '1rem',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        '@media (max-width: 900px)': {
            aspectRatio: '16/8',
        },
        '@media (max-width: 600px)': {
            aspectRatio: '16/12',
        },
    },
    heroImage: {
        objectFit: 'cover',
    },
    section: {
        width: '90%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'flex-start',
        margin: '0 auto',
        '@media (max-width: 600px)': {
            gap: '1rem',
        },
    },
    sectionTitle: {
        fontSize: '2rem',
        fontWeight: 600,
        color: '#222',
        marginBottom: '0.2rem',
        textAlign: 'left',
        '@media (max-width: 900px)': {
            fontSize: '1.3rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1.1rem',
        },
    },
    sectionSubtitle: {
        fontSize: '1.1rem',
        color: '#757575',
        marginBottom: '0.5rem',
        textAlign: 'left',
        '@media (max-width: 900px)': {
            fontSize: '1rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
        },
    },
    infoCards: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
    },
    infoCard: {
        border: '1px solid #E0E0E0',
        borderRadius: '0.7rem',
        padding: '1.2rem 1.5rem',
        background: '#fafbfc',
        boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
        '@media (max-width: 600px)': {
            padding: '0.8rem 0.7rem',
        },
    },
    infoCardTitle: {
        fontWeight: 600,
        fontSize: '1.1rem',
        marginBottom: '0.4rem',
        color: '#222',
        '@media (max-width: 900px)': {
            fontSize: '1rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
        },
    },
    infoCardText: {
        fontSize: '1rem',
        color: '#444',
        lineHeight: 1.6,
        '@media (max-width: 900px)': {
            fontSize: '0.95rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.9rem',
        },
    },
    teamGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        width: '100%',
        marginTop: '1rem',
        '@media (max-width: 900px)': {
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
        },
        '@media (max-width: 600px)': {
            gridTemplateColumns: '1fr',
            gap: '0.7rem',
        },
    },
    teamCard: {
        border: '1px solid #E0E0E0',
        borderRadius: '0.7rem',
        padding: '1.5rem 1rem',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
        '@media (max-width: 900px)': {
            padding: '1rem 0.5rem',
        },
        '@media (max-width: 600px)': {
            padding: '0.7rem 0.3rem',
        },
    },
    avatarWrapper: {
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '0.5rem',
        background: '#f3f3f3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 900px)': {
            width: '2.2rem',
            height: '2.2rem',
        },
        '@media (max-width: 600px)': {
            width: '1.7rem',
            height: '1.7rem',
        },
    },
    avatar: {
        width: '3rem',
        height: '3rem',
        objectFit: 'cover',
        borderRadius: '50%',
        '@media (max-width: 900px)': {
            width: '2.2rem',
            height: '2.2rem',
        },
        '@media (max-width: 600px)': {
            width: '1.7rem',
            height: '1.7rem',
        },
    },
    teamName: {
        fontWeight: 600,
        fontSize: '1.1rem',
        color: '#222',
        '@media (max-width: 900px)': {
            fontSize: '1rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.95rem',
        },
    },
    teamRole: {
        color: '#757575',
        fontSize: '1rem',
        '@media (max-width: 900px)': {
            fontSize: '0.95rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.9rem',
        },
    },
    teamExp: {
        color: '#B3B3B3',
        fontSize: '0.95rem',
        '@media (max-width: 900px)': {
            fontSize: '0.9rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '0.85rem',
        },
    }
})