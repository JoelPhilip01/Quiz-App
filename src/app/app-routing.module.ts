import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { StartquizComponent } from './startquiz/startquiz.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent},
  {path: 'home_page', component: HomepageComponent},
  {path: 'start_quiz', component: StartquizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
