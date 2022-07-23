import {memo, useMemo} from 'react'
import styles from './Hero.module.scss'
import {Section} from '@apiModels/sections'
import {HeroType, SocialKey} from '@apiModels/sections/hero'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {FullscreenImage} from '@UI'
import {Contact} from '@components/sections/Hero/Contact'
import {getAge} from '@helpers/date'


type HeroProps = {
    section: Section<HeroType>
}

export const Hero = memo<HeroProps>(({section}) => {

    const {
        id,
        name
    } = section

    const {
        heroImage,
        contacts,
        firstName,
        lastName,
        job,
        stack,
        birthDate
    } = section.data

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    const contactComponents = useMemo<JSX.Element[]>(() => {
        return Object
            .keys(contacts)
            .map(name => {
                return (
                    <Contact
                        key={name}
                        name={name as SocialKey}
                        contact={contacts[name as SocialKey]}
                    />
                )
            })
    }, [contacts])

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        >
            <div>
                <FullscreenImage
                    className={styles.main__heroImage}
                    src={heroImage || ''}
                    alt='hero-image'
                />
                <div className={styles.main__heroInfo}>
                    <h2>{lastName} {firstName}, {getAge(birthDate)}</h2>
                    <h3>{job}</h3>
                    <h3>({stack})</h3>
                    {contactComponents}
                </div>
            </div>
        </section>
    )
})
