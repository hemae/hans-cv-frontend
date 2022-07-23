import {UniqueId} from '@apiModels/common'
import {getThunks} from '../../thunkGetter'
import {Skill} from '@apiModels/skill'


type SkillsOptions = {
    id?: UniqueId
    data?: Record<string, any>
}

const thunks = getThunks<Skill>({entity: 'skills'})

export const getSkills = thunks.getThunkGetEntities

export const skillThunk = thunks.getThunkEntity

export const addSkill = (options: SkillsOptions) => skillThunk({
    ...options,
    method: 'post'
})

export const updateSkill = (options: SkillsOptions) => skillThunk({
    ...options,
    method: 'put'
})

export const deleteSkill = (options: SkillsOptions) => skillThunk({
    ...options,
    method: 'delete'
})
