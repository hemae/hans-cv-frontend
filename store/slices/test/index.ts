import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {Test} from '@apiModels/test'
import {getTests, testThunk} from '@slices/test/testThunkCreators'


export const testSlice = getSlice<Test>({
    entity: 'test',
    getEntities: getTests,
    entityThunk: testThunk
})

export default testSlice.reducer as Reducer<EntitiesState<Test>, any>
