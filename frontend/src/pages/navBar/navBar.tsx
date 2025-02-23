'use client'

import { useStyle } from "./navbar.style"


export const NavBar = ()=>{
    const style = useStyle()
    return (
        <div className={style.menuGroup}>
            <div className={style.menuGroup}>
                <div> What we do</div>
                <div> Research and reports</div>
                <div> Stories </div>
                <div> Who we are</div>
                <div> Take action</div>
            </div>
        </div>
    )
}