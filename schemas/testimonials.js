export default{
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name:'rank',
            title:'Rank',
            type:'number'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true, // adds crop func to images
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },
        {
            name:'year',
            title:'Year',
            type:'string'
        },
    ],
}