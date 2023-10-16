import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './shared/pages/login/login.component';
import { CarsModule } from './cars/cars.module';
import { HeaderComponent } from './shared/pages/header/header.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { ContactUsComponent } from './shared/pages/contact-us/contact-us.component';
import { NavbarComponent } from './shared/pages/navbar/navbar.component';
import { SlideUpComponent } from './shared/pages/slide-up/slide-up.component';
import { Page404Component } from './shared/pages/page404/page404.component';
import { StartComponent } from './shared/pages/start/start/start.component';
import { IvyCarouselModule } from 'angular-responsive-carousel2';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    NavbarComponent,
    SlideUpComponent,
    Page404Component,
    LoginComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    CarsModule
    // SocialLoginModule,

  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           "733943695962-4u1jhq7se907uer2ld12m9huk2cteqam.apps.googleusercontent.com"
    //         )
    //       },
    //                 // {
    //       //   id: FacebookLoginProvider.PROVIDER_ID,
    //       //   provider: new FacebookLoginProvider('clientId')
    //       // }
    //     ]
    //   } as SocialAuthServiceConfig,
    // },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
