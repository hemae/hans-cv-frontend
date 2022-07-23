import {UniqueId} from '@apiModels/common'
import {getThunks} from '../../thunkGetter'
import {Project} from '@apiModels/project'


type ProjectsOptions = {
    id?: UniqueId
    data?: Record<string, any>
}

const thunks = getThunks<Project>({entity: 'projects'})

export const getProjects = thunks.getThunkGetEntities

export const projectThunk = thunks.getThunkEntity

export const addProject = (options: ProjectsOptions) => projectThunk({
    ...options,
    method: 'post'
})

export const updateProject = (options: ProjectsOptions) => projectThunk({
    ...options,
    method: 'put'
})

export const deleteProject = (options: ProjectsOptions) => projectThunk({
    ...options,
    method: 'delete'
})
