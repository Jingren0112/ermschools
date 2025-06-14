

import img from './images/Image.svg'
import Image from 'next/image'
import { useStyle } from './donatePage.style'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

interface donation {
    type?: 'Monthly' | 'One-Time',
    amount?: number,
    customAmount: boolean
}

export const DonatePage = () => {
    const style = useStyle()
    const [donation, setDonation] = useState<donation | undefined>(undefined)
    const [donateAmount, setDonateAmount] = useState<number | undefined>(undefined)
    const t = useTranslations('donatePage')
    const handleSubmit = () => {
        // TODO: Implement the donation submission logic
        console.log('submitted', donation)
    }
    const handleTypeSelect = (type: 'Monthly' | 'One-Time') => {
        console.log('selected', type)
        setDonation({ type: type, amount: donation?.amount || undefined, customAmount: donation?.customAmount || false })
    }
    const handleAmountSelect = (amount: number | undefined, customAmount: boolean) => {
        console.log('amount selected', amount)
        setDonation({ type: donation?.type || undefined, amount: amount, customAmount: customAmount || false })
    }

    useEffect(() => {
        if (donation?.customAmount === false) {
            setDonateAmount(undefined)
        }
    }, [donation?.customAmount])

    return (
        <div className={ style.page }>
            <Header />
            <div className={ style.rootContainer }>
                <div className={ style.leftSection }>
                    <Image className={ style.image } src={ img } alt={ '' } />
                    <div className={ style.textBox }>
                        <div className={ style.textHeader }>{ t("leftsectionHeader") }</div>
                        <div className={ style.descriptions }>{ t("leftsectionDescription1") }</div>
                        <div className={ style.descriptions }>{ t("leftsectionDescription2") }</div>
                        <div className={ style.descriptions }>{ t("leftsectionDescription3") }</div>
                    </div>
                </div>
                <div className={ style.rightSection } >
                    <div className={ style.donationPillContainer }>
                        <button className={ donation?.type === 'Monthly' ? style.donationPillButtonSelected : style.donationPillButton } onClick={ () => handleTypeSelect('Monthly') }>
                            { t("titlePill1") }
                        </button>
                        <button className={ donation?.type === 'One-Time' ? style.donationPillButtonSelected : style.donationPillButton } onClick={ () => handleTypeSelect('One-Time') }>
                            { t("titlePill2") }
                        </button>
                    </div>
                    <div className={ style.donationContainer }>
                        <div className={ style.donationHeader }>
                            { t("donationHeader") }
                        </div>
                        <div className={ style.donationbuttonGroup }>
                            <button className={ donation?.amount === 25 && !donation.customAmount ? style.donationAmountButtonSelected : style.donationAmountButton } onClick={ () => handleAmountSelect(25, false) }> $25 </button>
                            <button className={ donation?.amount === 50 && !donation.customAmount ? style.donationAmountButtonSelected : style.donationAmountButton } onClick={ () => handleAmountSelect(50, false) }> $50 </button>
                            <div className={ style.donationCustomAmount }>
                                <button
                                    className={ donation?.customAmount ? style.donationCustomAmountButtonSelected : style.donationCustomAmountButton }
                                    type="button"
                                    onMouseDown={ () => handleAmountSelect(donateAmount, true) } // Use onMouseDown to select custom on click or focus
                                >
                                    { t("amountOther") }, $
                                    <input
                                        type='number'
                                        className={ donation?.customAmount ? style.donationInputSelected : style.donationInput }
                                        placeholder={ t("promptForDonateAmount") }
                                        value={ donateAmount ?? '' }
                                        onFocus={ () => handleAmountSelect(donateAmount, true) }
                                        onChange={ (e) => {
                                            const val = e.target.value;
                                            if (val === '') {
                                                setDonateAmount(undefined);
                                                if (donation?.customAmount) {
                                                    setDonation({ ...donation, amount: undefined });
                                                }
                                            } else {
                                                const value = Number(val);
                                                setDonateAmount(value);
                                                if (donation?.customAmount) {
                                                    setDonation({ ...donation, amount: value });
                                                }
                                            }
                                        } }
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button disabled={ donation === undefined || donation?.type === undefined || donation?.amount === undefined || donation.amount <= 0 } className={ style.donateNowButton } onClick={ handleSubmit }>{ t("donateButtonText") } </button>
                </div>
            </div>
            <Footer />
        </div>
    )

}