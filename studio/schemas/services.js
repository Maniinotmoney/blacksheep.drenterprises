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
            name: 'icon',
            title: 'Icon Name (e.g. Truck, Ship)',
            type: 'string'
        }
    ]
}
