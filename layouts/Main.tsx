import {FC, memo} from 'react'
import styles from '@styles/layouts/Main.module.scss'
import {Footer, Header} from '@components'
// import {Script} from '@apiModels/layouts/scripts'
import {HeadComponent} from '@appComponents'
import classNames from 'classnames'
// import {Layouts} from '@apiModels/layouts'


type MainLayoutProps = {
    // layouts?: Layouts
    title?: string
    description?: string
    imagePreview?: string | null
    // scripts?: Script[] | null
    children: JSX.Element[] | JSX.Element | string
    className?: string
    combinedClassName?: string
}

const MainLayout: FC<MainLayoutProps> = (props) => {

    const {
        // layouts,
        children,
        title,
        description,
        className,
        combinedClassName,
        imagePreview
    } = props


    // if (!layouts) return (
    //     <main className={
    //         combinedClassName
    //             ? classNames(styles.main, combinedClassName)
    //             : className || styles.main
    //     }>{children}</main>
    // )

    // const {
    //     header,
    //     footer,
    //     contacts,
    //     acceptLanguages,
    //     scripts,
    //     cookieMessage,
    // } = layouts

    return (
        <>
            <HeadComponent
                title={title || 'Untitled'}
                description={description || 'No description'}
                // scripts={scripts.data}
                imagePreview={imagePreview}
            />
            <Header/>
            <main className={
                combinedClassName
                    ? classNames(styles.main, combinedClassName)
                    : className || styles.main
            }>{children}</main>
            <Footer/>
        </>
    )
}

export default memo<MainLayoutProps>(MainLayout)
