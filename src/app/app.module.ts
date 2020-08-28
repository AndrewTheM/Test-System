import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';

import { TestsPageComponent, 
          HomePageComponent,
          ContactsPageComponent,
          NotFoundComponent,
          TestComponent,
          LoginComponent,
          QuestionComponent,
          AccountPageComponent,
          RegisterComponent,
          TestEditorComponent } from './components';
  
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TestComponent,
    TestsPageComponent,
    HomePageComponent,
    ContactsPageComponent,
    NotFoundComponent,
    LoginComponent,
    AccountPageComponent,
    RegisterComponent,
    TestEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
