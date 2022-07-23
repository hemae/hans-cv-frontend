import {memo, useMemo} from 'react'
import styles from './Experience.module.scss'
import {Section} from '@apiModels/sections'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {ExperienceType} from '@apiModels/sections/experience'
import {ExperienceItem} from '@components/sections/Experience/ExperienceItem'


type ExperienceProps = {
    section: Section<ExperienceType>
}

export const Experience = memo<ExperienceProps>(({section}) => {

    const {
        id,
        name,
        title,
        data: experiences
    } = section

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    const experienceComponents = useMemo<JSX.Element[]>(() => experiences.map(experience => {
        return (
            <ExperienceItem
                key={experience.id}
                experience={experience}
            />
        )
    }), [experiences])

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        ><div>
            <h2>{title}</h2>
            {experienceComponents}
        </div></section>
    )
})
