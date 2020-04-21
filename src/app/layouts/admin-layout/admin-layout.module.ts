import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../../pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateRegisterComponent} from '../../pages/create-register/create-register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {LoginGuard} from '../../Guard/login.guard';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {NavbarComponent} from '../../shared/navbar/navbar.component';
import {FooterComponent} from '../../shared/footer/footer.component';
import {FixedPluginComponent} from '../../shared/fixedplugin/fixedplugin.component';
import {LoginInterceptor} from '../../Intercepteur/login.interceptor';
import {PartieinteresseComponent} from '../../PartieInteresse/partieinteresse/partieinteresse.component';
import {CategoriesPIComponent} from '../../PartieInteresse/categories-pi/categories-pi.component';
import {ExigenecesPIComponent} from '../../PartieInteresse/exigeneces-pi/exigeneces-pi.component';
import {HistoriqueExgPIComponent} from '../../PartieInteresse/historique-exg-pi/historique-exg-pi.component';
import {AjouterPIComponent} from '../../PartieInteresse/Create-pi/ajouter-pi.component';
import {AjouterCategoriesPIComponent} from '../../PartieInteresse/Create-categories-pi/ajouter-categories-pi.component';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {AdminLayoutComponent} from './admin-layout.component';
import {ChartsModule} from 'ng2-charts';
import {BrowserModule} from '@angular/platform-browser';
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
import {HistoriquerisqueComponent} from '../../Risque/historiquerisque/historiquerisque.component';
import {AjouterrisqueComponent} from '../../Risque/Create-risque/ajouterrisque.component';
import {Test5Component} from '../../test5/test5.component';
import {Test6Component} from '../../test6/test6.component';
import {EnjeuRiqueComponent} from '../../Risque/enjeu-rique/enjeu-rique.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PipertinanteComponent} from '../../PartieInteresse/pipertinante/pipertinante.component';
import {AjouterExigenceComponent} from '../../PartieInteresse/Create-exigence/ajouter-exigence.component';
import {DelateCategoriesPIComponent} from '../../PartieInteresse/delate-categories-pi/delate-categories-pi.component';
import {PerimtrepolitiqueComponent} from '../../Périmetre/perimtrepolitique/perimtrepolitique.component';
import {CategorieRisqueComponent} from '../../Risque/categorie-risque/categorie-risque.component';
import {CreateCategorieRisqueComponent} from '../../Risque/create-categorie-risque/create-categorie-risque.component';
import {StrategiqueRisqueComponent} from '../../Risque/strategique-risque/strategique-risque.component';
import {CreateStrategiqueRisqueComponent} from '../../Risque/create-strategique-risque/create-strategique-risque.component';
import {AideProcessComponent} from '../../Périmetre/aide-process/aide-process.component';
import {HelpProcessComponent} from '../../Enjeux/help-process/help-process.component';
import {DelateCategorieRisqueComponent} from '../../Risque/delate-categorie-risque/delate-categorie-risque.component';
import {DelateStrategiqueRisqueComponent} from '../../Risque/delate-strategique-risque/delate-strategique-risque.component';
import {CategorieInternComponent} from '../../Enjeux/categorie-intern/categorie-intern.component';
import {CategorieExternComponent} from '../../Enjeux/categorie-extern/categorie-extern.component';
import {DelatecategorieExternComponent} from '../../Enjeux/delatecategorie-extern/delatecategorie-extern.component';
import {DelatecategorieInternComponent} from '../../Enjeux/delatecategorie-intern/delatecategorie-intern.component';
import {DelateenjeuComponent} from '../../Enjeux/delateenjeu/delateenjeu.component';
import {DelateGuideComponent} from '../../GuideUtilisation/delate-guide/delate-guide.component';
import {DelateProcessComponent} from '../../Périmetre/delate-process/delate-process.component';
import {OpportuniteComponent} from '../../Opportunite/opportunite/opportunite.component';
import {CreateOpportuniteComponent} from '../../Opportunite/create-opportunite/create-opportunite.component';
import {ReevaluerOpportuniteComponent} from '../../Opportunite/reevaluer-opportunite/reevaluer-opportunite.component';
import {CategorieOpportuniteComponent} from '../../Opportunite/categorie-opportunite/categorie-opportunite.component';
import {StrategiqueOpportuniteComponent} from '../../Opportunite/strategique-opportunite/strategique-opportunite.component';
import {CreateStrategiqueOpportuniteComponent} from '../../Opportunite/create-strategique-opportunite/create-strategique-opportunite.component';
import {CreateCategorieOpportuniteComponent} from '../../Opportunite/create-categorie-opportunite/create-categorie-opportunite.component';
import {HistoriqueOpportuniteComponent} from '../../Opportunite/historique-opportunite/historique-opportunite.component';
import {DeleteCategorieOpportuniteComponent} from '../../Opportunite/delete-categorie-opportunite/delete-categorie-opportunite.component';
import {DelateStrategiqueOpportuniteComponent} from '../../Opportunite/delate-strategique-opportunite/delate-strategique-opportunite.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    ChartsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [
    AjouterCategoriesPIComponent,

  ],
  providers: [LoginGuard , LoginInterceptor ],
  declarations: [

    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    FixedPluginComponent,
    CreateRegisterComponent,
    NotificationsComponent,
    PartieinteresseComponent,
    CategoriesPIComponent,
    ExigenecesPIComponent,
    HistoriqueExgPIComponent,
    AjouterPIComponent,
    EnjeuRiqueComponent,
    EnjeuComponent,
    AjouterEnjeuComponent,
    GuideutilisationComponent,
    ProcessusComponent,
    AjouterprocessusComponent,
    AjouterGuideUtilisationComponent,
    HistoriquePIpertinanteComponent,
    Test5Component,
    Test6Component,
    EnjeuForceComponent,
    CreateCategorieComponent,
    CreateCategorieExternComponent,
    SyntheseEnjeuComponent,
    RisqueComponent,
    PipertinanteComponent,
    AjouterExigenceComponent,
    DelateCategoriesPIComponent,
    PerimtrepolitiqueComponent,
    DelateCategorieRisqueComponent,
    DelateStrategiqueRisqueComponent,
    CategorieInternComponent,
    CategorieExternComponent,
    CategorieRisqueComponent,
    CreateCategorieRisqueComponent,
    StrategiqueRisqueComponent,
    CreateStrategiqueRisqueComponent,
    AideProcessComponent,
    HelpProcessComponent,
    DelatecategorieExternComponent,
    DelatecategorieInternComponent,
    DelateenjeuComponent,
    DelateGuideComponent,
    DelateProcessComponent,
    OpportuniteComponent,
    CreateOpportuniteComponent,
    ReevaluerOpportuniteComponent,
    CategorieOpportuniteComponent,
    StrategiqueOpportuniteComponent,
    CreateStrategiqueOpportuniteComponent,
    CreateCategorieOpportuniteComponent,
    HistoriqueOpportuniteComponent,
    DeleteCategorieOpportuniteComponent,
    DelateStrategiqueOpportuniteComponent,
    HistoriquerisqueComponent,
    AjouterrisqueComponent,
    AjouterCategoriesPIComponent
  ]
})

export class AdminLayoutModule {}
