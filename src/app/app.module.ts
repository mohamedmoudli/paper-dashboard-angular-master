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
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SyntheseComponent } from './Synthese/synthese/synthese.component';
import { DefinitionComponent } from './Definition/definition/definition.component';

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

import { HelpStakeComponent } from './Stakes/help-stake/help-stake.component';
import { HelpObjectiveComponent } from './Objective/help-objective/help-objective.component';
import { CreateObjectiveComponent } from './Objective/create-objective/create-objective.component';
import { HistoricalObjectiveComponent } from './Objective/historical-objective/historical-objective.component';
import { ObjectiveComponent } from './Objective/objective/objective.component';
import { UtilizationGuideComponent } from './UtilizationGuide/utilization-guide/utilization-guide.component';
import { CreateUtilizationGuideComponent } from './UtilizationGuide/create-utilization-guide/create-utilization-guide.component';
import { DelateUtilizationGuideComponent } from './UtilizationGuide/delate-utilization-guide/delate-utilization-guide.component';
import { HelpOpportunityComponent } from './Opportunity/help-opportunity/help-opportunity.component';
import { CategoryOpportunityComponent } from './Opportunity/category-opportunity/category-opportunity.component';
import { CreateCategoryOpportunityComponent } from './Opportunity/create-category-opportunity/create-category-opportunity.component';
import { CreateOpportunityComponent } from './Opportunity/create-opportunity/create-opportunity.component';
import { DefinitionOpportunityComponent } from './Opportunity/definition-opportunity/definition-opportunity.component';
import { CreateStrategicOpportunityComponent } from './Opportunity/create-strategic-opportunity/create-strategic-opportunity.component';
import { DelateStrategicOpportunityComponent } from './Opportunity/delate-strategic-opportunity/delate-strategic-opportunity.component';
import { DelateCategoryOpportunityComponent } from './Opportunity/delate-category-opportunity/delate-category-opportunity.component';
import { HistoricalOpportunityComponent } from './Opportunity/historical-opportunity/historical-opportunity.component';
import { OpportunityComponent } from './Opportunity/opportunity/opportunity.component';
import { ReevaluateOpportunityComponent } from './Opportunity/reevaluate-opportunity/reevaluate-opportunity.component';
import { StrategicOpportunityComponent } from './Opportunity/strategic-opportunity/strategic-opportunity.component';
import { ActionPlanComponent } from './ActionPlan/action-plan/action-plan.component';
import { CreateActionPlanComponent } from './ActionPlan/create-action-plan/create-action-plan.component';
import { StakeInternalComponent } from './Stakes/stake-internal/stake-internal.component';
import { StakeExternalComponent } from './Stakes/stake-external/stake-external.component';
import { ListInterestedPartyComponent } from './InterestedParty/list-interested-party/list-interested-party.component';
import { DelateInterestedPartyComponent } from './InterestedParty/delate-interested-party/delate-interested-party.component';
import { StateOpportunityComponent } from './Opportunity/state-opportunity/state-opportunity.component';
import { StateRiskComponent } from './Risk/state-risk/state-risk.component';
import { CreateStateOpportunityComponent } from './Opportunity/create-state-opportunity/create-state-opportunity.component';
import { DeleteStateOpportunityComponent } from './Opportunity/delete-state-opportunity/delete-state-opportunity.component';
import { CreateStateRiskComponent } from './Risk/create-state-risk/create-state-risk.component';
import { DelateStateRiskComponent } from './Risk/delate-state-risk/delate-state-risk.component';
import { CurrentStateplanactionComponent } from './ActionPlan/current-stateplanaction/current-stateplanaction.component';
import { CreateCurrentStateplanactionComponent } from './ActionPlan/create-current-stateplanaction/create-current-stateplanaction.component';
import { DelateCurrentStateplanactionComponent } from './ActionPlan/delate-current-stateplanaction/delate-current-stateplanaction.component';
import { StateEfficacityActionPlanComponent } from './ActionPlan/state-efficacity-action-plan/state-efficacity-action-plan.component';
import { CreateStateEfficacityActionPlanComponent } from './ActionPlan/create-state-efficacity-action-plan/create-state-efficacity-action-plan.component';
import { DelateStateEfficacityActionPlanComponent } from './ActionPlan/delate-state-efficacity-action-plan/delate-state-efficacity-action-plan.component';
import { DelateHistoricalInterestedPartyComponent } from './InterestedParty/delate-historical-interested-party/delate-historical-interested-party.component';
import { DelateHistoricalRiskComponent } from './Risk/delate-historical-risk/delate-historical-risk.component';
import { DelateHistoricalOpportunityComponent } from './Opportunity/delate-historical-opportunity/delate-historical-opportunity.component';
import { DelateHistoricalObjectiveComponent } from './Objective/delate-historical-objective/delate-historical-objective.component';
import { SaveHistoricalInterestedPartyComponent } from './InterestedParty/save-historical-interested-party/save-historical-interested-party.component';
import { SaveHistoricalRiskComponent } from './Risk/save-historical-risk/save-historical-risk.component';
import { SaveHistoricalOpportunityComponent } from './Opportunity/save-historical-opportunity/save-historical-opportunity.component';
import { SaveHistoricalObjectiveComponent } from './Objective/save-historical-objective/save-historical-objective.component';




// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SaveHistoricalInterestedPartyComponent,
    SaveHistoricalRiskComponent,
    SaveHistoricalOpportunityComponent,
    SaveHistoricalObjectiveComponent,






































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
