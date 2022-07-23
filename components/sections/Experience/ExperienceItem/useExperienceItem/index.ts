import {useAppDispatch} from '@store'
import {MouseEventHandler} from 'react'
import {showPopUp} from '@slices/popUp'
import {Experience} from '@apiModels/experience'

type Options = {
    experience: Experience
}

type Returned = {
    experienceClick: MouseEventHandler
}

export default function useExperienceItem(options: Options): Returned {

    const {
        experience
    } = options

    const dispatch = useAppDispatch()

    const experienceClick: MouseEventHandler = (): void => {
        dispatch(showPopUp({
            renderingComponent: 'Experience',
            props: {experience}
        }))
    }

    return {
        experienceClick
    }
}
