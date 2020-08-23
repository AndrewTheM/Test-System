import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './helpers';

import { TestsPageComponent, 
          HomePageComponent,
          ContactsPageComponent,
          NotFoundComponent,
          TestComponent,
          LoginComponent,
          QuestionComponent,
          AccountPageComponent,
          RegisterComponent } from './components';
import { TestEditorComponent } from './components/test-editor/test-editor.component';
  
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
