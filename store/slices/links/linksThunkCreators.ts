import {UniqueId} from '@apiModels/common'
import {getThunks} from '../../thunkGetter'
import {Link} from '@apiModels/link'


type LinksOptions = {
    id?: UniqueId
    data?: Record<string, any>
}

const thunks = getThunks<Link>({entity: 'links'})

export const getLinks = thunks.getThunkGetEntities

export const linkThunk = thunks.getThunkEntity

export const addLink = (options: LinksOptions) => linkThunk({
    ...options,
    method: 'post'
})

export const updateLink = (options: LinksOptions) => linkThunk({
    ...options,
    method: 'put'
})

export const deleteLink = (options: LinksOptions) => linkThunk({
    ...options,
    method: 'delete'
})
