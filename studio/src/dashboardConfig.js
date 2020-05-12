export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ebb0b0d3aa817d6cdb55d17',
                  title: 'Sanity Studio',
                  name: 'dotan-me-gatsby-studio',
                  apiId: 'a2f4a176-d0f1-4eec-ae97-9f1bbea038ea'
                },
                {
                  buildHookId: '5ebb0b0d510923d1ed2031a0',
                  title: 'Blog Website',
                  name: 'dotan-me-gatsby',
                  apiId: '285ad928-1437-4f3c-b89e-fccbda505197'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thezenvan/dotan-me-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://dotan-me-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
