import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent, 
          HomePageComponent,
          ContactsPageComponent,
          NotFoundComponent,
          TestComponent,
          LoginComponent,
          AccountPageComponent,
          RegisterComponent, 
          TestEditorComponent } from './components';

import { AuthGuard } from './helpers';
import { Role } from './models';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tests', component: TestsPageComponent },
  { path: 'tests/:id', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'account', component: AccountPageComponent, canActivate: [AuthGuard] },
  { path: 'editor', component: TestEditorComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
