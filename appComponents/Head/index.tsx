import {memo, useEffect} from 'react'
import Head from 'next/head'
// import {Script} from '@apiModels/layouts/scripts'
import smoothscroll from 'smoothscroll-polyfill'
import {$primary} from '@styles/colors'


type HeadProps = {
    title: string
    description: string
    imagePreview?: string | null
    // scripts?: Script[] | null | undefined
}

export const HeadComponent = memo<HeadProps>((props) => {

    const {
        title,
        description,
        imagePreview,
        // scripts
    } = props

    useEffect(() => {
        try {
            //@ts-ignore
            window.__forceSmoothScrollPolyfill__ = true
            smoothscroll.polyfill()
        } catch (e) {
        }
    }, [])

    return (
        <Head>
            <title>{title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8'/>
            <meta name='theme-color' content={$primary}/>
            <meta name='description' content={description}/>
            {imagePreview &&
            <meta
                property="og:image"
                content={`${process.env.FRONTEND_DOMAIN}${imagePreview}`}
            />}
            {/*{process.env.NODE_ENV !== 'development' && !!scripts && scripts.map(script => {*/}
            {/*    return (*/}
            {/*        <script*/}
            {/*            key={script.id}*/}
            {/*            dangerouslySetInnerHTML={{__html: script.script || script.src || ''}}*/}
            {/*        />*/}
            {/*    )*/}
            {/*})}*/}
        </Head>
    )
})
