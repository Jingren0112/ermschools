'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { useStyle } from './localeSwitcher.style';

const locales = [
    { code: 'en-us', label: 'EN' },
    { code: 'zh-cn', label: '中' }
];

export default function LocaleSwitcher() {
    const style = useStyle();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const locale = useLocale();

    function onLocaleClick(nextLocale: string) {
        if (nextLocale === locale) return;
        router.replace(
            // @ts-expect-error
            { pathname, params },
            { locale: nextLocale }
        );
    }

    return (
        <nav className={ style.localeSwitcherGroup } aria-label="Language Switcher">
            { locales.map(l => (
                <button
                    key={ l.code }
                    type="button"
                    className={ style.localeButton }
                    style={ {
                        fontWeight: locale === l.code ? 'bold' : 'normal',
                        color: 'black'
                    } }
                    onClick={ () => onLocaleClick(l.code) }
                    disabled={ locale === l.code }
                >
                    { l.label }
                </button>
            )) }
        </nav>
    );
}