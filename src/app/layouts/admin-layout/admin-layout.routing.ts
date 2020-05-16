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
import {Test5Component} from '../../test5/test5.component';
import {Test6Component} from '../../test6/test6.component';

import {DefinitionComponent} from '../../Definition/definition/definition.component';
import {SyntheseComponent} from '../../Synthese/synthese/synthese.component';
import {StakeComponent} from '../../Stakes/stake/stake.component';
import {CategoryInternalComponent} from '../../Stakes/category-internal/category-internal.component';
import {CategoryExternalComponent} from '../../Stakes/category-external/category-external.component';
import {CategoryInterestedPartyComponent} from '../../InterestedParty/category-interested-party/category-interested-party.component';
import {ExigencyInterestedPartyComponent} from '../../InterestedParty/exigency-interested-party/exigency-interested-party.component';
import {InterestedPartyComponent} from '../../InterestedParty/interested-party/interested-party.component';
import {HistoricalInterestedPartyComponent} from '../../InterestedParty/historical-interested-party/historical-interested-party.component';
import {ProcessComponent} from '../../Process/process/process.component';
import {RiskComponent} from '../../Risk/risk/risk.component';
import {CreateRiskComponent} from '../../Risk/create-risk/create-risk.component';
import {StrategicRiskComponent} from '../../Risk/strategic-risk/strategic-risk.component';
import {CategoryRiskComponent} from '../../Risk/category-risk/category-risk.component';
import {HistoricalRiskComponent} from '../../Risk/historical-risk/historical-risk.component';
import {ObjectiveComponent} from '../../Objective/objective/objective.component';
import {CreateObjectiveComponent} from '../../Objective/create-objective/create-objective.component';
import {HistoricalObjectiveComponent} from '../../Objective/historical-objective/historical-objective.component';
import {UtilizationGuideComponent} from '../../UtilizationGuide/utilization-guide/utilization-guide.component';
import {OpportunityService} from '../../Services/Opportunity/opportunity.service';
import {CategoryOpportunityComponent} from '../../Opportunity/category-opportunity/category-opportunity.component';
import {StrategicOpportunityComponent} from '../../Opportunity/strategic-opportunity/strategic-opportunity.component';
import {CreateOpportunityComponent} from '../../Opportunity/create-opportunity/create-opportunity.component';
import {OpportunityComponent} from '../../Opportunity/opportunity/opportunity.component';
import {HistoricalOpportunityComponent} from '../../Opportunity/historical-opportunity/historical-opportunity.component';
import {ActionPlanComponent} from '../../ActionPlan/action-plan/action-plan.component';
import {CreateActionPlanComponent} from '../../ActionPlan/create-action-plan/create-action-plan.component';
import {ListInterestedPartyComponent} from '../../InterestedParty/list-interested-party/list-interested-party.component';
import {StateOpportunityComponent} from '../../Opportunity/state-opportunity/state-opportunity.component';
import {StateRiskComponent} from '../../Risk/state-risk/state-risk.component';
import {CurrentStateplanactionComponent} from '../../ActionPlan/current-stateplanaction/current-stateplanaction.component';
import {StateEfficacityActionPlanComponent} from '../../ActionPlan/state-efficacity-action-plan/state-efficacity-action-plan.component';
import {CreateStakeInternalComponent} from '../../Stakes/create-stake-internal/create-stake-internal.component';
import {CreateStakeExternalComponent} from '../../Stakes/create-stake-external/create-stake-external.component';


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
    { path: 'categoriesPI',  component: CategoryInterestedPartyComponent },
    { path: 'exigencesPI',  component: ExigencyInterestedPartyComponent },
    { path: 'listePartieinteresse',  component: ListInterestedPartyComponent },
    { path: 'partieinteresse',  component: InterestedPartyComponent },
    { path: 'enjeu',  component: StakeComponent },
    { path: 'enjeuIntern',  component: CreateStakeInternalComponent },
    { path: 'enjeuExtern',  component: CreateStakeExternalComponent },
    { path: 'strategiqueRisque',  component: StrategicRiskComponent },
    { path: 'guideutlisation',  component: UtilizationGuideComponent },
    { path: 'processus',  component: ProcessComponent },
    { path: 'RisqueCategories',  component: CategoryRiskComponent },
    { path: 'risque',  component: RiskComponent },
    { path: 'ajouterRisque',  component: CreateRiskComponent },
    { path: 'etatRisque',  component: StateRiskComponent },
    { path: 'historiqueRisque',  component: HistoricalRiskComponent },
    { path: 'CategoriesEnjeuIntern',  component: CategoryInternalComponent},
    { path: 'CategoriesEnjeuExtern',  component: CategoryExternalComponent },
    { path: 'test5',  component: Test5Component },
    { path: 'historiquepipertinante',  component: HistoricalInterestedPartyComponent },
    { path: 'historiqueOpportunite',  component: HistoricalOpportunityComponent },
    { path: 'Opportunite',  component: OpportunityComponent },
    { path: 'CategoriesOpportunite',  component: CategoryOpportunityComponent },
    { path: 'StrategiqueOpportunite',  component: StrategicOpportunityComponent },
    { path: 'etatOpportunite',  component: StateOpportunityComponent },
    { path: 'ajouterOpportunite',  component: CreateOpportunityComponent },
    { path: 'Objective',  component: ObjectiveComponent },
    { path: 'Plandeaction',  component: ActionPlanComponent },
    { path: 'CreatePlandeaction',  component: CreateActionPlanComponent },
    { path: 'etatEfficacite',  component: StateEfficacityActionPlanComponent },
    { path: 'etatactuel',  component: CurrentStateplanactionComponent },
    { path: 'ajouterObjective',  component: CreateObjectiveComponent },
    { path: 'historiqueObjective',  component: HistoricalObjectiveComponent },
    { path: 'definition',  component: DefinitionComponent },
    { path: 'Synthese1',  component: SyntheseComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
