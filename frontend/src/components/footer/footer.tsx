import { useStyle } from './footer.style'
import { footerContent } from './utils'
import Image from 'next/image'
import X from './images/X.svg'
import LinkedIn from './images/LinkedIn.svg'
import Youtube from './images/YouTube.svg'
import Instagram from './images/Instagram.svg'
import { useRouter } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export const Footer = () => {
    const style = useStyle()
    const router = useRouter()
    const t = useTranslations('footer')

    return (
        <div className={ style.container }>
            { footerContent.map((content, index) => (
                <div key={ index } className={ style.footerContainer }>
                    <div className={ style.footerColumnHeader }>
                        { t(content.header) }
                    </div>
                    <div className={ style.footerColumnTextContainer }>
                        <div className={ style.footerColumnText }>
                            { t(content.body1) }
                        </div>
                        <div className={ style.footerColumnText }>
                            { t(content.body2) }
                        </div>
                        <div className={ style.footerColumnText }>
                            { t(content.body3) }
                        </div>
                        <div className={ style.footerColumnText }>
                            { t(content.body4) }
                        </div>
                    </div>
                </div>
            )) }
            <div className={ style.footerButtonContainer }>
                <button
                    className={ style.donateButton }
                    onClick={ () => router.push('/donate') }
                >
                    { t("footerDonateButtonText") }
                </button>
                <div className={ style.socialMediaGroup }>
                    <Image className={ style.socialMediaIcon } src={ X } alt='' />
                    <Image className={ style.socialMediaIcon } src={ Instagram } alt='' />
                    <Image className={ style.socialMediaIcon } src={ Youtube } alt='' />
                    <Image className={ style.socialMediaIcon } src={ LinkedIn } alt='' />
                </div>
            </div>
        </div>
    )
}