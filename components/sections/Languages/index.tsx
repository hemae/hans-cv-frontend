import {memo, useMemo} from 'react'
import styles from './Languages.module.scss'
import {Section} from '@apiModels/sections'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {LanguagesType} from '@apiModels/sections/languages'
import {Language} from '@components/sections/Languages/Language'


type LanguagesProps = {
    section: Section<LanguagesType>
}

export const Languages = memo<LanguagesProps>(({section}) => {

    const {
        id,
        name,
        title,
        data: languages
    } = section

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    const languageComponents = useMemo<JSX.Element[]>(() => languages.map(language => {
        return (
            <Language
                key={language.id}
                language={language}
            />
        )
    }), [languages])

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        >
            <div>
                <h2>{title}</h2>
                {languageComponents}
            </div>
        </section>
    )
})
