import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {RegisterComponent} from './register/register.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: ContentComponent, children: [
      {path: ':id', component: UserDetailComponent},
      {path: ':id/edit', component: EditUserComponent},
    ]},
  {path: 'new', component: CreateUserComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
