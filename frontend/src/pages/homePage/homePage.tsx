'use client'

import { Header } from "../header/header"
import { NavBar } from "../header/navBar/navBar"
import { useStyle } from "./homePage.style"

export function HomePage() {
  const style = useStyle()
  return (
    <div className={ style.page }>
      <Header />
    </div>

  )
}
