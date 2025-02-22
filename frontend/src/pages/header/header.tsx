'use client'

import { NavBar } from "./navBar/navBar"
import { useStyle } from "./header.style"

export function Header() {
    const style = useStyle()
    return (
        <div className={ style.header } >
            <div className={ style.headerTextSection }>
                <div>
                    <h1>ERMSchools </h1>
                </div>
            </div>
            < NavBar />
        </div>
    )
}
