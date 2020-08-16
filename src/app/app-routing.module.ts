import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestsPageComponent, 
          HomePageComponent,
          ContactsPageComponent,
          NotFoundComponent,
          TestComponent } from './components';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tests', component: TestsPageComponent },
  { path: 'tests/:id', component: TestComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
