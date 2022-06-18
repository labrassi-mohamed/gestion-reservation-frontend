import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './adherent/home/home.component';
import {LoginComponent} from './adherent/login/login.component';
import {ReservationComponent} from './adherent/reservation/reservation.component';
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
import {ProfilComponent} from "./adherent/profile/profil/profil.component";
import {ReservationsComponent} from "./adherent/profile/reservations/reservations.component";
import {AcceuillComponent} from "./adherent/home/acceuill/acceuill.component";
import {ContactComponent} from "./adherent/home/contact/contact.component";
import {QuiSommesNousComponent} from "./adherent/home/qui-sommes-nous/qui-sommes-nous.component";
import {AdminStatistiqueComponent} from "./admin/admin-statistique/admin-statistique.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "chambre", component: ChambreComponent},
  {path: "bongalo", component: BongaloComponent},
  {path: "registration", component: RegistrationComponent},
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "user",
        component: ProfilComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "reservations",
        component: ReservationsComponent,
        canActivate: [AuthGuard]
      },
      // {path: "about",
      //   component: ProfilComponent,
      //   canActivate: [AuthGuard] },
    ]
  },

  {path: "uca-admin", component: LoginadminComponent},

  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "accueil",
        component: AccueiladminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "reservations",
        component: AdminReservationsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "logement",
        component: AdminLogementComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "adherents",
        component: AdminAdherentsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "statistique",
        component: AdminStatistiqueComponent,
        canActivate: [AuthGuard]
      },

    ]
  },
  {
    path: "reservation",
    component: ReservationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "", component: HomeComponent,
    children: [
      {path: "", component: AcceuillComponent},
      {path: "contact", component: ContactComponent},
      {path: "qui-sommes-nous", component: QuiSommesNousComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
