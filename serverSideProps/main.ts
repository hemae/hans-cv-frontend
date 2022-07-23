import {StringResourcesProps} from '@serverSideProps/types'
import {GetServerSideProps} from 'next'
import {cacheControl} from '@serverHandlers'
import {Section} from '@apiModels/sections'
import handlers from '@requestHandlers'
import getQuery from '@helpers/query'
import {Link} from '@apiModels/link'
import {Experience} from '@apiModels/experience'
import {Project} from '@apiModels/project'
import {Skill} from '@apiModels/skill'
import {Education} from '@apiModels/education'
import {Language} from '@apiModels/language'
import {getAllImagesHandler} from '../store/API/uploadAPI'


export type MainPageProps = StringResourcesProps & {
    sections: Section[]
    allSkillImages: string[]
}


export const getServerSideProps: GetServerSideProps<MainPageProps | {}> = async (context) => {
    let props = null
    try {
        const {req, res} = context
        cacheControl(res)

        const sections = await handlers.gets<Section>({
            entity: 'sections',
            token: null,
            query: getQuery({sort: 'asc:order'}),
            whole: true
        }) as Section[]

        const links = await handlers.gets<Link>({
            entity: 'links',
            token: null,
            query: getQuery({sort: 'asc:order'}),
            whole: true
        }) as Link[]

        const experiences = await handlers.gets<Experience>({
            entity: 'experiences',
            token: null,
            query: getQuery({sort: 'asc:order'}),
            whole: true
        }) as Experience[]

        const projects = await handlers.gets<Project>({
            entity: 'projects',
            token: null,
            query: getQuery({sort: 'asc:order'}),
            whole: true
        }) as Project[]

        const skills = await handlers.gets<Skill>({
            entity: 'skills',
            token: null,
            whole: true
        }) as Skill[]

        const educations = await handlers.gets<Education>({
            entity: 'educations',
            token: null,
            query: getQuery({sort: 'asc:order'}),
            whole: true
        }) as Education[]

        const languages = await handlers.gets<Language>({
            entity: 'languages',
            token: null,
            query: getQuery({sort: 'asc:order'}),
            whole: true
        }) as Language[]

        const allSkillImages = await getAllImagesHandler('skills', null)

        const linksSection = sections.find(section => section?.name === 'Links')
        const newLinksSection = {...linksSection, data: links}

        const projectsSection = sections.find(section => section?.name === 'Projects')
        const newProjectsSection = {...projectsSection, data: projects}

        const experienceSection = sections.find(section => section?.name === 'Experience')
        const newExperienceSection = {...experienceSection, data: experiences}

        const skillsSection = sections.find(section => section?.name === 'Skills')
        const newSkillsSection = {...skillsSection, data: skills}

        const educationsSection = sections.find(section => section?.name === 'Educations')
        const newEducationsSection = {...educationsSection, data: educations}

        const languagesSection = sections.find(section => section?.name === 'Languages')
        const newLanguagesSection = {...languagesSection, data: languages}

        const newSections = sections.map(section => {
            if (section?.name === 'Links') return newLinksSection
            if (section?.name === 'Projects') return newProjectsSection
            if (section?.name === 'Experience') return newExperienceSection
            if (section?.name === 'Skills') return newSkillsSection
            if (section?.name === 'Educations') return newEducationsSection
            if (section?.name === 'Languages') return newLanguagesSection
            return section
        })

        props = {
            sections: newSections,
            allSkillImages
        }
    } catch (e) {
        console.log(e)
    }

    return {
        props: props || {},
        redirect: props ? undefined : {destination: '/500'},
    }
}
