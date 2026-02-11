export default {
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
            initialValue: 'DR Enterprise LLC'
        },
        {
            name: 'description',
            title: 'First Paragraph',
            type: 'text'
        },
        {
            name: 'description2',
            title: 'Second Paragraph',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'experienceYears',
            title: 'Years of Experience (e.g. 15+)',
            type: 'string',
            initialValue: '15+'
        },
        {
            name: 'experienceLabel',
            title: 'Experience Label (e.g. Years of Experience)',
            type: 'string',
            initialValue: 'Years of Experience'
        },
        {
            name: 'features',
            title: 'Features Grid',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Feature Title' },
                        { name: 'description', type: 'string', title: 'Feature Description' },
                        {
                            name: 'icon',
                            type: 'string',
                            title: 'Icon',
                            options: {
                                list: [
                                    { title: 'Shield (Insured)', value: 'Shield' },
                                    { title: 'Check Circle (Bonded)', value: 'CheckCircle' },
                                    { title: 'Clock (Reliable)', value: 'Clock' },
                                    { title: 'Map Pin (Coverage)', value: 'MapPin' }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
