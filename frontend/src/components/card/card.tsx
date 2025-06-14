
import { useStyle } from './card.style'
import Image from 'next/image'
import { cardContentType } from './util'

export const Card = (props: CardProps) => {
    const style = useStyle()
    return (
        <div className={ style.container }>
            <div className={ style.header }>
                <Image src={ props.content.imgSrc } alt="" />
            </div>
            <div className={ style.bodyHeader }>
                { props.content.header }
            </div>
            <div className={ style.bodyContainer }>
                <Image src={ props.content.avatarSrc } alt="" />
                <div className={ style.projectContainer }>
                    <div className={ style.projectName }>
                        { props.content.subHeader }
                    </div>
                    <div className={ style.projectCatogery }>
                        { props.content.category }</div>
                </div>
            </div>
        </div>
    )
}

interface CardProps {
    content: cardContentType
}