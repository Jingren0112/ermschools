'use client'

import Image from "next/image"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { useStyle } from "./aboutPage.style"
import teamPhoto from "./images/aboutSection.svg"
import avatar from "./images/avatar.svg"
import { useTranslations } from "next-intl"

export default function AboutPage() {
    const style = useStyle()
    const t = useTranslations('aboutPage')
    return (
        <div className={ style.page }>
            <Header />
            <main className={ style.body }>
                <section className={ style.heroSection }>
                    <div className={ style.heroBar }>
                        <span className={ style.heroTitle }>{ t("heroTitle") }</span>
                    </div>
                    <div className={ style.heroImageWrapper }>
                        <Image className={ style.heroImage } src={ teamPhoto } alt={ t("heroImageAlt") } fill style={ { objectFit: 'cover' } } />
                    </div>
                </section>
                <section className={ style.section }>
                    <h2 className={ style.sectionTitle }>{ t("whoWeAreTitle") }</h2>
                    <div className={ style.sectionSubtitle }>{ t("missionVisionSubtitle") }</div>
                    <div className={ style.infoCards }>
                        <div className={ style.infoCard }>
                            <div className={ style.infoCardTitle }>{ t("ourStoryTitle") }</div>
                            <div className={ style.infoCardText }>
                                { t("ourStoryText") }
                            </div>
                        </div>
                        <div className={ style.infoCard }>
                            <div className={ style.infoCardTitle }>{ t("ourMissionTitle") }</div>
                            <div className={ style.infoCardText }>
                                { t("ourMissionText") }
                            </div>
                        </div>
                        <div className={ style.infoCard }>
                            <div className={ style.infoCardTitle }>{ t("ourVisionTitle") }</div>
                            <div className={ style.infoCardText }>
                                { t("ourVisionText") }
                            </div>
                        </div>
                    </div>
                </section>
                <section className={ style.section }>
                    <h2 className={ style.sectionTitle }>{ t("meetTheTeamTitle") }</h2>
                    <div className={ style.sectionSubtitle }>{ t("staffVolunteersSubtitle") }</div>
                    <div className={ style.teamGrid }>
                        { [1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={ i } className={ style.teamCard }>
                                <div className={ style.avatarWrapper }>
                                    <Image className={ style.avatar } src={ avatar } alt={ t("avatarAlt") } width={ 48 } height={ 48 } />
                                </div>
                                <div className={ style.teamName }>{ t("teamName") }</div>
                                <div className={ style.teamRole }>{ t("teamRole") }</div>
                                <div className={ style.teamExp }>{ t("teamExp") }</div>
                            </div>
                        )) }
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}