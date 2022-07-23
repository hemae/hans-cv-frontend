import {UniqueId} from '@apiModels/common'
import {getThunks} from '../../thunkGetter'
import {Experience} from '@apiModels/experience'


type ExperiencesOptions = {
    id?: UniqueId
    data?: Record<string, any>
}

const thunks = getThunks<Experience>({entity: 'experiences'})

export const getExperiences = thunks.getThunkGetEntities

export const experienceThunk = thunks.getThunkEntity

export const addExperience = (options: ExperiencesOptions) => experienceThunk({
    ...options,
    method: 'post'
})

export const updateExperience = (options: ExperiencesOptions) => experienceThunk({
    ...options,
    method: 'put'
})

export const deleteExperience = (options: ExperiencesOptions) => experienceThunk({
    ...options,
    method: 'delete'
})
