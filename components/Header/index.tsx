import {memo, MouseEventHandler, useState} from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import useHeaderHiding from './useHeaderHiding'
import {useAppSelector} from '@store'


type HeaderProps = {}

export const Header = memo<HeaderProps>((props) => {

    const {} = props

    const {isHeaderHidden} = useHeaderHiding({boundaryValue: 150})

    const [popUpShown, setPopUpShown] = useState<boolean>(false)

    const githubClick: MouseEventHandler = (): void => {
        setPopUpShown(prev => !prev)
    }

    const {touchableDevice} = useAppSelector(state => state.settings)

    return (
        <header
            className={classNames(
                styles.main,
                {[styles.hidden]: isHeaderHidden}
            )}
        >
            <div>
                <a
                    className={styles.main__icon}
                    href='/Arkhipov_Andrey_CV.pdf'
                    target='_blank'
                ><img src='/pdf.png' alt='pdf-icon'/></a>
                <div
                    className={styles.main__icon}
                    onClick={githubClick}
                >
                    <img src='/github.png' alt='github-icon'/>
                    <div
                        className={classNames(styles.main__popUp, {[styles.active]: popUpShown})}
                    >
                        <a href='https://github.com/hemae/hans-cv-backend' target='_blank'>Backend</a>
                        <a href='https://github.com/hemae/hans-cv-frontend' target='_blank'>Frontend</a>
                    </div>
                </div>
            </div>
        </header>
    )
})
