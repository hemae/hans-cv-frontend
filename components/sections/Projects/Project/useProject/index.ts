import {useAppDispatch} from '@store'
import {MouseEventHandler} from 'react'
import {Project} from '@apiModels/project'
import {showPopUp} from '@slices/popUp'

type Options = {
    project: Project
}

type Returned = {
    projectClick: MouseEventHandler
}

export default function useProject(options: Options): Returned {

    const {
        project
    } = options

    const dispatch = useAppDispatch()

    const projectClick: MouseEventHandler = (): void => {
        dispatch(showPopUp({
            renderingComponent: 'Project',
            props: {project}
        }))
    }

    return {
        projectClick
    }
}
