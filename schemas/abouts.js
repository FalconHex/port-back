export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'rank',
            title:'Rank',
            type:'number'
        },
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
            hotspot: true,
            },
        },
        
    ],
    orderings: [
        {
            title: 'Rank',
            name: 'rank',
            by: [
                {field: 'rank', direction: 'asc'}
            ]
        },
    ]
}