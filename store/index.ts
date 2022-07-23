import {combineReducers, configureStore} from '@reduxjs/toolkit'

// reducers
import {
    sectionsSlice,
    educationsSlice,
    experiencesSlice,
    skillsSlice,
    linksSlice,
    projectsSlice,
    languagesSlice,

    authSlice,
    uploadSlice,

    alertSlice,
    settingsSlice,
    popUpSlice
} from '@slices'

// redux
import {createWrapper} from 'next-redux-wrapper'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'


const reducer = combineReducers({
    sections: sectionsSlice.reducer,
    educations: educationsSlice.reducer,
    experiences: experiencesSlice.reducer,
    skills: skillsSlice.reducer,
    links: linksSlice.reducer,
    projects: projectsSlice.reducer,
    languages: languagesSlice.reducer,

    auth: authSlice.reducer,
    upload: uploadSlice.reducer,

    popUp: popUpSlice.reducer,
    settings: settingsSlice.reducer,
    alert: alertSlice.reducer
})

const setupStore = () => configureStore({
    reducer,
    devTools: true
})

const store = setupStore()

export type State = ReturnType<typeof reducer>
export type Store = ReturnType<typeof setupStore>
export type Dispatch = typeof store.dispatch

export const wrapper = createWrapper<Store>(setupStore)

export const slices = {
    sectionsSlice,
    educationsSlice,
    experiencesSlice,
    skillsSlice,
    linksSlice,
    projectsSlice,
    languagesSlice,
    authSlice,
    uploadSlice,

    alertSlice,
    settingsSlice,
    popUpSlice
}

export const useAppDispatch = () => useDispatch<Dispatch>()
export const useAppSelector: TypedUseSelectorHook<State> = useSelector

export default store
