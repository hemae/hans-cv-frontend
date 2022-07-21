import {memo} from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import useHeaderHiding from './useHeaderHiding'
import {useAppSelector} from '@store'


type HeaderProps = {

}

export const Header = memo<HeaderProps>((props) => {

    const {} = props

    const {isHeaderHidden} = useHeaderHiding({boundaryValue: 150})

    const {touchableDevice} = useAppSelector(state => state.settings)

    return (
        <header
            className={classNames(
                styles.main,
                {[styles.hidden]: !touchableDevice && isHeaderHidden}
            )}
        >
            Header
        </header>
    )
})
