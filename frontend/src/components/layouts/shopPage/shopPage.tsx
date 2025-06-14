'use client'

import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { useStyle } from "./shopPage.style"
import Image from "next/image"
import { products } from "./products"
import { useTranslations } from "next-intl"

export default function ShopPage() {
    const style = useStyle()
    const t = useTranslations('shopPage')
    return (
        <div className={ style.page }>
            <Header />
            <main className={ style.body }>
                <div className={ style.title }>{ t("charityShop") }</div>
                <div className={ style.visionCard }>
                    <div className={ style.visionTitle }>{ t("ourVision") }</div>
                    <div className={ style.visionDesc }>
                        { t("visionDesc") }
                    </div>
                </div>
                <div className={ style.shopContent }>
                    <aside className={ style.cartSection }>
                        <div className={ style.cartCard }>
                            <div className={ style.cartLabel }>{ t("amount") }</div>
                            <div className={ style.cartAmount }>$200</div>
                            <button className={ style.cartCheckout }>{ t("checkout") }</button>
                            <button className={ style.cartDonate }>{ t("donation") }</button>
                            <div className={ style.cartItemsHeader }>{ t("items") }</div>
                            <div className={ style.cartItem }>
                                <div>
                                    <div className={ style.cartItemName }>{ t("schoolBag") }</div>
                                    <div className={ style.cartItemDesc }>{ t("schoolBagDesc") }</div>
                                </div>
                                <div className={ style.cartItemQty }>
                                    <button className={ style.qtyBtn }>{ "<" }</button>
                                    <span>1</span>
                                    <button className={ style.qtyBtn }>{ ">" }</button>
                                </div>
                                <button className={ style.cartItemRemove }>🗑️</button>
                            </div>
                            <div className={ style.cartItem }>
                                <div>
                                    <div className={ style.cartItemName }>{ t("pencilCase") }</div>
                                    <div className={ style.cartItemDesc }>{ t("pencilCaseDesc") }</div>
                                </div>
                                <div className={ style.cartItemQty }>
                                    <button className={ style.qtyBtn }>{ "<" }</button>
                                    <span>1</span>
                                    <button className={ style.qtyBtn }>{ ">" }</button>
                                </div>
                                <button className={ style.cartItemRemove }>🗑️</button>
                            </div>
                            <div className={ style.cartItem }>
                                <div>
                                    <div className={ style.cartItemName }>{ t("cartoonRubber") }</div>
                                    <div className={ style.cartItemDesc }>{ t("cartoonRubberDesc") }</div>
                                </div>
                                <div className={ style.cartItemQty }>
                                    <button className={ style.qtyBtn }>{ "<" }</button>
                                    <span>1</span>
                                    <button className={ style.qtyBtn }>{ ">" }</button>
                                </div>
                                <button className={ style.cartItemRemove }>🗑️</button>
                            </div>
                        </div>
                    </aside>
                    <section className={ style.productsSection }>
                        <div className={ style.productsHeader }>
                            <input className={ style.searchInput } placeholder={ t("search") } />
                            <div className={ style.filterGroup }>
                                <button className={ style.filterBtnActive }>{ t("new") }</button>
                                <button className={ style.filterBtn }>{ t("priceAscending") }</button>
                                <button className={ style.filterBtn }>{ t("priceDescending") }</button>
                                <button className={ style.filterBtn }>{ t("rating") }</button>
                            </div>
                        </div>
                        <div className={ style.productsGrid }>
                            { products.map((p) => (
                                <div key={ p.id } className={ style.productCard }>
                                    <Image src={ p.img } alt={ p.name } className={ style.productImg } />
                                    <div className={ style.productName }>{ p.name }</div>
                                    <div className={ style.productPrice }>{ p.price }</div>
                                    <div className={ style.productDesc }>{ p.desc }</div>
                                    <button className={ style.addToCartBtn }>🛒</button>
                                </div>
                            )) }
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}