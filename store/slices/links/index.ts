import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {Link} from '@apiModels/link'
import {getLinks, linkThunk} from '@slices/links/linksThunkCreators'


export const linksSlice = getSlice<Link>({
    entity: 'links',
    getEntities: getLinks,
    entityThunk: linkThunk
})

export default linksSlice.reducer as Reducer<EntitiesState<Link>, any>
