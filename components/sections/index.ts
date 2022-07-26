import {Section, SectionName} from '@apiModels/sections'
import {NamedExoticComponent} from 'react'

import {Hero} from './Hero'
import {Links} from '@components/sections/Links'
import {Projects} from '@components/sections/Projects'
import {Experience} from '@components/sections/Experience'
import {Skills} from '@components/sections/Skills'
import {Educations} from '@components/sections/Educations'
import {Languages} from '@components/sections/Languages'
import {Description} from '@components/sections/Description'


export default {
    Hero,
    Description,
    Links,
    Projects,
    Experience,
    Skills,
    Educations,
    Languages
} as Record<SectionName, NamedExoticComponent<{section: Section}>>
