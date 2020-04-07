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
import { AjouterPIComponent } from './PartieInteresse/ajouter-pi/ajouter-pi.component';
import { AjouterCategoriesPIComponent } from './PartieInteresse/ajouter-categories-pi/ajouter-categories-pi.component';
import { PipertinanteComponent } from './PartieInteresse/pipertinante/pipertinante.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TestComponent,
    PipertinanteComponent,



  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    HttpClientModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
