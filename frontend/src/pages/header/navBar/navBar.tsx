'use client'

import { useStyle } from "./navbar.style"
import Link from 'next/link'

export const NavBar = () => {
    const style = useStyle()
    return (
        <div className={ style.menuGroup }>
            <div className={ style.menuButtonGroup }>
                <Link href="/" className={ style.meanuButton }>Home</Link>
                <Link href="/intro" className={ style.meanuButton }> What we do</Link>
                <Link href="/reports" className={ style.meanuButton }> Research and reports</Link>
                <Link href="/stories" className={ style.meanuButton }> Stories </Link>
                <Link href="/who" className={ style.meanuButton }> Who we are</Link>
                <Link href="/action" className={ style.meanuButton }> Take action</Link>
            </div>
        </div>
    )
}