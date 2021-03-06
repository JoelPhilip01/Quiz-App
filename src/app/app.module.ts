import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StartquizComponent } from './startquiz/startquiz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultsComponent } from './results/results.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddquizComponent } from './addquiz/addquiz.component';
import { ViewquizComponent } from './viewquiz/viewquiz.component';

@NgModule({
  declarations: [
    AppComponent,
    StartquizComponent,
    HomepageComponent,
    LoginpageComponent,
    QuestionsComponent,
    ResultsComponent,
    AddquizComponent,
    ViewquizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
