import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {baseUrl, environment, loginUrl} from "../../../environments/environment";
import {TokenService} from "../service/token.service";
import {Router} from "@angular/router";
import {Adherent} from "../model/adherent.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  readonly API = loginUrl;
  public _user = new Adherent();
  public role: string;
  public error: boolean = null;
  private _authenticatedUser = new Adherent();
  private _authenticated = <boolean>JSON.parse(localStorage.getItem('autenticated')) || false;
  public _loggedIn = new BehaviorSubject<boolean>(false);
  public loggedInfo$ = this._loggedIn.asObservable();
  private connectedChercheur = 'connectedChercheur';
  public connected: boolean = false;

  constructor(private http: HttpClient,
              private tokenService: TokenService,
              private router: Router) {
  }

  public loginAdherent(username: string, password: string) {
    this.http.post<any>(this.API + 'login', {username, password}, {observe: 'response'}).subscribe(
      resp => {
        this.connected = true;
        const jwt = resp.headers.get('Authorization');
        jwt != null ? this.tokenService.saveToken(jwt) : false;
        this.loadInfos();
        this.error = false;
        // console.log(this.tokenService.getUsername());
        console.log('you are logged in successfully');
        this.router.navigate(['/profile/user']);
      }, (error: HttpErrorResponse) => {
        this.error = true;
        console.log("error");
      }
    );
  }

  public logout() {
    this.tokenService.removeToken();
    this.unregisterConnectedAdherent();
    localStorage.setItem('autenticated', JSON.stringify(false));
    this.authenticated = false;
    this._loggedIn.next(false);
    this._authenticatedUser = new Adherent();
    this.router.navigate(['']);
  }

  public loadInfos() {
    const tokenDecoded = this.tokenService.decode();
    const username = tokenDecoded.sub;
    const roles = tokenDecoded.roles;
    const email = tokenDecoded.email;
    const firstname = tokenDecoded.firstname;
    const lastname = tokenDecoded.lastname;
    const passwordChanged = tokenDecoded.passwordChanged;
    this._authenticatedUser.email = username;
    this._authenticatedUser.lastname = lastname;
    this._authenticatedUser.firstname = firstname;
    this._authenticatedUser.email = email;
    this._authenticatedUser.authorities = roles;
    this.role = roles;
    localStorage.setItem('autenticated', JSON.stringify(true));
    this.authenticated = true;
    this._loggedIn.next(true);
  }

  public registerConnectedAdherent(adherent: Adherent): void {
    localStorage.setItem(this.connectedChercheur, JSON.stringify(adherent));
  }

  public unregisterConnectedAdherent(): void {
    localStorage.removeItem(this.connectedChercheur);
  }

  public loginAdmin(username: string, password: string) {
    this.http.post<any>(this.API + 'login', {username, password}, {observe: 'response'}).subscribe(
      resp => {
        this.error = null;
        const jwt = resp.headers.get('Authorization');
        jwt != null ? this.tokenService.saveToken(jwt) : false;
        this.loadInfos();
        console.log('you are logged in successfully');
        this.router.navigate(['/admin/accueil']);
      }, (error: HttpErrorResponse) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

// Getters & Setters
  get authenticated():
    boolean {
    return this._authenticated;
  }

  set authenticated(value: boolean
  ) {
    this._authenticated = value;
  }

  get authenticatedUser(): Adherent {
    return this._authenticatedUser;
  }

  set authenticatedUser(value: Adherent) {
    this._authenticatedUser = value;
  }
}
