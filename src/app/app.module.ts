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

import { CategorieRisqueComponent } from './Risque/categorie-risque/categorie-risque.component';
import { CreateCategorieRisqueComponent } from './Risque/create-categorie-risque/create-categorie-risque.component';
import { StrategiqueRisqueComponent } from './Risque/strategique-risque/strategique-risque.component';
import { CreateStrategiqueRisqueComponent } from './Risque/create-strategique-risque/create-strategique-risque.component';

import { HelpProcessComponent } from './Enjeux/help-process/help-process.component';
import { DelateCategorieRisqueComponent } from './Risque/delate-categorie-risque/delate-categorie-risque.component';
import { DelateStrategiqueRisqueComponent } from './Risque/delate-strategique-risque/delate-strategique-risque.component';
import { CategorieInternComponent } from './Enjeux/categorie-intern/categorie-intern.component';
import { CategorieExternComponent } from './Enjeux/categorie-extern/categorie-extern.component';
import { DelatecategorieExternComponent } from './Enjeux/delatecategorie-extern/delatecategorie-extern.component';
import { DelatecategorieInternComponent } from './Enjeux/delatecategorie-intern/delatecategorie-intern.component';
import { DelateenjeuComponent } from './Enjeux/delateenjeu/delateenjeu.component';
import { DelateGuideComponent } from './GuideUtilisation/delate-guide/delate-guide.component';

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
import { PlanDeActionComponent } from './PlanDeAction/plan-de-action/plan-de-action.component';
import { CreatePlanDeActionComponent } from './PlanDeAction/create-plan-de-action/create-plan-de-action.component';
import { SyntheseComponent } from './Synthese/synthese/synthese.component';
import { DefinitionComponent } from './Definition/definition/definition.component';
import { DefinitionRisqueComponent } from './Risque/definition-risque/definition-risque.component';
import { AideRisqueComponent } from './Risque/aide-risque/aide-risque.component';
import { DefinitionOpportuniteComponent } from './Opportunite/definition-opportunite/definition-opportunite.component';
import { AideOpportuniteComponent } from './Opportunite/aide-opportunite/aide-opportunite.component';
import { AideObjectifComponent } from './Objectif/aide-objectif/aide-objectif.component';
import { DefinitionPIPertinanteComponent } from './PartieInteresse/definition-pipertinante/definition-pipertinante.component';
import { AidePIPertinanteComponent } from './PartieInteresse/aide-pipertinante/aide-pipertinante.component';
import { DefinitionPartieInteresseComponent } from './PartieInteresse/definition-partie-interesse/definition-partie-interesse.component';
import { DefinitionEnjeuxComponent } from './Enjeux/definition-enjeux/definition-enjeux.component';
import { AideExigencePIComponent } from './PartieInteresse/aide-exigence-pi/aide-exigence-pi.component';
import { StakeComponent } from './Stakes/stake/stake.component';
import { CategoryInternalComponent } from './Stakes/category-internal/category-internal.component';
import { CategoryExternalComponent } from './Stakes/category-external/category-external.component';
import { CreateCategoryExternalComponent } from './Stakes/create-category-external/create-category-external.component';
import { CreateCategoryInternalComponent } from './Stakes/create-category-internal/create-category-internal.component';
import { CreateStakeComponent } from './Stakes/create-stake/create-stake.component';
import { CreateStakeInternalComponent } from './Stakes/create-stake-internal/create-stake-internal.component';
import { CreateStakeExternalComponent } from './Stakes/create-stake-external/create-stake-external.component';
import { DelateCategoryExternalComponent } from './Stakes/delate-category-external/delate-category-external.component';
import { DelateCategoryInternalComponent } from './Stakes/delate-category-internal/delate-category-internal.component';
import { DelateStakeComponent } from './Stakes/delate-stake/delate-stake.component';
import { InterestedPartyComponent } from './InterestedParty/interested-party/interested-party.component';
import { HelpExigencyIpComponent } from './InterestedParty/help-exigency-ip/help-exigency-ip.component';
import { HelpPiRelevantComponent } from './InterestedParty/help-pi-relevant/help-pi-relevant.component';
import { CategoryInterestedPartyComponent } from './InterestedParty/category-interested-party/category-interested-party.component';
import { CreateCategoryInterestedPartyComponent } from './InterestedParty/create-category-interested-party/create-category-interested-party.component';
import { CreateExigencyInterestedPartyComponent } from './InterestedParty/create-exigency-interested-party/create-exigency-interested-party.component';
import { CreateInterestedPartyComponent } from './InterestedParty/create-interested-party/create-interested-party.component';
import { DefinitionInterestedPartyComponent } from './InterestedParty/definition-interested-party/definition-interested-party.component';
import { DefinitionPIRelevantComponent } from './InterestedParty/definition-pirelevant/definition-pirelevant.component';
import { DelateCategoryInterestedPartyComponent } from './InterestedParty/delate-category-interested-party/delate-category-interested-party.component';
import { DelateExigencyInterestedPartyComponent } from './InterestedParty/delate-exigency-interested-party/delate-exigency-interested-party.component';
import { ExigencyInterestedPartyComponent } from './InterestedParty/exigency-interested-party/exigency-interested-party.component';
import { HistoricalInterestedPartyComponent } from './InterestedParty/historical-interested-party/historical-interested-party.component';
import { ProcessComponent } from './Process/process/process.component';
import { CreateProcessComponent } from './Process/create-process/create-process.component';

import { HelpRiskComponent } from './Risk/help-risk/help-risk.component';
import { CategoryRiskComponent } from './Risk/category-risk/category-risk.component';
import { CreateCategoryRiskComponent } from './Risk/create-category-risk/create-category-risk.component';
import { CreateRiskComponent } from './Risk/create-risk/create-risk.component';
import { CreateStrategicRiskComponent } from './Risk/create-strategic-risk/create-strategic-risk.component';
import { DefinionRiskComponent } from './Risk/definion-risk/definion-risk.component';
import { DelateCategoryRiskComponent } from './Risk/delate-category-risk/delate-category-risk.component';
import { DelateStrategicRiskComponent } from './Risk/delate-strategic-risk/delate-strategic-risk.component';
import { StakeRiskComponent } from './Risk/stake-risk/stake-risk.component';
import { HistoricalRiskComponent } from './Risk/historical-risk/historical-risk.component';
import { PIRelevantComponent } from './Risk/pirelevant/pirelevant.component';
import { RiskComponent } from './Risk/risk/risk.component';
import { StrategicRiskComponent } from './Risk/strategic-risk/strategic-risk.component';
import { DefinitionStakeComponent } from './Stake/definition-stake/definition-stake.component';
import { HelpStakeComponent } from './Stakes/help-stake/help-stake.component';




// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DefinitionStakeComponent,
    HelpStakeComponent,




























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
