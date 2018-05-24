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
        nav: [
            	 { text: 'Официальная страница', link: 'http://trendufa.ru/airport' },
            	 { text: 'Инстаграм', link: 'https://www.instagram.com/trendufa/' },
            	 { text: 'ВКонтакте', link: 'https://vk.com/trendufa' }
             ],
        sidebar: {
          '/': [
                [
              		'', 'Главная Страница'
            		],
                {
                  title: 'Меню',
                  collapsable: false,
                  children: [
                    '/menu/',
                    '/menu/national/',
                    '/menu/bar/'
                  ]
                }
          ]
        }
      },
      '/eng/': {
        selectText: 'Languages / 选择语言',
        label: 'English',
	nav: [
         { text: 'Official Page', link: 'http://trendufa.ru/airport' },
         { text: 'Instagram', link: 'https://www.instagram.com/trendufa/' },
         { text: 'VKontakte', link: 'https://vk.com/trendufa' }
        ],
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
