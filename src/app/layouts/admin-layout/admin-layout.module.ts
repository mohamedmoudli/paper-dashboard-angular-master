import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
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
import {AjouterPIComponent} from '../../PartieInteresse/ajouter-pi/ajouter-pi.component';
import {AjouterCategoriesPIComponent} from '../../PartieInteresse/ajouter-categories-pi/ajouter-categories-pi.component';
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
    MatTableModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [
    AjouterCategoriesPIComponent
  ],
  providers: [LoginGuard , LoginInterceptor ],
  declarations: [
    DashboardComponent,
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
    AjouterCategoriesPIComponent
  ]
})

export class AdminLayoutModule {}
