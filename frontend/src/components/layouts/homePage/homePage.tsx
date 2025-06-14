'use client'

import Image from "next/image"
import { Header } from "../../header/header"
import { useStyle } from "./homePage.style"
import { Card } from "../../card/card"
import { cardContentType } from "../../card/util"
import { getCardContent } from "./utils"
import { Footer } from "../../footer/footer"
import statChildrenIcon from './images/helped.svg'
import statCommunitiesIcon from './images/community.svg'
import statVolunteersIcon from './images/volunteer.svg'
import { useRouter } from "@/i18n/navigation"
import { useTranslations } from "next-intl"


export const HomePage = () => {
  const style = useStyle()
  const router = useRouter()
  const t = useTranslations('homePage')

  return (
    <div className={ style.page }>
      <Header />
      <div className={ style.body }>
        {/* Hero Section */ }
        <div className={ style.bodySection1 }>
          <div className={ style.bodySection1HeaderContainer }>
            <div className={ style.bodySection1Header }>
              { t("section1Header") }
            </div>
          </div>
          <div className={ style.bodySection1BodyContainer }>
            <div className={ style.bodySection1Body }>
              { t("section1Body") }
            </div>
          </div>
        </div>
        {/* Stats Section */ }
        <div className={ style.bodySection2 }>
          <div className={ style.bodySection2Stats }>
            <div className={ style.statItem }>
              <Image src={ statChildrenIcon } className={ style.statIcon } alt="" />
              <div className={ style.statNumber }>
                10,000+
              </div>
              <div className={ style.statLabel }>
                { t("section2StatChildrenLabel") }
              </div>
            </div>
            <div className={ style.statItem }>
              <Image src={ statCommunitiesIcon } className={ style.statIcon } alt="" />
              <div className={ style.statNumber }>
                50+
              </div>
              <div className={ style.statLabel }>
                { t("section2StatCommunitiesLabel") }
              </div>
            </div>
            <div className={ style.statItem }>
              <Image src={ statVolunteersIcon } className={ style.statIcon } alt="" />
              <div className={ style.statNumber }>
                1,000+
              </div>
              <div className={ style.statLabel }>
                { t("section2StatVolunteersLabel") }
              </div>
            </div>
          </div>
        </div>
        {/* Mission Statement Section */ }
        <div className={ style.bodySection3 }>
          <div className={ style.bodySection3Paragraph1 }>
            { t("section3paragraph1") }
          </div>
          <div className={ style.bodySection3Paragraph2 }>
            { t("section3paragraph2") }
          </div>
        </div>
        {/* Learn More Button */ }
        <div className={ style.learnMoreButtonContainer }>
          <button
            className={ style.learnMoreButton }
            onClick={ () => router.push("/about") }
          >
            { t("section4Header") }
          </button>
        </div>
        {/* Cards Section */ }
        <div className={ style.bodySection4 }>
          <div className={ style.bodySection4BodyContainer }>
            { getCardContent().map((card: cardContentType, index: number) => {
              return (
                <Card key={ index } content={ card } />
              )
            }) }
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

