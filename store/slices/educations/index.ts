import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {Education} from '@apiModels/education'
import {educationThunk, getEducations} from '@slices/educations/educationsThunkCreators'


export const educationsSlice = getSlice<Education>({
    entity: 'educations',
    getEntities: getEducations,
    entityThunk: educationThunk
})

export default educationsSlice.reducer as Reducer<EntitiesState<Education>, any>
