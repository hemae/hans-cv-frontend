import {Entity, UniqueNum} from '@apiModels/common'


export type Education = Entity<{
    order: UniqueNum
}, {
    title: string
    src: string
    university: string
    country: string
    city: string
    period: string
    shortPeriod: string
    degree: string
    image: string | null
}>
