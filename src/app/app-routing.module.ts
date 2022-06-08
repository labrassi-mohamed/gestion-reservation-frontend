import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './adherent/home/home.component';
import {LoginComponent} from './adherent/login/login.component';
import {ReservationComponent} from './adherent/reservation/reservation.component';
import {SigninComponent} from './adherent/signin/signin.component';
import {ChambreComponent} from "./adherent/logements/chambre/chambre.component";
import {BongaloComponent} from "./adherent/logements/bongalo/bongalo.component";
import {RegistrationComponent} from "./adherent/registration/registration.component";
import {ProfileComponent} from "./adherent/profile/profile.component";
import {AdminAdherentsComponent} from "./admin/admin-adherents/admin-adherents.component";
import {AuthGuard} from "./controller/auth/auth.guard";
import {AdminComponent} from "./admin/admin.component";
import {LoginadminComponent} from "./admin/loginadmin/loginadmin.component";
import {AdminReservationsComponent} from "./admin/admin-reservations/admin-reservations.component";
import {AdminLogementComponent} from "./admin/admin-logement/admin-logement.component";
import {AccueiladminComponent} from "./admin/accueiladmin/accueiladmin.component";

const routes: Routes = [
  {path: "", component: HomeComponent,},
  {path: "login", component: LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "signin", component: SigninComponent},
  {path: "chambre", component: ChambreComponent},
  {path: "bongalo", component: BongaloComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "reservation",
    component: ReservationComponent,
    canActivate: [AuthGuard]
  },
  {path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },

  {path: "uca-admin", component: LoginadminComponent},

  {path: "admin",
    component: AdminComponent,
    children: [
      {path: "accueil",
        component: AccueiladminComponent,
        canActivate: [AuthGuard] },
      {path: "reservations",
        component: AdminReservationsComponent,
        canActivate: [AuthGuard]},
      {path: "logement",
        component: AdminLogementComponent,
        canActivate: [AuthGuard]},
      {path: "adherents",
        component: AdminAdherentsComponent,
        canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
