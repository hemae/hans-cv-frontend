import {Entity, UniqueNum} from '@apiModels/common'


export type Language = Entity<{
    order: UniqueNum
}, {
    title: string
    level: string
    image: string | null
}>
