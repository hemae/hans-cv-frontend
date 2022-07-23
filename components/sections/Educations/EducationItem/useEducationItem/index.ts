import {useAppDispatch} from '@store'
import {MouseEventHandler} from 'react'
import {showPopUp} from '@slices/popUp'
import {Education} from '@apiModels/education'

type Options = {
    education: Education
}

type Returned = {
    educationClick: MouseEventHandler
}

export default function useEducationItem(options: Options): Returned {

    const {
        education
    } = options

    const dispatch = useAppDispatch()

    const educationClick: MouseEventHandler = (): void => {
        dispatch(showPopUp({
            renderingComponent: 'Education',
            props: {education}
        }))
    }

    return {
        educationClick
    }
}
