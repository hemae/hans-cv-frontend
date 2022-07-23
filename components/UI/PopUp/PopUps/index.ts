import {Project} from './Project'
import {FC} from 'react'
import {Experience} from '@UI/PopUp/PopUps/Experience'
import {Education} from '@UI/PopUp/PopUps/Education'


export type PopUpType =
    'Project'
    | 'Experience'
    | 'Education'

export default {
    Project,
    Experience,
    Education
} as Record<PopUpType, FC>
