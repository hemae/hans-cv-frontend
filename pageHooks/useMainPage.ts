import {Section} from '@apiModels/sections'
import {HeroType} from '@apiModels/sections/hero'


type Options = {
    sections: Section[]
}

type Returned = {
    heroImage: string | null
}

export default function useMainPage(options: Options): Returned {

    const {sections} = options

    const heroSection = sections.find(section => section.name === 'Hero') as Section<HeroType> | undefined
    const heroImage = heroSection?.data.heroImage || null

    return {
        heroImage
    }
}
