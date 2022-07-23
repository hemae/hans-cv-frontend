import {SocialKey} from '@apiModels/sections/hero'
import LocationIcon from '../../../../../public/location.svg'
import PhoneIcon from '../../../../../public/phone.svg'
import EmailIcon from '../../../../../public/email.svg'
import {FC} from 'react'


type Options = {
    name: SocialKey
    src: string
}

type Returned = {
    link: string
    Icon: FC<{className: string}>
}

export default function useContact(options: Options): Returned {

    const {
        name,
        src
    } = options

    let link
    let image: JSX.Element

    switch (name) {
        case 'email':
            link = `mailto:${src}`
            image = <EmailIcon/>
            break
        case 'phoneNumber':
            link = `tel:${src}`
            image = <PhoneIcon/>
            break
        case 'location':
            link = src
            image = <LocationIcon/>
            break
        case 'telegram':
            link = src
            image = <img src='/telegram.png' alt='telegram-icon'/>
            break
        default:
            link = src
            image = <></>
    }

    return {
        link,
        Icon: ({className}) => <div className={className}>{image}</div>
    }
}
