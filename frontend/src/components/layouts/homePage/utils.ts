import { cardContentType } from "../../card/util";
import avatar from './images/avatar.svg'
import bodyHeader1 from './images/bodyHeader1.svg'
import bodyHeader2 from './images/bodyHeader2.svg'
import bodyHeader3 from './images/bodyHeader3.svg'
import { useTranslations } from "next-intl";

export function getCardContent(): cardContentType[] {
    const t = useTranslations('homePage')
    return [
        {
            imgSrc: bodyHeader1,
            header: t("section4FirstCardHeader"),
            subHeader: t("section4FirstCardProjectname"),
            avatarSrc: avatar,
            category: t("section4FirstCardCategory")
        },
        {
            imgSrc: bodyHeader2,
            header: t("section4SecondCardHeader"),
            subHeader: t("section4SecondCardProjectname"),
            avatarSrc: avatar,
            category: t("section4SecondCardCategory")
        },
        {
            imgSrc: bodyHeader3,
            header: t("section4ThirdCardHeader"),
            subHeader: t("section4ThirdCardProjectname"),
            avatarSrc: avatar,
            category: t("section4ThirdCardCategory")
        },
    ]
}