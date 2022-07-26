import {memo, useMemo} from 'react'
import styles from './Skills.module.scss'
import {Section} from '@apiModels/sections'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {LinkItem} from '@UI'
import {SkillsType} from '@apiModels/sections/skills'
import useSkills from '@components/sections/Skills/useSkills'
import {SkillType} from '@apiModels/skill'
import {upperCase} from '@helpers/transformPathIntoPhrase'


type SkillsProps = {
    section: Section<SkillsType>
}

export const Skills = memo<SkillsProps>(({section}) => {

    const {
        id,
        name,
        title,
        data: initialSkills
    } = section

    const {skills} = useSkills({skills: initialSkills})

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    const skillComponents = useMemo<JSX.Element[]>(() => {
        return Object
            .keys(skills)
            .map(key => {
                const skillItems = skills[key as SkillType].map(skill => {
                    return (
                        <LinkItem
                            key={skill.id}
                            content={skill.data.title}
                            image={skill.data.image}
                            interactive={skill.type !== 'soft'}
                        />
                    )
                })

                return (
                    <div
                        key={key}
                    >
                        <h3>{upperCase(key === 'tool' ? 'tools' : key)}</h3>
                        {skillItems}
                    </div>
                )
            })
    }, [skills])

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        >
            <div>
                <h2>{title}</h2>
                {skillComponents}
            </div>
        </section>
    )
})
