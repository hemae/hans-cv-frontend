import {memo} from 'react'
import styles from './BackgroundItem.module.scss'
import useBackgroundItem from './useBackgroundItem'


export const BackgroundItem = memo<{picture: string}>(({picture}) => {

    const {
        x, y,
        scale,
        rotate,
        opacity
    } = useBackgroundItem()

    return (
        <div
            className={styles.main}
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `scale(${scale}) rotate(${rotate}deg)`,
                opacity: `${opacity}`
            }}
        ><img src={picture} alt='icon'/></div>
    )
})
