import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsPageComponent } from './components/tests-page/tests-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestComponent } from './components/test/test.component';

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
