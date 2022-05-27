import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './adherent/home/home.component';
import {LoginComponent} from './adherent/login/login.component';
import {ReservationComponent} from './adherent/reservation/reservation.component';
import {SigninComponent} from './adherent/signin/signin.component';
import {LoginadminComponent} from "./admin/loginadmin/loginadmin.component";
import {AccueiladminComponent} from "./admin/accueiladmin/accueiladmin.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminListReservationsEnAttenteComponent} from "./admin/admin-list-reservations-en-attente/admin-list-reservations-en-attente.component";
import {AdminReservationsComponent} from "./admin/admin-reservations/admin-reservations.component";
import {ChambreComponent} from "./adherent/logements/chambre/chambre.component";
import {BongaloComponent} from "./adherent/logements/bongalo/bongalo.component";
import {RegistrationComponent} from "./adherent/registration/registration.component";
import {ProfileComponent} from "./adherent/profile/profile.component";
import {AdminLogementComponent} from "./admin/admin-logement/admin-logement.component";
import {AdminAdherentsComponent} from "./admin/admin-adherents/admin-adherents.component";

const routes: Routes = [
  {path: "", component: HomeComponent,},
  {path: "login", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "reservation", component: ReservationComponent},
  {path: "signin", component: SigninComponent},
  {path: "chambre", component: ChambreComponent},
  {path: "bongalo", component: BongaloComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "profile", component: ProfileComponent},

  {path: "admin",
    component: AdminComponent,
    children: [
      {path: "accueil", component: AccueiladminComponent},
      {path: "loginadmin", component: LoginadminComponent},
      {path: "reservationenattente", component: AdminListReservationsEnAttenteComponent},
      {path: "reservations", component: AdminReservationsComponent},
      {path: "logement", component: AdminLogementComponent},
      {path: "adherents", component: AdminAdherentsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
