export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Project Name'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image'
    },
    {
        name: 'url',
        title: 'URL',
        type: 'url'
    },
    {
        name: 'description',
        title: 'Description',
        type: 'string'
    },
    {
        name: 'status',
        title: 'Status',
        type: 'string'
    },
    {
      name: 'category',
      type: 'object',
      title: 'Category',
      fields: [
        {
            title: 'Category',
            name: 'Category',
            type: 'reference',
            to: [{type: 'category'}]
            
        }
      ]
    },
    {
      name: 'github',
      type: 'url',
      title: 'Github URL',
      description: 'If in a private repo, leave black'
    }
  ]
}