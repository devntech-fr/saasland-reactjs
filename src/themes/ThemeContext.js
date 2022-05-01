import React from "react";
import Marketing from "themes/marketing";
import Application from "themes/application";
import Erp from "themes/erp";
import Support from "themes/support";

export const themes = {
    marketing: Marketing,
    application: Application,
    chat: {
        NavbarButton: {
            className: `menu_cus`
        }
    },
    cloud: {
        NavbarButton: {
            className: `btn_get_radious menu_custfive`
        },
        DeveloperTab: {
            NavTabs: {
                className: `develor_tab mb-30`
            }
        }
    },
    crm: {},
    event: {},
    software: {},
    support: Support,
    tracking: {},
    erp: Erp,
    hosting: {},
    security: {},
    management: {},
    landing: {},
    payment: {},
    startup: {},
}

export const variants = [
    'marketing',
    'application',
    'chat',
    'cloud',
    'crm',
    'erp',
    'event',
    'hosting',
    'security',
    'software',
    'support',
    'tracking',
    'management',
    'landing',
    'payment',
    'startup'
];

function changeTheme(name) {
    return themes[name];
}

export const ThemeContext = React.createContext({
    current: 'marketing',
    default: 'marketing',
    theme: themes.marketing,
    changeTheme: changeTheme(),
});
ThemeContext.displayName = 'SaasLand variant';
