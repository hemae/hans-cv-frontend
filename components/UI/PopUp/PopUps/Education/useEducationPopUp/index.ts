import usePopUpProps from '@UI/PopUp/usePopUpProps'
import {useEffect, useState} from 'react'
import {Education} from '@apiModels/education'


type Returned = Education['data'] & {
    imageScale: boolean
}

export default function useEducationPopUp(): Returned {

    const {education} = usePopUpProps<{ education: Education }>({renderingComponent: 'Education'})!

    const {
        title,
        src,
        university,
        country,
        city,
        degree,
        image,
        shortPeriod,
        period
    } = education.data

    const [imageScale, setImageScale] = useState<boolean>(false)

    useEffect(() => setImageScale(true), [])

    useEffect(() => {
        if (imageScale) setTimeout(() => setImageScale(false), 300)
        else setTimeout(() => setImageScale(true), 8000)
    }, [imageScale])

    return {
        title,
        src,
        university,
        country,
        city,
        degree,
        image,
        shortPeriod,
        period,
        imageScale
    }
}
