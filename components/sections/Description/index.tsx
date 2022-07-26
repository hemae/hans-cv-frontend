import {memo} from 'react'
import {Section} from '@apiModels/sections'
import {DescriptionType} from '@apiModels/sections/description'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import styles from './Description.module.scss'


type Props = {
    section: Section<DescriptionType>
}

export const Description = memo<Props>(({section}) => {

    const {
        id,
        name
    } = section

    const {description} = section.data

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        ><p>{description}</p></section>
    )
})
