'use client'

import { NavBar } from './navBar/navBar'
import { useStyle } from './header.style'
import Image from 'next/image'
import Logo from './images/logo.svg'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function Header() {
    const style = useStyle()
    const t = useTranslations('header')
    return (
        <div className={ style.header } >
            <div className={ style.headerTextSection }>
                <Link href='/'>
                    <Image className={ style.headerLogo } src={ Logo } alt='logo'></Image>
                </Link>
                <h1 className={ style.headerText }>{ t("title") } </h1>
            </div>
            <NavBar />
        </div>
    )
}
