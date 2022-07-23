import {FC, memo, useMemo} from 'react'
import styles from './AppBackground.module.scss'
import useAppBackground from './useAppBackground'
import {BackgroundItem} from './BackgroundItem'
import classNames from 'classnames'


export const AppBackground = memo<{pictures: string[]}>(({pictures}) => {

    const {items, isBackgroundShown} = useAppBackground({picturesCount: pictures.length})

    const itemComponents = useMemo<JSX.Element[]>(
        () => items.map(item => {
            return (
                <BackgroundItem
                    key={item.toString()}
                    picture={pictures[item % pictures.length]}
                />
            )
        }), [items.length, pictures]
    )

    return (
        <>
            <section
                id='background'
                className={styles.background}
                style={{backgroundImage: `url(/main-background.png)`}}
            />
            <section
                id='pale'
                className={styles.pale}
            />
            <aside className={classNames(
                styles.main,
                {[styles.shown]: isBackgroundShown}
            )}>
                {itemComponents}
            </aside>
        </>
    )
})
