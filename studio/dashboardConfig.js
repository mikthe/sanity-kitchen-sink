export default {
  widgets: [
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
                  buildHookId: '5fcf677c88cedfc19a6cb215',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u9ogb54m',
                  apiId: '9441ee31-70d6-49e4-b303-98c0f9360732'
                },
                {
                  buildHookId: '5fcf677d862fdcbf0f9d8b3f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-snbay46p',
                  apiId: 'c8c3e276-8bfb-4e3b-ad7e-014dda347839'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikthe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-snbay46p.netlify.app', category: 'apps'}
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
