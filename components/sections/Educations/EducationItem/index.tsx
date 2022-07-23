import {memo} from 'react'
import styles from './EducationItem.module.scss'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {Education as EducationType} from '@apiModels/education'
import useEducationItem from '@components/sections/Educations/EducationItem/useEducationItem'


type EducationItemProps = {
    education: EducationType
}

export const EducationItem = memo<EducationItemProps>(({education}) => {

    const {
        id
    } = education

    const {
        title,
        image,
        shortPeriod,
        degree
    } = education.data

    const {root} = useAdditionalAttributes({'data-id': `education-item-${id}`})

    const {educationClick} = useEducationItem({education})

    return (
        <div
            id={id}
            ref={root}
            className={styles.main}
            onClick={educationClick}
        >
            <div
                className={styles.main__image}
            ><img src={image || ''} alt={`education-image`}/></div>
            <div
                className={styles.main__info}
            >
                <h3>{title}</h3>
                <p>{shortPeriod}</p>
                <p>{degree}</p>
            </div>
        </div>
    )
})
