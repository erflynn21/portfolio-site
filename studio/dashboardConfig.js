export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60407e50cfeee779f268d2a9',
                  title: 'Sanity Studio',
                  name: 'portfolio-site-studio',
                  apiId: '97dad63a-5f99-41e9-9eb5-e8502899dfca'
                },
                {
                  buildHookId: '60407e504a3de87dfff825da',
                  title: 'Blog Website',
                  name: 'portfolio-site-web',
                  apiId: '59d33e0a-b004-4b44-bf11-d36aab527f9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erflynn21/portfolio-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://portfolio-site-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
