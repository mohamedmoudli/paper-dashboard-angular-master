import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/createregisteradmin',     title: 'Creation Admin',         icon:'nc-single-02',class:''},
    { path: '/guideutlisation',         title: 'Guide utlisation',             icon:' nc-book-bookmark',    class: '' },
    { path: '/processus',         title: 'Processus',             icon:'nc-ruler-pencil',    class: '' },
    { path: '/enjeu', title: 'Enjeux',     icon:'nc-settings',    class: '' },
    { path: '/partieinteresse',          title: 'Partie interessée',              icon:'nc-bullet-list-67',      class: '' },
    { path: '/risque',          title: 'Risque',              icon:'nc-bookmark-2',      class: '' },
    { path: '/Opportunite',          title: 'Opportunité',             icon:'nc-diamond',      class: '' },
    { path: '/Objective',          title: 'Objectif',              icon:' nc-spaceship',      class: '' },
    { path: '/Plandeaction',          title: 'Plan action',              icon:'nc-paper',      class: '' },
    { path: '/Synthese1',          title: 'Synthese',              icon:'nc-chart-bar-32',      class: '' },
    { path: '/reflextionguide',          title: 'Guide de reflexion',              icon:'nc-bullet-list-67',      class: '' },



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
