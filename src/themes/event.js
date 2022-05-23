export default {
    name: 'event',
    header: {
        name: 'default',
        children: [
            {
                navbar: {
                    className: 'menu_four hosting_menu',
                    children: [
                        {
                            container: {
                                className: 'custom_container p0',
                                children: [
                                    {
                                        menu: {
                                            className: 'pl_120 mr-auto ml-auto'
                                        },
                                        button: {
                                            className: `menu_cus`,
                                        },
                                    }
                                ]
                            },
                        }
                    ]
                },
            }
        ]
    },
    sections: [
        {
            name: 'AgencyBanner',
            data: {}
        },
        {
            name: 'MarketingService',
            data: {}
        },
        {
            name: 'AgencyAbout',
            data: {}
        },
        {
            name: 'Features',
            data: {}
        },
        {
            name: 'MarketingTestimonials',
            data: {}
        },
        {
            name: 'AgencyAction',
            data: {}
        },
    ],
    footer: {
        name: 'FooterTwo',
        data: {}
    }
}
