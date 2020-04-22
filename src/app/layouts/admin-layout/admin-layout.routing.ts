import { Routes } from '@angular/router';


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
import {AjouterCategoriesPIComponent} from '../../PartieInteresse/Create-categories-pi/ajouter-categories-pi.component';
import {AjouterPIComponent} from '../../PartieInteresse/Create-pi/ajouter-pi.component';
import {CategoriesPIComponent} from '../../PartieInteresse/categories-pi/categories-pi.component';
import {ExigenecesPIComponent} from '../../PartieInteresse/exigeneces-pi/exigeneces-pi.component';
import {HistoriqueExgPIComponent} from '../../PartieInteresse/historique-exg-pi/historique-exg-pi.component';
import {PartieinteresseComponent} from '../../PartieInteresse/partieinteresse/partieinteresse.component';
import {PipertinanteComponent} from '../../PartieInteresse/pipertinante/pipertinante.component';
import {EnjeuComponent} from '../../Enjeux/enjeu/enjeu.component';
import {AjouterEnjeuComponent} from '../../Enjeux/Create-enjeu-extern/ajouter-enjeu.component';
import {GuideutilisationComponent} from '../../GuideUtilisation/guideutilisation/guideutilisation.component';
import {ProcessusComponent} from '../../Périmetre/processus/processus.component';
import {AjouterprocessusComponent} from '../../Périmetre/Create-processus/ajouterprocessus.component';
import {AjouterGuideUtilisationComponent} from '../../GuideUtilisation/ajouter-guide-utilisation/ajouter-guide-utilisation.component';
import {HistoriquePIpertinanteComponent} from '../../PartieInteresse/historique-pipertinante/historique-pipertinante.component';
import {EnjeuForceComponent} from '../../Enjeux/Create-enjeu-intern/enjeu-force.component';
import {CreateCategorieComponent} from '../../Enjeux/create-categorie-intern/create-categorie.component';
import {CreateCategorieExternComponent} from '../../Enjeux/create-categorie-extern/create-categorie-extern.component';
import {SyntheseEnjeuComponent} from '../../Enjeux/synthese-enjeu/synthese-enjeu.component';
import {RisqueComponent} from '../../Risque/risque/risque.component';
import {AjouterrisqueComponent} from '../../Risque/Create-risque/ajouterrisque.component';
import {HistoriquerisqueComponent} from '../../Risque/historiquerisque/historiquerisque.component';
import {Test5Component} from '../../test5/test5.component';
import {Test6Component} from '../../test6/test6.component';
import {CategorieRisqueComponent} from '../../Risque/categorie-risque/categorie-risque.component';
import {StrategiqueRisqueComponent} from '../../Risque/strategique-risque/strategique-risque.component';
import {CategorieInternComponent} from '../../Enjeux/categorie-intern/categorie-intern.component';
import {CategorieExternComponent} from '../../Enjeux/categorie-extern/categorie-extern.component';
import {OpportuniteComponent} from '../../Opportunite/opportunite/opportunite.component';
import {CreateOpportuniteComponent} from '../../Opportunite/create-opportunite/create-opportunite.component';
import {HistoriqueOpportuniteComponent} from '../../Opportunite/historique-opportunite/historique-opportunite.component';
import {CategorieOpportuniteComponent} from '../../Opportunite/categorie-opportunite/categorie-opportunite.component';
import {StrategiqueOpportuniteComponent} from '../../Opportunite/strategique-opportunite/strategique-opportunite.component';
import {ObjectifComponent} from '../../Objectif/objectif/objectif.component';
import {CreateObjectifComponent} from '../../Objectif/create-objectif/create-objectif.component';
import {HistoriqueObjectifComponent} from '../../Objectif/historique-objectif/historique-objectif.component';


export const AdminLayoutRoutes: Routes = [

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
    { path: 'enjeu',  component: EnjeuComponent },
    { path: 'Syntheseenjeu',  component: SyntheseEnjeuComponent },
    { path: 'strategiqueRisque',  component: StrategiqueRisqueComponent },
    { path: 'CategorieEnjeuIntern',  component: CreateCategorieComponent },
    { path: 'CategorieEnjeuextern',  component: CreateCategorieExternComponent },
    { path: 'guideutlisation',  component: GuideutilisationComponent },
    { path: 'processus',  component: ProcessusComponent },
    { path: 'RisqueCategories',  component: CategorieRisqueComponent },
    { path: 'ajouterForce',  component: EnjeuForceComponent },
    { path: 'risque',  component: RisqueComponent },
    { path: 'ajouterRisque',  component: AjouterrisqueComponent },
    { path: 'historiqueRisque',  component: HistoriquerisqueComponent },
    { path: 'CategoriesEnjeuIntern',  component: CategorieInternComponent},
    { path: 'CategoriesEnjeuExtern',  component: CategorieExternComponent },
    { path: 'test5',  component: Test5Component },
    { path: 'ajouterguideUtilisation',  component: AjouterGuideUtilisationComponent },
    { path: 'historiquepipertinante',  component: HistoriquePIpertinanteComponent },
    { path: 'historiqueOpportunite',  component: HistoriqueOpportuniteComponent },
    { path: 'Opportunite',  component: OpportuniteComponent },
    { path: 'CategoriesOpportunite',  component: CategorieOpportuniteComponent },
    { path: 'StrategiqueOpportunite',  component: StrategiqueOpportuniteComponent },
    { path: 'ajouterOpportunite',  component: CreateOpportuniteComponent },
    { path: 'Objective',  component: ObjectifComponent },
    { path: 'ajouterObjective',  component: CreateObjectifComponent },
    { path: 'historiqueObjective',  component: HistoriqueObjectifComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
