import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './users.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TokenInterceptor} from './token.interceptor';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    UserDetailComponent,
    CreateUserComponent,
    LoginComponent,
    RegisterComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
