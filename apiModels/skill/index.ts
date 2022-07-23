import {Entity} from '@apiModels/common'


export type SkillType =
    'hard'
    | 'soft'
    | 'tool'

export type Skill = Entity<{
    type: SkillType
}, {
    title: string
    image?: string
}>
