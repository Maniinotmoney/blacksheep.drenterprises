export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'clientName',
            title: 'Client Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'text'
        },
        {
            name: 'stars',
            title: 'Stars (1-5)',
            type: 'number',
            validation: Rule => Rule.required().min(1).max(5)
        }
    ]
}
