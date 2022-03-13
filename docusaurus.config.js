const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'DATAFAN',
    tagline: 'DATAFAN',
    url: 'https://www.young-datafan.com',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'image/favicon.ico',
    organizationName: 'young-datafan',
    projectName: 'young-datafan-website',
    i18n: {
        defaultLocale: "zh-CN",
        // locales: ["en", "zh-CN"],
        locales: ["zh-CN"],
        localeConfigs: {
            en: {
                label: "English",
                direction: 'ltr',
            },
            'zh-CN': {
                label: "简体中文",
                direction: 'ltr',
            },
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    sidebarCollapsible: true,
                    editLocalizedFiles: true,
                    sidebarCollapsed: false,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/young-datafan/young-datafan-website/edit/develop/',
                    remarkPlugins: [
                        [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
                    ],
                },

                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/young-datafan/young-datafan-website/edit/develop/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig: ({
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true
        },
        navbar: {
            title: '数据范',
            logo: {
                alt: 'Young DataFan Logo',
                src: 'image/logo.png',
            },
            items: [
                {
                    to: '/',
                    position: 'right',
                    label: 'Home',
                    activeBaseRegex: `^/$`,
                },
                {
                    label: 'Document',
                    position: 'right',
                    items: [
                        {
                            to: '/docs/data-integration/intro',
                            activeBaseRegex: `/docs`,
                            label: 'DataIntegration'
                        },
                        {
                            to: '/docs/data-studio',
                            activeBaseRegex: `/docs`,
                            label: 'DataStudio'
                        },
                        {
                            to: '/docs/datafan-report',
                            activeBaseRegex: `/docs`,
                            label: 'DatafanReport'
                        },
                        {
                            to: '/docs/datafan-ui',
                            activeBaseRegex: `/docs`,
                            label: 'DataFanUI'
                        },
                        {
                            to: '/docs/sqlbuilder',
                            activeBaseRegex: `/docs`,
                            label: 'SqlBuilder'
                        }
                    ]
                },
                {
                    to: '/team',
                    label: 'Team',
                    position: 'right',
                    activeBaseRegex: `/team`,
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'right',
                    activeBaseRegex: `/blog`,
                },
                {
                    href: 'https://github.com/young-datafan',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: "localeDropdown",
                    position: "right",
                },
            ],
        },

        footer: {
            style: 'light',
            links: [
                {
                    title: 'DataFan',
                    items: [
                        {
                            label: 'Document',
                            href: '/docs/data-integration',
                        },
                        {
                            label: 'FAQ',
                            href: 'https://github.com/young-datafan/data-integration/issues/507',
                        },
                        {
                            label: 'Releases',
                            href: 'https://github.com/young-datafan/data-integration/releases',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/young-datafan/data-integration',
                        },
                        {
                            label: 'Issue Tracker',
                            href: 'https://github.com/young-datafan/data-integration/issues',
                        },
                        {
                            label: 'Pull Requests',
                            href: 'https://github.com/young-datafan/data-integration/pulls',
                        },
                    ],
                }
            ],
            copyright: `<p style="padding: 0 20px 30px;color: #999999; font-weight: 400;">Apache LICENSE 2.0 Licensed, Copyright © 2019-${new Date().getFullYear()} Young-DataFan All Rights Reserved</p>`,
        },

        prism: {
            theme: require('prism-react-renderer/themes/vsLight'),
            darkTheme: darkCodeTheme,
            additionalLanguages: ['powershell','java','scala','yaml'],
        }

    }),

    plugins: [
        'docusaurus-plugin-less',
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'community',
                path: 'community',
                routeBasePath: 'community',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
    ]
};

module.exports = config;
