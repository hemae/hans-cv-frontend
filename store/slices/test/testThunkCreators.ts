import {UniqueId} from '@apiModels/common'
import {getThunks} from '../../thunkGetter'
import {Test} from '@apiModels/test'


type TestsOptions = {
    id?: UniqueId
    data?: Record<string, any>
}

const thunks = getThunks<Test>({entity: 'test'})

export const getTests = thunks.getThunkGetEntities

export const testThunk = thunks.getThunkEntity

export const addSection = (options: TestsOptions) => testThunk({
    ...options,
    method: 'post'
})

export const updateSection = (options: TestsOptions) => testThunk({
    ...options,
    method: 'put'
})

export const deleteSection = (options: TestsOptions) => testThunk({
    ...options,
    method: 'delete'
})
