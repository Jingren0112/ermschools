'use client'

import { NavBar } from './navBar/navBar'
import { useStyle } from './header.style'
import Image from 'next/image'
import Logo from './images/logo.svg'
import * as str from './string.json'

export function Header() {
    const style = useStyle()
    return (
        <div className={ style.header } >
            <div className={ style.headerTextSection }>
                <Image className={ style.headerLogo } src={ Logo } alt='logo'></Image>
                <h1 className={ style.headerText }>{ str.title['en-us'] } </h1>
            </div>
            < NavBar />
        </div>
    )
}
