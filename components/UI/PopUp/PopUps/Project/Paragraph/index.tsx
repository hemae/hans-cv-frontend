import {memo, useMemo} from 'react'
import styles from './Paragraph.module.scss'
import {Info, ProjectParagraph} from '@apiModels/project'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {LinkMarkdown} from '@appComponents'
import classNames from 'classnames'
import {LinkItem} from '@UI'


type ParagraphProps = {
    name: ProjectParagraph
    paragraph: Info<string | string[]>
}

export const Paragraph = memo<ParagraphProps>(({name, paragraph}) => {

    const {
        title,
        content
    } = paragraph

    const {root} = useAdditionalAttributes({'data-id': `project-paragraph-${paragraph.title}`})

    const points = useMemo<JSX.Element>(() => {
        if (Array.isArray(content) && name === 'responsibilities') return (
            <>
                <h3>{title}</h3>
                <ul>
                    {content.map((item, index) => {
                            const {root} = useAdditionalAttributes<HTMLLIElement>({'data-id': `project-paragraph-item-${paragraph.title}`})
                            return (
                                <li
                                    key={item}
                                    ref={root}
                                ><LinkMarkdown isNewWindow>{`${item}${index === content.length - 1 ? '.' : ';'}`}</LinkMarkdown></li>
                            )
                        }
                    )}
                </ul>
            </>
        )
        else if (Array.isArray(content)) return (
            <>
                <h3>{title}</h3>
                <div>
                    {content.map(item => {
                        return (
                            <LinkItem
                                key={item}
                                content={item}
                            />
                        )
                    })}
                </div>
            </>
        )
        else return (
                <>
                    <h3>{title}:</h3>
                    <LinkMarkdown isNewWindow>{content}</LinkMarkdown>
                </>
            )
    }, [content, name])

    return (
        <section
            ref={root}
            className={classNames(
                styles.main,
                {[styles.column]: Array.isArray(content)}
            )}
        >{points}</section>
    )
})
