import {memo, useMemo} from 'react'
import styles from './Projects.module.scss'
import {Section} from '@apiModels/sections'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {Project} from '@components/sections/Projects/Project'
import {ProjectsType} from '@apiModels/sections/projects'


type ProjectsProps = {
    section: Section<ProjectsType>
}

export const Projects = memo<ProjectsProps>(({section}) => {

    const {
        id,
        name,
        title,
        data: projects
    } = section

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    const projectComponents = useMemo<JSX.Element[]>(() => projects.map(project => {
        return (
            <Project
                key={project.id}
                project={project}
            />
        )
    }), [projects])

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        ><div>
            <h2>{title}</h2>
            {projectComponents}
        </div></section>
    )
})
