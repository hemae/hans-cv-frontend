import {Reducer} from '@reduxjs/toolkit'
import getSlice, {EntitiesState} from '@slices/getSlice'
import {Skill} from '@apiModels/skill'
import {getSkills, skillThunk} from '@slices/skills/skillsThunkCreators'


export const skillsSlice = getSlice<Skill>({
    entity: 'skills',
    getEntities: getSkills,
    entityThunk: skillThunk
})

export default skillsSlice.reducer as Reducer<EntitiesState<Skill>, any>
