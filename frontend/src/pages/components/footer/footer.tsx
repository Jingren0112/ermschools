'use strict'

import react from 'react'
import { useStyle } from './footer.style'
import { footerContent } from './utils'
import str from './string.json'
import Image from 'next/image'
import X from './images/X.svg'
import LinkedIn from './images/LinkedIn.svg'
import Youtube from './images/YouTube.svg'
import Instagram from './images/Instagram.svg'

export const Footer = () => {
    const style = useStyle()
    return (
        <div className={ style.container }>
            { footerContent.map((content: footerContent, index: number) => {
                return (
                    <div key={ index } className={ style.footerContainer }>
                        <div className={ style.footerColumnHeader }>
                            { content.header }
                        </div>
                        <div className={ style.footerColumnTextContainer }>
                            <div className={ style.footerColumnText }>
                                { content.body1 }
                            </div>
                            <div className={ style.footerColumnText }>
                                { content.body2 }
                            </div>
                            <div className={ style.footerColumnText }>
                                { content.body3 }
                            </div>
                            <div className={ style.footerColumnText }>
                                { content.body4 }
                            </div>
                        </div>
                    </div>
                )
            }) }
            <div className={ style.footerButtonContainer }>
                <button className={ style.donateButton }>
                    { str.footerDonateButtonText['en-us'] }
                </button>
                <div className={ style.socialMediaGroup }>
                    <Image className={ style.socialMediaIcon } src={ X } alt='' />
                    <Image className={ style.socialMediaIcon } src={ LinkedIn } alt='' />
                    <Image className={ style.socialMediaIcon } src={ Youtube } alt='' />
                    <Image className={ style.socialMediaIcon } src={ LinkedIn } alt='' />
                </div>
            </div>
        </div>
    )
}