import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { caseStudy } from './caseStudy'
import { news } from './news'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, caseStudy, news],
}
