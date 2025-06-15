import { useState, useEffect } from "react";
import { useStyle } from "./navbar.style";
import { useRouter, Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/localeSwitcher/localeSwitcher";

export const NavBar = () => {
    const style = useStyle();
    const router = useRouter();
    const t = useTranslations('navBar');
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        const handleRouteChange = () => setMobileOpen(false);
        window.addEventListener('resize', handleRouteChange);
        return () => window.removeEventListener('resize', handleRouteChange);
    }, []);

    return (
        <div className={ style.menuGroup }>
            {/* Desktop menu */ }
            <div className={ style.menuButtonGroup }>
                <Link href="/about" className={ style.menuButton }>{ t("about") }</Link>
                <Link href="/blog" className={ style.menuButton }>{ t("blog") }</Link>
            </div>
            <div className={ style.menuLanguageSwitchGroup }>
                <div>|</div>
                <LocaleSwitcher />
            </div>
            <div className={ style.menuActionButtonGroup }>
                <button className={ style.shopButton } onClick={ () => router.push("/shop") }>
                    { t("shop") }
                </button>
                <button className={ style.donateButton } onClick={ () => router.push("/donate") }>
                    { t("donate") }
                </button>
            </div>
            {/* Hamburger for mobile */ }
            <button
                className={ style.hamburger }
                aria-label="Open menu"
                onClick={ () => setMobileOpen((open) => !open) }
            >
                ☰
            </button>
            {/* Mobile menu */ }
            { mobileOpen && (
                <div className={ `${style.mobileMenu} ${mobileOpen ? style.mobileMenuOpen : ""}` }>
                    <Link href="/about" className={ style.mobileMenuButton } onClick={ () => setMobileOpen(false) }>{ t("about") }</Link>
                    <Link href="/blog" className={ style.mobileMenuButton } onClick={ () => setMobileOpen(false) }>{ t("blog") }</Link>
                    <LocaleSwitcher />
                    <button className={ style.mobileMenuActionButton } onClick={ () => { router.push("/shop"); setMobileOpen(false); } }>
                        { t("shop") }
                    </button>
                    <button className={ style.mobileMenuDonateButton } onClick={ () => { router.push("/donate"); setMobileOpen(false); } }>
                        { t("donate") }
                    </button>
                </div>
            ) }
        </div>
    );
};