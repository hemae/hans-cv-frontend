import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {getSections, sectionThunk} from '@slices/sections/sectionsThunkCreators'
import {Section} from '@apiModels/sections'


export const sectionsSlice = getSlice<Section>({
    entity: 'sections',
    getEntities: getSections,
    entityThunk: sectionThunk
})

export default sectionsSlice.reducer as Reducer<EntitiesState<Section>, any>
