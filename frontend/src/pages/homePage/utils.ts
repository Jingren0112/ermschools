'use strict'

import { cardContentType } from "../../components/card/util";
import avatar from './images/avatar.svg'
import bodyHeader1 from './images/bodyHeader1.svg'
import bodyHeader2 from './images/bodyHeader2.svg'
import bodyHeader3 from './images/bodyHeader3.svg'
import str from './string.json'

export const cardContent: cardContentType[] = [
    {
        imgSrc: bodyHeader1,
        header: str.section4FirstCardHeader["en-us"],
        subHeader: str.section4FirstCardProjectname["en-us"],
        avatarSrc: avatar,
        category: str.section4FirstCardCategory["en-us"]
    },
    {
        imgSrc: bodyHeader2,
        header: str.section4SecondCardHeader["en-us"],
        subHeader: str.section4SecondCardProjectname["en-us"],
        avatarSrc: avatar,
        category: str.section4SecondCardCategory["en-us"]
    },
    {
        imgSrc: bodyHeader3,
        header: str.section4ThirdCardHeader["en-us"],
        subHeader: str.section4ThirdCardProjectname["en-us"],
        avatarSrc: avatar,
        category: str.section4ThirdCardCategory["en-us"]
    },
]