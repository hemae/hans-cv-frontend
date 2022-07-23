import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {experienceThunk, getExperiences} from '@slices/experiences/experiencesThunkCreators'
import {Experience} from '@apiModels/experience'


export const experiencesSlice = getSlice<Experience>({
    entity: 'experiences',
    getEntities: getExperiences,
    entityThunk: experienceThunk
})

export default experiencesSlice.reducer as Reducer<EntitiesState<Experience>, any>
