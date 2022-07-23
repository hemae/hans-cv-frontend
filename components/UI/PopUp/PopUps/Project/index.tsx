import {FC, useMemo} from 'react'
import styles from './Project.module.scss'
import useProjectPopUp from '@components/UI/PopUp/PopUps/Project/useProjectPopUp'
import classNames from 'classnames'
import {Paragraph} from '@UI/PopUp/PopUps/Project/Paragraph'
import {ProjectParagraph} from '@apiModels/project'


export const Project: FC = () => {

    const {
        title,
        description,
        descriptionPreview,
        image,
        imageScale,
        src,
        paragraphs
    } = useProjectPopUp()

    const paragraphComponents = useMemo<JSX.Element[]>(() => {
        return Object
            .keys(paragraphs)
            .map(key => {
                return (
                    <Paragraph
                        key={key}
                        name={key as ProjectParagraph}
                        paragraph={paragraphs[key as ProjectParagraph]}
                    />
                )
            })
    }, [paragraphs])

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
                ><img src={image || ''} alt='project-image'/></a>
                <div
                    className={styles.main__description}
                >
                    <p>{descriptionPreview}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div
                className={styles.main__paragraphs}
            >{paragraphComponents}</div>
        </section>
    )
}
