import {Entity, UniqueNum} from '@apiModels/common'
import {HeroType} from '@apiModels/sections/hero'
import {LinksType} from '@apiModels/sections/links'
import {ProjectsType} from '@apiModels/sections/projects'
import {ExperienceType} from '@apiModels/sections/experience'
import {SkillsType} from '@apiModels/sections/skills'
import {EducationsType} from '@apiModels/sections/educatons'
import {LanguagesType} from '@apiModels/sections/languages'


export type SectionName =
    'Hero'
    | 'Links'
    | 'Projects'
    | 'Experience'
    | 'Skills'
    | 'Educations'
    | 'Languages'

export type SectionType =
    HeroType
    | LinksType
    | ProjectsType
    | ExperienceType
    | SkillsType
    | EducationsType
    | LanguagesType

export type Section<SectionDataType = SectionType> = Entity<{
    name: SectionName
    order: UniqueNum
    title?: string
}, SectionDataType>
