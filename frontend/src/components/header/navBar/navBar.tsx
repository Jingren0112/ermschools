import { useStyle } from "./navbar.style"
import { useRouter, Link } from '@/i18n/navigation'
import { useLocale, useTranslations } from "next-intl"
import LocaleSwitcher from "@/components/localeSwitcher/localeSwitcher"


export const NavBar = () => {
    const style = useStyle()
    const router = useRouter()
    const t = useTranslations('navBar')
    const locale = useLocale()
    console.log("NavBar locale: ", locale)

    return (
        <div className={ style.menuGroup }>
            <div className={ style.menuButtonGroup }>
                <Link href="/about" className={ style.menuButton }>{ t("about") }</Link>
                <Link href="/blog" className={ style.menuButton }>{ t("blog") }</Link>
            </div>
            <div className={ style.menuLanguageSwitchGroup }>
                <div>|</div>
                <LocaleSwitcher />
            </div>
            <div className={ style.menuActionButtonGroup } >
                <button className={ style.shopButton } onClick={ () => router.push("/shop") }>
                    { t("shop") }
                </button>
                <button className={ style.donateButton } onClick={ () => router.push("/donate") }>
                    { t("donate") }
                </button>
            </div>
        </div>
    )
}