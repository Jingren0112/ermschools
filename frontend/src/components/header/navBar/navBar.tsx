'use client'

import { useStyle } from "./navbar.style"
import Link from 'next/link'
import str from './string.json'

export const NavBar = () => {
    const style = useStyle()
    return (
        <div className={ style.menuGroup }>
            <div className={ style.menuButtonGroup }>
                <Link href="/about" className={ style.menuButton }>{ str.about["en-us"] } </Link>
                <Link href="/blog" className={ style.menuButton }> { str.blog["en-us"] }</Link>
            </div>
            <div className={ style.menuLanguageSwitchGroup }>
                <div>|</div>
                <Link href="">EN</Link>
                <Link href="">中</Link>
            </div>
            <div className={ style.menuActionButtonGroup }>
                <button className={ style.shopButton }>
                    { str.shop["en-us"] }
                </button>
                <button className={ style.donateButton }>
                    { str.Donate["en-us"] }
                </button>
            </div>
        </div>
    )
}