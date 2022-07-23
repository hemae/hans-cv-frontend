import usePopUpProps from '@UI/PopUp/usePopUpProps'
import {Project} from '@apiModels/project'
import {useEffect, useState} from 'react'


type Returned = Project['data'] & {
    imageScale: boolean
}

export default function useTestPopUp(): Returned {

    const {project} = usePopUpProps<{project: Project}>({renderingComponent: 'Project'})!

    const {
        title,
        description,
        descriptionPreview,
        image,
        src,
        paragraphs
    } = project.data

    const [imageScale, setImageScale] = useState<boolean>(false)

    useEffect(() => setImageScale(true), [])

    useEffect(() => {
        if (imageScale) setTimeout(() => setImageScale(false), 300)
        else setTimeout(() => setImageScale(true), 8000)
    }, [imageScale])

    return {
        title,
        description,
        descriptionPreview,
        image,
        imageScale,
        src,
        paragraphs
    }
}
