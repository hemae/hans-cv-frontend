import {memo} from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
// import useHeaderHiding from './useHeaderHiding'
import {useAppSelector} from '@store'


type HeaderProps = {}

export const Header = memo<HeaderProps>((props) => {

    const {} = props

    // const {isHeaderHidden} = useHeaderHiding({boundaryValue: 150})

    const {touchableDevice} = useAppSelector(state => state.settings)

    return (
        <header
            className={classNames(
                styles.main
                // {[styles.hidden]: !touchableDevice && isHeaderHidden}
            )}
        >
            <div>
                <div
                    className={styles.main__icon}
                ><img src='/pdf.png' alt='pdf-icon'/></div>
                <div
                    className={styles.main__icon}
                >
                    <img src='/github.png' alt='github-icon'/>
                    <div>
                        <a href='https://github.com/hemae/hans-cv-backend' target='_blank'>Backend</a>
                        <a href='https://github.com/hemae/hans-cv-frontend' target='_blank'>Frontend</a>
                    </div>
                </div>
            </div>
        </header>
    )
})
