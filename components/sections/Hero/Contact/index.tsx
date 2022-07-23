import {memo} from 'react'
import styles from './Contact.module.scss'
import {Social, SocialKey} from '@apiModels/sections/hero'
import useContact from '@components/sections/Hero/Contact/useContact'


type ContactProps = {
    name: SocialKey
    contact: Social
}

export const Contact = memo<ContactProps>((props) => {

    const {
        name,
        contact
    } = props

    const {link, Icon} = useContact({name, src: contact.src})

    return (
        <a
            className={styles.main}
            href={link}
            target='_blank'
        ><Icon className={styles[name]}/> {contact.content || contact.src}</a>
    )
})
