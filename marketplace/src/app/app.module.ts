import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlgoComponent } from './algo/algo.component';
import { RegisterComponent } from './auth/register/register.component';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AlgoDetailComponent } from './algo/detail/detail.component';
import { AlgoService } from './algo/algo.service';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    AlgoComponent,
    RegisterComponent,
    AlgoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'algo-market'),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AlgoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
