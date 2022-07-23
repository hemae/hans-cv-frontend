import {memo, useMemo} from 'react'
import styles from './Educations.module.scss'
import {Section} from '@apiModels/sections'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {EducationsType} from '@apiModels/sections/educatons'
import {EducationItem} from '@components/sections/Educations/EducationItem'


type EducationsProps = {
    section: Section<EducationsType>
}

export const Educations = memo<EducationsProps>(({section}) => {

    const {
        id,
        name,
        title,
        data: educations
    } = section

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    const educationComponents = useMemo<JSX.Element[]>(() => educations.map(education => {
        return (
            <EducationItem
                key={education.id}
                education={education}
            />
        )
    }), [educations])

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        ><div>
            <h2>{title}</h2>
            {educationComponents}
        </div></section>
    )
})
