import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {getProjects, projectThunk} from '@slices/projects/projectsThunkCreators'
import {Project} from '@apiModels/project'


export const projectsSlice = getSlice<Project>({
    entity: 'projects',
    getEntities: getProjects,
    entityThunk: projectThunk
})

export default projectsSlice.reducer as Reducer<EntitiesState<Project>, any>
