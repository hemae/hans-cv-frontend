import {Entity, UniqueNum} from '@apiModels/common'


export type ProjectParagraph =
    'position'
    | 'responsibilities'
    | 'integration'
    | 'implementationPeriod'

export type Info<ContentType> = {
    title: string
    content: ContentType
}

export type Project = Entity<{
    order: UniqueNum
}, {
    title: string
    description: string
    descriptionPreview: string
    image: string | null
    src: string
    type: 'Solo' | 'Team'
    paragraphs: Record<ProjectParagraph, Info<string>> & {stack: Info<string[]> & {pictures: string[]}}
}>
