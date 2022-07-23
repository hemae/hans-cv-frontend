import {FC} from 'react'
import styles from './Experience.module.scss'
import classNames from 'classnames'
import useExperiencePopUp from '@UI/PopUp/PopUps/Experience/useExperiencePopUp'


export const Experience: FC = () => {

    const {
        title,
        src,
        image,
        period,
        responsibilities,
        imageScale
    } = useExperiencePopUp()

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
                ><img src={image || ''} alt='experience-image'/></a>
                <div
                    className={styles.main__description}
                >
                    <p>{period}</p>
                    <p>{responsibilities}</p>
                </div>
            </div>
        </section>
    )
}
