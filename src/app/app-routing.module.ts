import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquizComponent } from './addquiz/addquiz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultsComponent } from './results/results.component';
import { StartquizComponent } from './startquiz/startquiz.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent},
  {path: 'home_page', component: HomepageComponent},
  {path: 'start_quiz', component: StartquizComponent},
  {path: 'question_page', component: QuestionsComponent},
  {path: 'result_page', component: ResultsComponent},
  {path: 'add_quiz',component: AddquizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
