import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_common/header/header.component';
import { FooterComponent } from './_common/footer/footer.component';

import { AddContactFormComponent } from './public/_crud/add-contact-form/add-contact-form.component';
import { ContactListComponent } from './public/_crud/contact-list/contact-list.component';
import { Page2Component } from './public/page2/page2.component';

import { CrudService } from './_services/_crud-service/crud.service';
import { AppService } from './_services/app-service/app.service';


import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './public/signin/signin.component';
import { Signin2Component } from './public/signin2/signin2.component';
import { ServicepageComponent } from './public/servicepage/servicepage.component';
import { PasswordResetComponent } from './public/password-reset/password-reset.component';
import { HomeComponent } from './public/home/home.component';
import { CrudComponent } from './public/_crud/crud.component';
import { SignupComponent } from './public/signup/signup.component';
import { ContactusComponent } from './public/contactus/contactus.component';
import { InputText } from './_components/input-text/input-text';
import { InputEmail } from './_components/input-email/input-email';
import { InputPhone } from './_components/input-phone/input-phone';
import { InputPasswordAndConfirm } from './_components/input-password-and-confirm/input-password-and-confirm';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signin2', component: Signin2Component },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'service', component: ServicepageComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'page2/:contactId', component: Page2Component },
  { path: 'passwordreset', component: PasswordResetComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
  //{ path: '', component: RegisterComponent },
  //{ path: '**', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddContactFormComponent,
    ContactListComponent,
    Page2Component,
    SigninComponent, 
    Signin2Component, 
    ServicepageComponent, 
    PasswordResetComponent,
    HomeComponent,
    CrudComponent,
    SignupComponent,
    ContactusComponent,
    InputText, InputPhone, InputPasswordAndConfirm, InputEmail,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CookieService, CrudService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }