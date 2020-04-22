import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateRegisterComponent } from './pages/create-register/create-register.component';
import { HomeComponent } from './pages/home/home.component';
import { PartieinteresseComponent } from './PartieInteresse/partieinteresse/partieinteresse.component';
import { CategoriesPIComponent } from './PartieInteresse/categories-pi/categories-pi.component';
import { ExigenecesPIComponent } from './PartieInteresse/exigeneces-pi/exigeneces-pi.component';
import { HistoriqueExgPIComponent } from './PartieInteresse/historique-exg-pi/historique-exg-pi.component';
import { AjouterPIComponent } from './PartieInteresse/Create-pi/ajouter-pi.component';
import { AjouterCategoriesPIComponent } from './PartieInteresse/Create-categories-pi/ajouter-categories-pi.component';
import { PipertinanteComponent } from './PartieInteresse/pipertinante/pipertinante.component';
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { GuideutilisationComponent } from './GuideUtilisation/guideutilisation/guideutilisation.component';
import { ProcessusComponent } from './Périmetre/processus/processus.component';
import { AjouterprocessusComponent } from './Périmetre/Create-processus/ajouterprocessus.component';
import { AjouterGuideUtilisationComponent } from './GuideUtilisation/ajouter-guide-utilisation/ajouter-guide-utilisation.component';
import { HistoriquePIpertinanteComponent } from './PartieInteresse/historique-pipertinante/historique-pipertinante.component';
import { CreateCategorieComponent } from './Enjeux/create-categorie-intern/create-categorie.component';
import { CreateCategorieExternComponent } from './Enjeux/create-categorie-extern/create-categorie-extern.component';
import { SyntheseEnjeuComponent } from './Enjeux/synthese-enjeu/synthese-enjeu.component';
import { RisqueComponent } from './Risque/risque/risque.component';
import { HistoriquerisqueComponent } from './Risque/historiquerisque/historiquerisque.component';
import { AjouterrisqueComponent } from './Risque/Create-risque/ajouterrisque.component';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';
import { EnjeuRiqueComponent } from './Risque/enjeu-rique/enjeu-rique.component';
import { AjouterExigenceComponent } from './PartieInteresse/Create-exigence/ajouter-exigence.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DelateCategoriesPIComponent } from './PartieInteresse/delate-categories-pi/delate-categories-pi.component';
import { PerimtrepolitiqueComponent } from './Périmetre/perimtrepolitique/perimtrepolitique.component';
import { CategorieRisqueComponent } from './Risque/categorie-risque/categorie-risque.component';
import { CreateCategorieRisqueComponent } from './Risque/create-categorie-risque/create-categorie-risque.component';
import { StrategiqueRisqueComponent } from './Risque/strategique-risque/strategique-risque.component';
import { CreateStrategiqueRisqueComponent } from './Risque/create-strategique-risque/create-strategique-risque.component';
import { AideProcessComponent } from './Périmetre/aide-process/aide-process.component';
import { HelpProcessComponent } from './Enjeux/help-process/help-process.component';
import { DelateCategorieRisqueComponent } from './Risque/delate-categorie-risque/delate-categorie-risque.component';
import { DelateStrategiqueRisqueComponent } from './Risque/delate-strategique-risque/delate-strategique-risque.component';
import { CategorieInternComponent } from './Enjeux/categorie-intern/categorie-intern.component';
import { CategorieExternComponent } from './Enjeux/categorie-extern/categorie-extern.component';
import { DelatecategorieExternComponent } from './Enjeux/delatecategorie-extern/delatecategorie-extern.component';
import { DelatecategorieInternComponent } from './Enjeux/delatecategorie-intern/delatecategorie-intern.component';
import { DelateenjeuComponent } from './Enjeux/delateenjeu/delateenjeu.component';
import { DelateGuideComponent } from './GuideUtilisation/delate-guide/delate-guide.component';
import { DelateProcessComponent } from './Périmetre/delate-process/delate-process.component';
import { OpportuniteComponent } from './Opportunite/opportunite/opportunite.component';
import { CreateOpportuniteComponent } from './Opportunite/create-opportunite/create-opportunite.component';
import { ReevaluerOpportuniteComponent } from './Opportunite/reevaluer-opportunite/reevaluer-opportunite.component';
import { CategorieOpportuniteComponent } from './Opportunite/categorie-opportunite/categorie-opportunite.component';
import { StrategiqueOpportuniteComponent } from './Opportunite/strategique-opportunite/strategique-opportunite.component';
import { CreateStrategiqueOpportuniteComponent } from './Opportunite/create-strategique-opportunite/create-strategique-opportunite.component';
import { CreateCategorieOpportuniteComponent } from './Opportunite/create-categorie-opportunite/create-categorie-opportunite.component';
import { HistoriqueOpportuniteComponent } from './Opportunite/historique-opportunite/historique-opportunite.component';
import { DeleteCategorieOpportuniteComponent } from './Opportunite/delete-categorie-opportunite/delete-categorie-opportunite.component';
import { DelateStrategiqueOpportuniteComponent } from './Opportunite/delate-strategique-opportunite/delate-strategique-opportunite.component';
import { PIpertinanteComponent } from './Risque/pipertinante/pipertinante.component';
import { ObjectifComponent } from './Objectif/objectif/objectif.component';
import { CreateObjectifComponent } from './Objectif/create-objectif/create-objectif.component';
import { HistoriqueObjectifComponent } from './Objectif/historique-objectif/historique-objectif.component';




// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,



















  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    HttpClientModule,
    FixedPluginModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
