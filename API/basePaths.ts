export type BasePathsKeys =
    'sections'
    | 'educations'
    | 'experiences'
    | 'languages'
    | 'links'
    | 'projects'
    | 'skills'

export type BasePaths =
    '/sections'
    | '/educations'
    | '/experiences'
    | '/languages'
    | '/links'
    | '/projects'
    | '/skills'

export default {
    sections: '/sections',
    educations: '/educations',
    experiences: '/experiences',
    languages: '/languages',
    links: '/links',
    skills: '/skills',
    projects: '/projects'
} as Record<BasePathsKeys, BasePaths>
