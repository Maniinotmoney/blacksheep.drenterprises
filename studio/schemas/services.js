export default {
    name: 'services',
    title: 'Services Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Service Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Card Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'features',
            title: 'Features List',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}
