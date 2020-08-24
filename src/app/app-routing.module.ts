import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent, 
          HomePageComponent,
          ContactsPageComponent,
          NotFoundComponent,
          TestComponent,
          LoginComponent,
          AccountPageComponent,
          RegisterComponent } from './components';

import { AuthGuard } from './helpers';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tests', component: TestsPageComponent },
  { path: 'tests/:id', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'account', component: AccountPageComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
