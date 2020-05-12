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

import {Test5Component} from '../../test5/test5.component';
import {Test6Component} from '../../test6/test6.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import {SyntheseComponent} from '../../Synthese/synthese/synthese.component';
import {DefinitionComponent} from '../../Definition/definition/definition.component';
import {StakeComponent} from '../../Stakes/stake/stake.component';
import {CategoryInternalComponent} from '../../Stakes/category-internal/category-internal.component';
import {CategoryExternalComponent} from '../../Stakes/category-external/category-external.component';
import {CreateCategoryExternalComponent} from '../../Stakes/create-category-external/create-category-external.component';
import {CreateCategoryInternalComponent} from '../../Stakes/create-category-internal/create-category-internal.component';
import {CreateStakeComponent} from '../../Stakes/create-stake/create-stake.component';
import {CreateStakeInternalComponent} from '../../Stakes/create-stake-internal/create-stake-internal.component';
import {CreateStakeExternalComponent} from '../../Stakes/create-stake-external/create-stake-external.component';
import {DelateCategoryExternalComponent} from '../../Stakes/delate-category-external/delate-category-external.component';
import {DelateCategoryInternalComponent} from '../../Stakes/delate-category-internal/delate-category-internal.component';
import {DelateStakeComponent} from '../../Stakes/delate-stake/delate-stake.component';
import {InterestedPartyComponent} from '../../InterestedParty/interested-party/interested-party.component';
import {HelpExigencyIpComponent} from '../../InterestedParty/help-exigency-ip/help-exigency-ip.component';
import {HelpPiRelevantComponent} from '../../InterestedParty/help-pi-relevant/help-pi-relevant.component';
import {CategoryInterestedPartyComponent} from '../../InterestedParty/category-interested-party/category-interested-party.component';
import {CreateCategoryInterestedPartyComponent} from '../../InterestedParty/create-category-interested-party/create-category-interested-party.component';
import {CreateExigencyInterestedPartyComponent} from '../../InterestedParty/create-exigency-interested-party/create-exigency-interested-party.component';
import {CreateInterestedPartyComponent} from '../../InterestedParty/create-interested-party/create-interested-party.component';
import {DefinitionInterestedPartyComponent} from '../../InterestedParty/definition-interested-party/definition-interested-party.component';
import {DefinitionPIRelevantComponent} from '../../InterestedParty/definition-pirelevant/definition-pirelevant.component';
import {DelateCategoryInterestedPartyComponent} from '../../InterestedParty/delate-category-interested-party/delate-category-interested-party.component';
import {DelateExigencyInterestedPartyComponent} from '../../InterestedParty/delate-exigency-interested-party/delate-exigency-interested-party.component';
import {ExigencyInterestedPartyComponent} from '../../InterestedParty/exigency-interested-party/exigency-interested-party.component';
import {HistoricalInterestedPartyComponent} from '../../InterestedParty/historical-interested-party/historical-interested-party.component';
import {CreateProcessComponent} from '../../Process/create-process/create-process.component';
import {ProcessComponent} from '../../Process/process/process.component';
import {HelpRiskComponent} from '../../Risk/help-risk/help-risk.component';
import {CategoryRiskComponent} from '../../Risk/category-risk/category-risk.component';
import {CreateCategoryRiskComponent} from '../../Risk/create-category-risk/create-category-risk.component';
import {CreateRiskComponent} from '../../Risk/create-risk/create-risk.component';
import {CreateStrategicRiskComponent} from '../../Risk/create-strategic-risk/create-strategic-risk.component';
import {DefinionRiskComponent} from '../../Risk/definion-risk/definion-risk.component';
import {DelateCategoryRiskComponent} from '../../Risk/delate-category-risk/delate-category-risk.component';
import {DelateStrategicRiskComponent} from '../../Risk/delate-strategic-risk/delate-strategic-risk.component';
import {StakeRiskComponent} from '../../Risk/stake-risk/stake-risk.component';
import {HistoricalRiskComponent} from '../../Risk/historical-risk/historical-risk.component';
import {PIRelevantComponent} from '../../Risk/pirelevant/pirelevant.component';
import {RiskComponent} from '../../Risk/risk/risk.component';
import {StrategicRiskComponent} from '../../Risk/strategic-risk/strategic-risk.component';
import {HelpStakeComponent} from '../../Stakes/help-stake/help-stake.component';
import {DefinitionStakeComponent} from '../../Stakes/definition-stake/definition-stake.component';
import {HelpObjectiveComponent} from '../../Objective/help-objective/help-objective.component';
import {CreateObjectiveComponent} from '../../Objective/create-objective/create-objective.component';
import {HistoricalObjectiveComponent} from '../../Objective/historical-objective/historical-objective.component';
import {ObjectiveComponent} from '../../Objective/objective/objective.component';
import {UtilizationGuideComponent} from '../../UtilizationGuide/utilization-guide/utilization-guide.component';
import {CreateUtilizationGuideComponent} from '../../UtilizationGuide/create-utilization-guide/create-utilization-guide.component';
import {DelateUtilizationGuideComponent} from '../../UtilizationGuide/delate-utilization-guide/delate-utilization-guide.component';
import {HelpOpportunityComponent} from '../../Opportunity/help-opportunity/help-opportunity.component';
import {CategoryOpportunityComponent} from '../../Opportunity/category-opportunity/category-opportunity.component';
import {CreateCategoryOpportunityComponent} from '../../Opportunity/create-category-opportunity/create-category-opportunity.component';
import {CreateOpportunityComponent} from '../../Opportunity/create-opportunity/create-opportunity.component';
import {DefinitionOpportunityComponent} from '../../Opportunity/definition-opportunity/definition-opportunity.component';
import {CreateStrategicOpportunityComponent} from '../../Opportunity/create-strategic-opportunity/create-strategic-opportunity.component';
import {DelateStrategicOpportunityComponent} from '../../Opportunity/delate-strategic-opportunity/delate-strategic-opportunity.component';
import {DelateCategoryOpportunityComponent} from '../../Opportunity/delate-category-opportunity/delate-category-opportunity.component';
import {HistoricalOpportunityComponent} from '../../Opportunity/historical-opportunity/historical-opportunity.component';
import {OpportunityComponent} from '../../Opportunity/opportunity/opportunity.component';
import {ReevaluateOpportunityComponent} from '../../Opportunity/reevaluate-opportunity/reevaluate-opportunity.component';
import {StrategicOpportunityComponent} from '../../Opportunity/strategic-opportunity/strategic-opportunity.component';
import {ActionPlanComponent} from '../../ActionPlan/action-plan/action-plan.component';
import {CreateActionPlanComponent} from '../../ActionPlan/create-action-plan/create-action-plan.component';
import {StakeInternalComponent} from '../../Stakes/stake-internal/stake-internal.component';
import {StakeExternalComponent} from '../../Stakes/stake-external/stake-external.component';
import {ListInterestedPartyComponent} from '../../InterestedParty/list-interested-party/list-interested-party.component';
import {DelateInterestedPartyComponent} from '../../InterestedParty/delate-interested-party/delate-interested-party.component';
import {StateOpportunityComponent} from '../../Opportunity/state-opportunity/state-opportunity.component';
import {StateRiskComponent} from '../../Risk/state-risk/state-risk.component';
import {CreateStateOpportunityComponent} from '../../Opportunity/create-state-opportunity/create-state-opportunity.component';
import {DeleteStateOpportunityComponent} from '../../Opportunity/delete-state-opportunity/delete-state-opportunity.component';
import {CreateStateRiskComponent} from '../../Risk/create-state-risk/create-state-risk.component';
import {DelateStateRiskComponent} from '../../Risk/delate-state-risk/delate-state-risk.component';
import {CurrentStateplanactionComponent} from '../../ActionPlan/current-stateplanaction/current-stateplanaction.component';
import {CreateCurrentStateplanactionComponent} from '../../ActionPlan/create-current-stateplanaction/create-current-stateplanaction.component';
import {DelateCurrentStateplanactionComponent} from '../../ActionPlan/delate-current-stateplanaction/delate-current-stateplanaction.component';
import {StateEfficacityActionPlanComponent} from '../../ActionPlan/state-efficacity-action-plan/state-efficacity-action-plan.component';
import {CreateStateEfficacityActionPlanComponent} from '../../ActionPlan/create-state-efficacity-action-plan/create-state-efficacity-action-plan.component';
import {DelateStateEfficacityActionPlanComponent} from '../../ActionPlan/delate-state-efficacity-action-plan/delate-state-efficacity-action-plan.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


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
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [


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
    Test5Component,
    Test6Component,
    SyntheseComponent,
    DefinitionComponent,
    StakeComponent,
    CategoryInternalComponent,
    CategoryExternalComponent,
    CreateCategoryExternalComponent,
    CreateCategoryInternalComponent,
    CreateStakeComponent,
    CreateStakeInternalComponent,
    CreateStakeExternalComponent,
    DelateCategoryExternalComponent,
    DelateCategoryInternalComponent,
    DelateStakeComponent,
    InterestedPartyComponent,
    HelpExigencyIpComponent,
    HelpPiRelevantComponent,
    CategoryInterestedPartyComponent,
    CreateCategoryInterestedPartyComponent,
    CreateExigencyInterestedPartyComponent,
    CreateInterestedPartyComponent,
    DefinitionInterestedPartyComponent,
    DefinitionPIRelevantComponent,
    DelateCategoryInterestedPartyComponent,
    DelateExigencyInterestedPartyComponent,
    ExigencyInterestedPartyComponent,
    HistoricalInterestedPartyComponent,
    CreateProcessComponent,
    ProcessComponent,
    HelpRiskComponent,
    CategoryRiskComponent,
    CreateCategoryRiskComponent,
    CreateRiskComponent,
    CreateStrategicRiskComponent,
    DefinionRiskComponent,
    DelateCategoryRiskComponent,
    DelateStrategicRiskComponent,
    StakeRiskComponent,
    HistoricalRiskComponent,
    PIRelevantComponent,
    RiskComponent,
    StrategicRiskComponent,
    DefinitionStakeComponent,
    HelpObjectiveComponent,
    CreateObjectiveComponent,
    HistoricalObjectiveComponent,
    ObjectiveComponent,
    UtilizationGuideComponent,
    CreateUtilizationGuideComponent,
    DelateUtilizationGuideComponent,
    HelpOpportunityComponent,
    CategoryOpportunityComponent,
    CreateCategoryOpportunityComponent,
    CreateOpportunityComponent,
    DefinitionOpportunityComponent,
    CreateStrategicOpportunityComponent,
    DelateStrategicOpportunityComponent,
    DelateCategoryOpportunityComponent,
    HistoricalOpportunityComponent,
    OpportunityComponent,
    ReevaluateOpportunityComponent,
    StrategicOpportunityComponent,
    ActionPlanComponent,
    CreateActionPlanComponent,
    StakeInternalComponent,
    StakeExternalComponent,
    ListInterestedPartyComponent,
    DelateInterestedPartyComponent,
    StateOpportunityComponent,
    StateRiskComponent,
    CreateStateOpportunityComponent,
    DeleteStateOpportunityComponent,
    CreateStateRiskComponent,
    DelateStateRiskComponent,
    CurrentStateplanactionComponent,
    CreateCurrentStateplanactionComponent,
    DelateCurrentStateplanactionComponent,
    StateEfficacityActionPlanComponent,
    CreateStateEfficacityActionPlanComponent,
    DelateStateEfficacityActionPlanComponent,
    HelpStakeComponent
  ]
})

export class AdminLayoutModule {}
