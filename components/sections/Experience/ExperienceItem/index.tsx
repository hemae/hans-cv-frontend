import {memo} from 'react'
import styles from './ExperienceItem.module.scss'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {Experience as ExperienceType} from '@apiModels/experience'
import useExperienceItem from '@components/sections/Experience/ExperienceItem/useExperienceItem'


type ExperienceItemProps = {
    experience: ExperienceType
}

export const ExperienceItem = memo<ExperienceItemProps>(({experience}) => {

    const {
        id
    } = experience

    const {
        title,
        image,
        shortPeriod
    } = experience.data

    const {root} = useAdditionalAttributes({'data-id': `experience-item-${id}`})

    const {experienceClick} = useExperienceItem({experience})

    return (
        <div
            id={id}
            ref={root}
            className={styles.main}
            onClick={experienceClick}
        >
            <div
                className={styles.main__image}
            ><img src={image || ''} alt={`experience-image`}/></div>
            <div
                className={styles.main__info}
            >
                <h3>{title}</h3>
                <p>{shortPeriod}</p>
            </div>
        </div>
    )
})
