'use client'

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { useStyle } from "./loginPage.style"

export default function LoginPage() {
    const style = useStyle()
    return (
        <div className={ style.page }>
            <Header />
            <div className={ style.body }>
                <div className={ style.heroTitle }>Login</div>
                <div className={ style.loginCard }>
                    <form className={ style.form }>
                        <div className={ style.formGroup }>
                            <label htmlFor="email" className={ style.label }>Email</label>
                            <input type="email" id="email" className={ style.input } placeholder="Enter your email" required />
                        </div>
                        <div className={ style.formGroup }>
                            <label htmlFor="password" className={ style.label }>Password</label>
                            <input type="password" id="password" className={ style.input } placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className={ style.button }>Login</button>
                        <div className={ style.linkRow }>
                            <a href="#" className={ style.link }>Forgot password?</a>
                            <a href="#" className={ style.link }>Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}