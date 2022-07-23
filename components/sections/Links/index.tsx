import {memo, useMemo} from 'react'
import styles from './Links.module.scss'
import {LinksType} from '@apiModels/sections/links'
import {Section} from '@apiModels/sections'
import useAdditionalAttributes from '@hooks/useAdditionalAttributes'
import {Link} from '@components/sections/Links/Link'


type LinksProps = {
    section: Section<LinksType>
}

export const Links = memo<LinksProps>(({section}) => {

    const {
        id,
        name,
        data: links
    } = section

    const {root} = useAdditionalAttributes({'data-id': `${name}-section-${id}`})

    const linkComponents = useMemo<JSX.Element[]>(() => links.map(link => {
        return (
            <Link
                key={link.id}
                link={link}
            />
        )
    }), [links])

    return (
        <section
            id={id}
            ref={root}
            className={styles.main}
        ><div>{linkComponents}</div></section>
    )
})
