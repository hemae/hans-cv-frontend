import {Skill, SkillType} from '@apiModels/skill'


type Options = {
    skills: Skill[]
}

type Returned = {
    skills: Record<SkillType, Skill[]>
}

export default function useSkills(options: Options): Returned {

    const {
        skills
    } = options

    const sortedSkills: Record<SkillType, Skill[]> = {
        hard: skills.filter(skill => skill.type === 'hard'),
        soft: skills.filter(skill => skill.type === 'soft'),
        tool: skills.filter(skill => skill.type === 'tool')
    }

    return {
        skills: sortedSkills
    }
}
