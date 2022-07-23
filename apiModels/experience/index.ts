import {Entity, UniqueNum} from '@apiModels/common'


export type Experience = Entity<{
    order: UniqueNum
}, {
    title: string
    src: string
    image: string | null
    shortPeriod: string
    period: string
    responsibilities: string
}>
