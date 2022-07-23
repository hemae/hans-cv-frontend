import {memo} from 'react'
import styles from './Language.module.scss'
import {Language as LanguageType} from '@apiModels/language'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'


type LanguageProps = {
    language: LanguageType
}

export const Language = memo<LanguageProps>(({language}) => {

    const {
        id
    } = language

    const {
        title,
        level,
        image
    } = language.data

    const {root} = useAdditionalAttributes<HTMLDivElement>({'data-id': `language-${id}`})

    return (
        <div
            id={id}
            ref={root}
            className={styles.main}
        >
            <div
                className={styles.main__image}
            ><img src={image || ''} alt={`language-${title}-image`}/></div>
            <div
                className={styles.main__info}
            >
                <p>{title}</p>
                <p>{level}</p>
            </div>
        </div>
    )
})
