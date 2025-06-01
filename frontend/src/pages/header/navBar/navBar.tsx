'use client'

import { useStyle } from "./navbar.style"
import Link from 'next/link'
import str from './string.json'

export const NavBar = () => {
    const style = useStyle()
    return (
        <div className={ style.menuGroup }>
            <div className={ style.menuButtonGroup }>
                <Link href="/about" className={ style.menuButton }>{ str["en-us"].about } </Link>
                <Link href="/blog" className={ style.menuButton }> { str["en-us"].blog }</Link>
            </div>
            <div className={ style.menuLanguageSwitchGroup }>
                <div>|</div>
                <Link href="">EN</Link>
                <Link href="">中</Link>
            </div>
            <div className={ style.menuActionButtonGroup }>
                <button className={ style.shopButton }>
                    { str["en-us"].shop }
                </button>
                <button className={ style.donateButton }>
                    { str["en-us"].Donate }
                </button>
            </div>
        </div>
    )
}