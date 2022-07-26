import {memo, useMemo} from 'react'
import styles from './Project.module.scss'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {Project as ProjectType} from '@apiModels/project'
import useProject from '@components/sections/Projects/Project/useProject'


type ProjectProps = {
    project: ProjectType
}

export const Project = memo<ProjectProps>(({project}) => {

    const {
        id
    } = project

    const {
        title,
        descriptionPreview,
        image,
        type,
        paragraphs
    } = project.data

    const {root} = useAdditionalAttributes({'data-id': `project-${id}`})

    const {projectClick} = useProject({project})

    const images = paragraphs.stack.pictures.map(picture => {
        const {root} = useAdditionalAttributes({'data-id': `tech-image-${id}`})
        return (
            <div
                key={picture}
                ref={root}
            ><img src={picture} alt='tech-picture'/></div>
        )
    })

    return (
        <div
            id={id}
            ref={root}
            className={styles.main}
            onClick={projectClick}
        >
            <div
                className={styles.main__image}
            ><img src={image || ''} alt={`project-image`}/></div>
            <div
                className={styles.main__info}
            >
                <h3>{title} ({type})</h3>
                <p>{descriptionPreview}</p>
                <div>{images}</div>
            </div>
        </div>
    )
})
