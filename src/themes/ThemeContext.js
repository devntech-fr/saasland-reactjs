import React from "react";
import Marketing from "themes/marketing";
import Application from "themes/application";
import Erp from "themes/erp";
import Event from "themes/event";
import Support from "themes/support";

export const themes = {
    marketing: Marketing,
    app: Application,
    chat: {},
    cloud: {},
    crm: {},
    event: Event,
    software: {},
    support: Support,
    tracking: {},
    erp: Erp,
    hosting: {},
    security: {},
    hrm: {},
    landing: {},
    payment: {},
    startup: {},
}

export const variants = [
    'marketing',
    'app',
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
    'hrm',
    'landing',
    'payment',
    'startup'
];

function changeTheme(name) {
    return themes[name];
}

export const ThemeContext = React.createContext({
    current: '',
    default: 'marketing',
    themes: themes,
    variants: variants,
    changeTheme: changeTheme(),
});
ThemeContext.displayName = 'SaasLand variant';
