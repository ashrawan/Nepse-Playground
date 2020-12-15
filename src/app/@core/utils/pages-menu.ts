import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/console/dashboard',
        home: true,
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Live Market',
        icon: 'activity-outline',
        link: '/console/livemarket'
    },
    {
        title: 'Competitors',
        icon: 'bar-chart-outline',
        link: '/console/competitors'
    },
    {
        title: 'Tools',
        icon: 'flip-2-outline',
        children: [
            {
                title: 'Stock Differential',
                link: '/console/tools/stockcalc',
            },
            {
                title: 'Calculator',
                link: '/console/tools/indices',
            },
        ],
    },
    {
        title: 'News',
        icon: 'bulb-outline',
        link: '/console/news'
    },
    {
        title: 'Mixed Analysis',
        icon: 'eye-outline',
        link: '/console/mixedanalysis'
    },
    {
        title: 'SETTINGS',
        group: true,
    },
    {
        title: 'Preference',
        icon: 'settings-2-outline',
        link: '/console/general-settings',
    },
];
