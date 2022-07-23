import {Entity, UniqueNum} from '@apiModels/common'


export type Link = Entity<{
    order: UniqueNum
    name: string
}, {
    src: string
    content: string | null
    image: string | null
}>
