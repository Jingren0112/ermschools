'use client'

import { Header } from "../header/header"
import { NavBar } from "../header/navBar/navBar"
import { useStyle } from "./homePage.style"
import bg from "./images/bg.svg"

export function HomePage() {
  const style = useStyle()
  console.log('image is ', `url(${bg})`)
  return (
    <div className={ style.page }>
      <Header />
      <div className={ style.bodySection1 } style={ { backgroundImage: `url(${bg.src})` } }>
        <div className={ style.bodySectionHeader }>
          Helping Hands To Children
        </div>
        <div className={ style.bodySectionBody }>
          JOIN MONTYLY DONATION NOW
        </div>
      </div>
    </div >

  )
}
