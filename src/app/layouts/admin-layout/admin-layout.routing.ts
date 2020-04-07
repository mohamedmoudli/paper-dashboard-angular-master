import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import {LoginComponent} from '../../pages/login/login.component';
import {CreateRegisterComponent} from '../../pages/create-register/create-register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {LoginGuard} from '../../Guard/login.guard';
import {AjouterCategoriesPIComponent} from '../../PartieInteresse/ajouter-categories-pi/ajouter-categories-pi.component';
import {AjouterPIComponent} from '../../PartieInteresse/ajouter-pi/ajouter-pi.component';
import {CategoriesPIComponent} from '../../PartieInteresse/categories-pi/categories-pi.component';
import {ExigenecesPIComponent} from '../../PartieInteresse/exigeneces-pi/exigeneces-pi.component';
import {HistoriqueExgPIComponent} from '../../PartieInteresse/historique-exg-pi/historique-exg-pi.component';
import {PartieinteresseComponent} from '../../PartieInteresse/partieinteresse/partieinteresse.component';
import {PipertinanteComponent} from '../../PartieInteresse/pipertinante/pipertinante.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'home',     component: HomeComponent , canActivate: [LoginGuard] },
    { path: 'createregister',     component: CreateRegisterComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'ajouterPI',  component: AjouterPIComponent },
    { path: 'categoriesPI',  component: CategoriesPIComponent },
    { path: 'exigencesPI',  component: ExigenecesPIComponent },
    { path: 'historiqueExigPI',  component: HistoriqueExgPIComponent },
    { path: 'partieinteresse',  component: PartieinteresseComponent },
    { path: 'pipertinante',  component: PipertinanteComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
