import {memo} from 'react'
import styles from './Link.module.scss'
import {Link as LinkType} from '@apiModels/link'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'


type LinkProps = {
    link: LinkType
}

export const Link = memo<LinkProps>(({link}) => {

    const {
        id,
        name
    } = link

    const {
        src,
        content,
        image
    } = link.data

    const {root} = useAdditionalAttributes<HTMLAnchorElement>({'data-id': `${name}-link-${id}`})

    return (
        <a
            id={id}
            ref={root}
            className={styles.main}
            href={src}
            target='_blank'
        >
            <div><img src={image || ''} alt={`${name}-link-image`}/></div>
            <p>{content}</p>
        </a>
    )
})
