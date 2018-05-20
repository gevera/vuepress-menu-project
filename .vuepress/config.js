module.exports={
  locales: {
     '/': {
        lang: 'ru-RU',
      	title: 'АЭРОКОФЕ',
      	description: 'Лучшие блюда Башкортостана, не покидая аэропорт'
     },
     '/eng/': {
          lang:'en-US',
      	  title: 'AEROCAFFE',
      	  description: 'The Best dishes of Bashkortostan without leaving the airport'
     }
  },
  themeConfig: {
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages / Языки',
        // label for this locale in the language dropdown
        label: 'Русский',
        
        sidebar: {
          '/': [
                '',
                {
                  title: 'Меню',
                  collapsable: false,
                  children: [
                    '/menu/',
                    '/menu/drinks',
                    '/menu/salads',
                    '/menu/soups'
                  ]
                },
          ],
        }
      },
      '/eng/': {
        selectText: 'Languages / 选择语言',
        label: 'English',
        sidebar: {
          '/eng/': [
                   '',
                   {
                    title: 'Menu',
                    collapsable: false,
                    children: [
                      '/eng/menu/',
                      '/eng/menu/drinks',
                      '/eng/menu/salads',
                      '/eng/menu/soups'
                    ]
                  },
          ],

        }
      }
    }
  }

}
