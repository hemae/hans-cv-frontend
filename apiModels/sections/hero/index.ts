export type SocialKey =
    'telegram'
    | 'email'
    | 'phoneNumber'
    | 'location'

export type Social = {
    src: string
    content: string | null
}

export type HeroType = {
    firstName: string
    lastName: string
    job: string
    stack: string
    birthDate: string
    heroImage: string | null
    contacts: Record<SocialKey, Social>
}
