import {UniqueId} from '@apiModels/common'
import {getThunks} from '../../thunkGetter'
import {Language} from '@apiModels/language'


type LanguagesOptions = {
    id?: UniqueId
    data?: Record<string, any>
}

const thunks = getThunks<Language>({entity: 'languages'})

export const getLanguages = thunks.getThunkGetEntities

export const languageThunk = thunks.getThunkEntity

export const addLanguage = (options: LanguagesOptions) => languageThunk({
    ...options,
    method: 'post'
})

export const updateLanguage = (options: LanguagesOptions) => languageThunk({
    ...options,
    method: 'put'
})

export const deleteLanguage = (options: LanguagesOptions) => languageThunk({
    ...options,
    method: 'delete'
})
