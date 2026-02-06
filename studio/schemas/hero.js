export default {
    name: 'hero',
    title: 'Hero Section (Top)',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Main Heading',
            type: 'string',
            initialValue: 'Explore the DR of Cargo Logistics'
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            initialValue: 'Real-time tracking, intelligent routing, and global freight solutions powered by advanced logistics technology.'
        },
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'statsCount',
            title: 'Stats Number',
            type: 'string',
            initialValue: '20K+'
        },
        {
            name: 'statsLabel',
            title: 'Stats Label',
            type: 'string',
            initialValue: 'Global Shipments Delivered'
        }
    ]
}
