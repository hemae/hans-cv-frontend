import {useEffect, useState} from 'react'


type Returned = {
    x: number
    y: number
    scale: number
    rotate: number
    opacity: number
}

export default function useBackgroundItem(): Returned {

    const [x, setX] = useState<number>(Math.random() * 100)
    const [y, setY] = useState<number>(Math.random() * 100)
    const [scale, setScale] = useState<number>(Math.random() * 3 + 0.5)
    const [rotate, setRotate] = useState<number>(Math.random() * 60)
    const [opacity, setOpacity] = useState<number>(Math.random() * 0.5 + 0.1)


    useEffect(() => {
        setTimeout(() => {
            setX(prev => prev + (Math.random() - 0.5) * 2)
        }, 10000)
    }, [x])

    useEffect(() => {
        setTimeout(() => {
            setY(prev => prev + (Math.random() - 0.5) * 2)
        }, 10000)
    }, [y])

    useEffect(() => {
        setTimeout(() => {
            setOpacity(prev => prev + Math.random() - 0.5)
        }, 10000)
    }, [opacity])

    useEffect(() => {
        setTimeout(() => {
            setRotate(prev => prev + (Math.random() - 0.5) * 180)
        }, 10000)
    }, [rotate])

    useEffect(() => {
        setTimeout(() => {
            setScale(prev => prev + Math.random() - 0.5)
        }, 10000)
    }, [scale])

    return {
        x, y,
        scale,
        rotate,
        opacity
    }
}
