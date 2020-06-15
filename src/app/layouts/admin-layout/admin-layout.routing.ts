import { Routes } from '@angular/router';


import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import {LoginComponent} from '../../Authentification/login/login.component';
import {CreateRegisterComponent} from '../../Authentification/create-register/create-register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {LoginGuard} from '../../Guard/Login/login.guard';
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
import {CreateRegisterAdminComponent} from "../../Authentification/create-register-admin/create-register-admin.component";
import {SuperAdminGuard} from "../../Guard/SuperAdmin/super-admin.guard";
import {UserGuard} from "../../Guard/User/user.guard";
import {AdminGuard} from "../../Guard/Admin/admin.guard";
import {AdminPrincipaleGuard} from "../../Guard/AdminPrincipale/admin-principale.guard";
import {ForgettPasswordComponent} from "../../Authentification/forgett-password/forgett-password.component";
import {ResetPasswordComponent} from "../../Authentification/reset-password/reset-password.component";


export const AdminLayoutRoutes: Routes = [

    { path: 'user',           component: UserComponent },
    { path: 'login',     component: LoginComponent },
    { path: 'forgettpassword',     component: ForgettPasswordComponent },
    { path: 'resetpassword',     component: ResetPasswordComponent },
    { path: 'home',     component: HomeComponent , canActivate: [LoginGuard] },
    { path: 'createregister',     component: CreateRegisterComponent },
    { path: 'createregisteradmin',     component: CreateRegisterAdminComponent , canActivate: [AdminPrincipaleGuard]  },

    { path: 'categoriesPI',  component: CategoryInterestedPartyComponent , canActivate: [SuperAdminGuard] },
    { path: 'exigencesPI',  component: ExigencyInterestedPartyComponent , canActivate: [UserGuard] },
    { path: 'listePartieinteresse',  component: ListInterestedPartyComponent , canActivate: [AdminGuard] },
    { path: 'partieinteresse',  component: InterestedPartyComponent , canActivate: [LoginGuard]},
    { path: 'enjeu',  component: StakeComponent , canActivate: [LoginGuard] },
    { path: 'enjeuIntern',  component: CreateStakeInternalComponent , canActivate: [AdminGuard] },
    { path: 'enjeuExtern',  component: CreateStakeExternalComponent , canActivate: [AdminGuard]},
    { path: 'strategiqueRisque',  component: StrategicRiskComponent , canActivate: [SuperAdminGuard] },
    { path: 'guideutlisation',  component: UtilizationGuideComponent , canActivate: [LoginGuard]},
    { path: 'processus',  component: ProcessComponent , canActivate: [LoginGuard]},
    { path: 'RisqueCategories',  component: CategoryRiskComponent , canActivate: [SuperAdminGuard] },
    { path: 'risque',  component: RiskComponent , canActivate: [LoginGuard]},
    { path: 'ajouterRisque',  component: CreateRiskComponent , canActivate: [AdminGuard]},
    { path: 'etatRisque',  component: StateRiskComponent , canActivate: [SuperAdminGuard] },
    { path: 'historiqueRisque',  component: HistoricalRiskComponent , canActivate: [LoginGuard]},
    { path: 'CategoriesEnjeuIntern',  component: CategoryInternalComponent , canActivate: [SuperAdminGuard] },
    { path: 'CategoriesEnjeuExtern',  component: CategoryExternalComponent , canActivate: [SuperAdminGuard] },
    { path: 'historiquepipertinante',  component: HistoricalInterestedPartyComponent , canActivate: [LoginGuard]},
    { path: 'historiqueOpportunite',  component: HistoricalOpportunityComponent , canActivate: [LoginGuard]},
    { path: 'Opportunite',  component: OpportunityComponent , canActivate: [LoginGuard]},
    { path: 'CategoriesOpportunite',  component: CategoryOpportunityComponent , canActivate: [SuperAdminGuard] },
    { path: 'StrategiqueOpportunite',  component: StrategicOpportunityComponent , canActivate: [SuperAdminGuard]  },
    { path: 'etatOpportunite',  component: StateOpportunityComponent , canActivate: [SuperAdminGuard]  },
    { path: 'ajouterOpportunite',  component: CreateOpportunityComponent , canActivate: [AdminGuard]},
    { path: 'Objective',  component: ObjectiveComponent , canActivate: [LoginGuard]},
    { path: 'Plandeaction',  component: ActionPlanComponent , canActivate: [LoginGuard]},
    { path: 'CreatePlandeaction',  component: CreateActionPlanComponent , canActivate: [AdminGuard]},
    { path: 'etatEfficacite',  component: StateEfficacityActionPlanComponent , canActivate: [SuperAdminGuard] },
    { path: 'etatactuel',  component: CurrentStateplanactionComponent , canActivate: [SuperAdminGuard] },
    { path: 'ajouterObjective',  component: CreateObjectiveComponent , canActivate: [AdminGuard]},
    { path: 'historiqueObjective',  component: HistoricalObjectiveComponent , canActivate: [LoginGuard]},
    { path: 'definition',  component: DefinitionComponent },
    { path: 'Synthese1',  component: SyntheseComponent , canActivate: [LoginGuard]},
    { path: 'upgrade',        component: UpgradeComponent }
];
