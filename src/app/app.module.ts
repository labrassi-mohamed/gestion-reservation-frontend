import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './adherent/navbar/navbar.component';
import {SlidesComponent} from './adherent/home/slides/slides.component';
import {HomeComponent} from './adherent/home/home.component';
import {FooterComponent} from './adherent/footer/footer.component';
import {LoginComponent} from './adherent/login/login.component';
import {ReservationComponent} from './adherent/reservation/reservation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CalendarModule} from "primeng/calendar";
import {SigninComponent} from "./adherent/signin/signin.component";
import {AdminComponent} from './admin/admin.component';
import {LoginadminComponent} from './admin/loginadmin/loginadmin.component';
import {ClientComponent} from './adherent/client.component';
import {HttpClientModule} from "@angular/common/http";
import {AdminHeaderComponent} from './admin/admin-header/admin-header.component';
import {AdminSidenavComponent} from './admin/admin-sidenav/admin-sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import { AdminListReservationsEnAttenteComponent} from './admin/admin-list-reservations-en-attente/admin-list-reservations-en-attente.component';
import {AdminReservationsComponent} from './admin/admin-reservations/admin-reservations.component';
import { AdminReservationsActuelleComponent } from './admin/admin-reservations-actuelle/admin-reservations-actuelle.component';
import { AdminReservationsHistoriqueComponent } from './admin/admin-reservations-historique/admin-reservations-historique.component';
import {TabViewModule} from "primeng/tabview";
import {LogementsComponent} from './adherent/home/logements/logements.component';
import {ChambreComponent} from './adherent/logements/chambre/chambre.component';
import {BongaloComponent} from './adherent/logements/bongalo/bongalo.component';
import {RegistrationComponent} from './adherent/registration/registration.component';
import {MatInputModule} from "@angular/material/input";
import { ProfileComponent } from './adherent/profile/profile.component';
import {AccueiladminComponent} from "./admin/accueiladmin/accueiladmin.component";
import {MatTableModule} from "@angular/material/table";
import {DialogModule} from "primeng/dialog";
import {AdminLogementComponent} from "./admin/admin-logement/admin-logement.component";
import {AdminLogementChambreComponent} from "./admin/admin-logement-chambre/admin-logement-chambre.component";
import {AdminLogementBungalowComponent} from "./admin/admin-logement-bungalow/admin-logement-bungalow.component";
import {AdminAdherentsComponent} from "./admin/admin-adherents/admin-adherents.component";
import {AdminListAdherentsComponent} from "./admin/admin-list-adherents/admin-list-adherents.component";
import {
  AdminCreatNewChambreComponent
} from "./admin/admin-logement/admin-creat-new-chambre/admin-creat-new-chambre.component";
import {
  AdminCreatNewBungalowComponent
} from "./admin/admin-logement/admin-creat-new-bungalow/admin-creat-new-bungalow.component";
import {
  AdminListDisponibleChambreComponent
} from "./admin/admin-list-reservations-en-attente/admin-list-disponible-chambre/admin-list-disponible-chambre.component";
import {
  AdminListDisponibleBungalowComponent
} from "./admin/admin-list-reservations-en-attente/admin-list-disponible-bungalow/admin-list-disponible-bungalow.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SplitButtonModule} from "primeng/splitbutton";
import {TableModule} from "primeng/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlidesComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ReservationComponent,
    SigninComponent,
    AdminComponent,
    LoginadminComponent,
    ClientComponent,
    AdminHeaderComponent,
    AdminSidenavComponent,
    AdminListReservationsEnAttenteComponent,
    AdminReservationsComponent,
    AdminReservationsActuelleComponent,
    AdminReservationsHistoriqueComponent,
    LogementsComponent,
    ChambreComponent,
    BongaloComponent,
    RegistrationComponent,
    ProfileComponent,
    AccueiladminComponent,
    AdminHeaderComponent,
    AdminListReservationsEnAttenteComponent,
    AdminReservationsComponent,
    AdminReservationsActuelleComponent,
    AdminReservationsHistoriqueComponent,
    AdminLogementComponent,
    AdminLogementChambreComponent,
    AdminLogementBungalowComponent,
    AdminAdherentsComponent,
    AdminListAdherentsComponent,
    AdminCreatNewChambreComponent,
    AdminCreatNewBungalowComponent,
    AdminListDisponibleChambreComponent,
    AdminListDisponibleBungalowComponent,
    AdminSidenavComponent,
  ],
  imports: [
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    PasswordModule,
    ReactiveFormsModule,
    TabViewModule,
    MatTableModule,
    DialogModule,
    MatPaginatorModule,
    MatTabsModule,
    TableModule,
    SplitButtonModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
