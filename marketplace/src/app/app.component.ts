import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AlgoMarket';
  isAuth = false;
  authChangedSubscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private readonly authService: AuthService
  ) {
    this.authChangedSubscription = authService.authStateChange.subscribe(
      (user) => this.isAuth = authService.isAuth()
    );
  }

  ngOnInit() {
    this.authService.initAuthListener();
  }

  onLogout() {
    this.authService.logout().then(() => this.router.navigate(['/']));
  }
}