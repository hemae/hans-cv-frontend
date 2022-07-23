import usePopUpProps from '@UI/PopUp/usePopUpProps'
import {useEffect, useState} from 'react'
import {Experience} from '@apiModels/experience'


type Returned = Experience['data'] & {
    imageScale: boolean
}

export default function useExperiencePopUp(): Returned {

    const {experience} = usePopUpProps<{ experience: Experience }>({renderingComponent: 'Experience'})!

    const {
        title,
        src,
        image,
        shortPeriod,
        period,
        responsibilities
    } = experience.data

    const [imageScale, setImageScale] = useState<boolean>(false)

    useEffect(() => setImageScale(true), [])

    useEffect(() => {
        if (imageScale) setTimeout(() => setImageScale(false), 300)
        else setTimeout(() => setImageScale(true), 8000)
    }, [imageScale])

    return {
        title,
        src,
        image,
        shortPeriod,
        period,
        responsibilities,
        imageScale
    }
}
