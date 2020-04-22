import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/guideutlisation',         title: 'guideutlisation',             icon:'nc-diamond',    class: '' },
    { path: '/processus',         title: 'processus',             icon:'nc-diamond',    class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/partieinteresse',          title: 'partieinteresse',              icon:'nc-diamond',      class: '' },
    { path: '/risque',          title: 'risque',              icon:'nc-diamond',      class: '' },
    { path: '/Opportunite',          title: 'Opportunite',              icon:'nc-diamond',      class: '' },
    { path: '/Objective',          title: 'Objective',              icon:'nc-diamond',      class: '' },
    { path: '/enjeu', title: 'enjeux',     icon:'nc-diamond',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
