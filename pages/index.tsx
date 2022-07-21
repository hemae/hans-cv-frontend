import type {NextPage} from 'next'
import styles from '@styles/pages/Home.module.scss'
import useMainPage from '@pageHooks/useMainPage'
import MainLayout from '@layouts/Main'

export {getServerSideProps} from '@serverSideProps/main'


const Home: NextPage = () => {

    const {} = useMainPage({})

    return (
        <MainLayout
            title='Main page'
            description='Main page description'
            combinedClassName={styles.main}
        >
            Main
        </MainLayout>
    )
}

export default Home
