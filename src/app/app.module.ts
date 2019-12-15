import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { MaterialModule } from './material-module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSubmitComponent,
    SearchResultComponent,
    SearchResultListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
