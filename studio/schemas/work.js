export default {
    name: 'work',
    title: 'Work Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Main Title',
            type: 'string',
            initialValue: 'AGGREGATE TRUCKING: SIMPLIFIED.'
        },
        {
            name: 'video',
            title: 'Background Video',
            type: 'file',
            options: {
                accept: 'video/mp4'
            }
        },
        {
            name: 'poster',
            title: 'Video Poster Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'WHERE WE WORK'
        },
        {
            name: 'buttonLink',
            title: 'Button Link (e.g. #projects)',
            type: 'string',
            initialValue: '#projects'
        }
    ]
}
