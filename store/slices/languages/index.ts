import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {getLanguages, languageThunk} from '@slices/languages/languagesThunkCreators'
import {Language} from '@apiModels/language'


export const languagesSlice = getSlice<Language>({
    entity: 'languages',
    getEntities: getLanguages,
    entityThunk: languageThunk
})

export default languagesSlice.reducer as Reducer<EntitiesState<Language>, any>
