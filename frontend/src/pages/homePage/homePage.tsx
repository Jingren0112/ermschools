'use client'

import Image from "next/image"
import { Header } from "../../components/header/header"
import { useStyle } from "./homePage.style"
import introImage from './images/Statistic_intro.svg'
import { Card } from "../../components/card/card"
import { cardContentType } from "../../components/card/util"
import { cardContent } from "./utils"
import str from './string.json'
import { Footer } from "../../components/footer/footer"

export function HomePage() {
  const style = useStyle()
  return (
    <div className={ style.page }>
      <Header />
      <div className={ style.body }>
        <div className={ style.bodySection1 }>
          <div className={ style.bodySection1HeaderContainer }>
            <div className={ style.bodySection1Header }>{ str.section1Header["en-us"] }</div>
          </div>
          <div className={ style.bodySection1BodyContainer }>
            <div className={ style.bodySection1Body }>{ str.section1Body["en-us"] }</div>
          </div>
        </div>
        <div className={ style.bodySection2 }>
          <Image className={ style.bodySection2Body } src={ introImage } alt={ str.section2ImageAlt["en-us"] } />
        </div>
        <div className={ style.bodySection3 }>
          <div className={ style.bodySection3Paragraph1 }>{ str.section3paragraph1["en-us"] }</div>
          <div className={ style.bodySection3Paragraph2 }>{ str.section3paragraph2["en-us"] }</div>
        </div>
        <div className={ style.bodySection4 }>
          <div className={ style.bodySection4HeaderContainer }>
            <div className={ style.bodySection4Header }>
              { str.section4Header["en-us"] }
            </div>
          </div>
          <div className={ style.bodySection4BodyContainer }>
            { cardContent.map((card: cardContentType, index: number) => {
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

