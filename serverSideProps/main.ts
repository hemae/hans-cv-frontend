import {StringResourcesProps} from '@serverSideProps/types'
import {GetServerSideProps} from 'next'
import {parseLocale} from '@helpers/locale'
import {cacheControl} from '@serverHandlers'


export type MainPageProps = StringResourcesProps & {

}


export const getServerSideProps: GetServerSideProps<MainPageProps | {}> = async (context) => {
    let props = null
    try {
        const {req, res} = context
        cacheControl(res)

        const {locale} = req.cookies

        let requestLocale = parseLocale(req.rawHeaders[req.rawHeaders.findIndex(el => el === 'Accept-Language') + 1])

        props = {

        }
    } catch (e) {
        console.log(e)
    }

    return {
        props: props || {},
        redirect: props ? undefined : {destination: '/500'},
    }
}
