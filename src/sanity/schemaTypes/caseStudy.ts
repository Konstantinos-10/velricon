import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'challenge',
            title: 'The Challenge',
            type: 'text',
        }),
        defineField({
            name: 'solution',
            title: 'The Solution',
            type: 'text',
        }),
        defineField({
            name: 'results',
            title: 'The Results',
            type: 'text',
        }),
    ],
})
