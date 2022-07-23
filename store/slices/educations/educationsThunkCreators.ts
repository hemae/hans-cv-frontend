import {UniqueId} from '@apiModels/common'
import {getThunks} from '../../thunkGetter'
import {Education} from '@apiModels/education'


type EducationsOptions = {
    id?: UniqueId
    data?: Record<string, any>
}

const thunks = getThunks<Education>({entity: 'educations'})

export const getEducations = thunks.getThunkGetEntities

export const educationThunk = thunks.getThunkEntity

export const addEducation = (options: EducationsOptions) => educationThunk({
    ...options,
    method: 'post'
})

export const updateEducation = (options: EducationsOptions) => educationThunk({
    ...options,
    method: 'put'
})

export const deleteEducation = (options: EducationsOptions) => educationThunk({
    ...options,
    method: 'delete'
})
