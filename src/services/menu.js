export async function getLeftMenuData() {
  return [
    
    {
      divider: true,
    },
    {
      title: 'Dashboard ',
      key: 'dashboardAlpha',
      url: '/dashboard/alpha',
      icon: 'icmn icmn-home',
    },

  ]
}
export async function getTopMenuData() {
  return [
    {
      title: 'Docs',
      key: 'documentation',
      url: 'https://docs.cleanuitemplate.com',
      target: '_blank',
      icon: 'icmn icmn-books',
    },
    {
      title: 'Pages',
      key: 'pages',
      icon: 'icmn icmn-stack',
      children: [{
          title: 'Dashboard Alpha',
          key: 'dashboardAlpha',
          url: '/dashboard/alpha',
        },
        {
          title: 'Dashboard Beta',
          key: 'dashboardBeta',
          url: '/dashboard/beta',
          pro: true,
        },
        {
          title: 'Dashboard Crypto',
          key: 'dashboardCrypto',
          url: '/dashboard/crypto',
          pro: true,
        },
        {
          title: 'Dashboard Gamma',
          key: 'dashboardGamma',
          url: '/dashboard/gamma',
          pro: true,
        },
        {
          title: 'Dashboard Docs',
          key: 'dashboardDocs',
          url: '/dashboard/docs',
          pro: true,
        },
        {
          divider: true,
        },
      ],
    },
    {
      title: 'Components',
      key: 'pagesBlocks',
      icon: 'icmn icmn-stack',
      children: [{
          title: 'Charts',
          key: 'charts',
          children: [{
              title: 'Chartist',
              key: 'chartist',
              url: '/charts/chartist',
            },
            {
              title: 'Chart',
              key: 'chart',
              url: '/charts/chart',
              pro: true,
            },
            {
              title: 'Peity',
              key: 'peity',
              url: '/charts/peity',
              pro: true,
            },
            {
              title: 'C3',
              key: 'c3',
              url: '/charts/c3',
              pro: true,
            },
          ],
        },
        {
          title: 'Mail Templates',
          key: 'mailTemplates',
          url: '/layout/mail-templates',
          pro: true,
        },

      ],
    },
  ]
}
