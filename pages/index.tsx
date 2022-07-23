import type {NextPage} from 'next'
import styles from '@styles/pages/Home.module.scss'
import useMainPage from '@pageHooks/useMainPage'
import MainLayout from '@layouts/Main'
import {MainPageProps} from '@serverSideProps/main'
import Sections from '@sections'
import {useMemo} from 'react'

export {getServerSideProps} from '@serverSideProps/main'


const Home: NextPage<MainPageProps> = (props) => {

    const {
        sections,
        allSkillImages
    } = props

    const {heroImage} = useMainPage({sections})

    const sectionComponents = useMemo<JSX.Element[]>(() => sections.map(section => {
        const Section = Sections[section.name]
        if (!Section) return <></>
        return (
            <Section
                key={section.id}
                section={section}
            />
        )
    }), [sections])

    return (
        <MainLayout
            title={process.env.APPLICATION_TITLE}
            description={'Hardworking and passionate full-stack developer | Node.js, Next.js, ReactJS, TypeScript'}
            imagePreview={heroImage}
            combinedClassName={styles.main}
            pictures={allSkillImages}
        >
            {sectionComponents}
        </MainLayout>
    )
}

export default Home
