'use client'
import Image from "next/image"
import styles from "./homePage.module.css"
import { NavBar } from "../navBar/navBar"
import { useStyle } from "./homePage.style"

export function HomePage() {
  const style = useStyle()
  return (
    <div className={style.header}>
      <div>
        <h1> ERMSchools</h1>
        <NavBar />
      </div>
    </div>
  )
}
