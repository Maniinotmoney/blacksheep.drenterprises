export default {
    name: 'heroCarousel',
    title: 'Main Slider (Carousel)',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading Lines',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Each string is a new line in the big hero text.'
        },
        {
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'alignment',
            title: 'Text Alignment',
            type: 'string',
            options: {
                list: [
                    { title: 'Center', value: 'center' },
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
            },
            initialValue: 'center'
        }
    ],
    preview: {
        select: {
            title: 'heading.0',
            media: 'image'
        }
    }
}
