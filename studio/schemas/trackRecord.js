export default {
    name: 'trackRecord',
    title: 'Track Record Section',
    type: 'document',
    fields: [
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            initialValue: 'OUR TRACK RECORD'
        },
        {
            name: 'title',
            title: 'Main Title',
            type: 'text',
            rows: 2,
            initialValue: 'A history of unparalleled service\nand relentless innovation'
        },
        {
            name: 'gallery',
            title: 'Gallery Images (3 items)',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: Rule => Rule.max(3).warning('The design supports exactly 3 images.')
        },
        {
            name: 'sinceYear',
            title: 'Since Year',
            type: 'string',
            initialValue: '2020'
        },
        {
            name: 'description',
            title: 'Description Paragraph',
            type: 'text',
            rows: 4
        }
    ]
}
