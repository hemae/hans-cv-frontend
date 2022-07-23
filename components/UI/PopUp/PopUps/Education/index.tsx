import {FC} from 'react'
import styles from './Education.module.scss'
import classNames from 'classnames'
import useEducationPopUp from '@UI/PopUp/PopUps/Education/useEducationPopUp'


export const Education: FC = () => {

    const {
        title,
        src,
        university,
        country,
        city,
        degree,
        image,
        period,
        imageScale
    } = useEducationPopUp()

    return (
        <section
            className={styles.main}
        >
            <h2>{title}</h2>
            <div
                className={styles.main__header}
            >
                <a
                    className={classNames(
                        styles.main__image,
                        {[styles.scale]: imageScale}
                    )}
                    href={src}
                    target='_blank'
                ><img src={image || ''} alt='education-image'/></a>
                <div
                    className={styles.main__description}
                >
                    <p>{university}, {country}, {city}, {degree}</p>
                    <p>{period}</p>
                </div>
            </div>
        </section>
    )
}
