import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent, 
          HomePageComponent,
          ContactsPageComponent,
          NotFoundComponent,
          TestComponent,
          LoginComponent } from './components';
import { AuthGuard } from './helpers';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tests', component: TestsPageComponent },
  { path: 'tests/:id', component: TestComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
