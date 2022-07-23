import {memo} from 'react'
import styles from './LinkItem.module.scss'
import {LinkMarkdown} from '@appComponents'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import classNames from 'classnames'


type LinkItemProps = {
    image?: string
    interactive?: boolean
    content: string
}

export const LinkItem = memo<LinkItemProps>((props) => {

    const {
        content,
        interactive = true,
        image
    } = props

    const {root} = useAdditionalAttributes({'data-id': `link-item-[${content}]`})

    return (
        <div
            ref={root}
            className={classNames(
                styles.main,
                {[styles.interactive]: interactive}
            )}
        >
            <LinkMarkdown
                isNewWindow
            >{content}</LinkMarkdown>
            {image && <div><img src={image} alt='skill-picture'/></div>}
        </div>
    )
})
