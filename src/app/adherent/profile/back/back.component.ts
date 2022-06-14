import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from '@angular/cdk/layout';
import {delay, filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ProfileComponent} from "../profile.component";
import {AuthService} from "../../../controller/auth/auth.service";

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
              private router: Router,
              public profileService: ProfileComponent,
              private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  // Methods
  lougOut() {
    this.auth.logout();
  }
  // Getters && Setters

  // Material
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

}
