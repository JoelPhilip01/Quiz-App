import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizserviceService } from '../quizservice.service';
import { Login } from '../Login';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  indexNo = 0;
  loginSuccess = false;
  loginError = false;
  ngOnInit(): void { 
    
    this.quizService.fetchAllLogins()
    .subscribe((res: any) =>{
      this.logins=res;
    
    });
  }

  logins :Array<Login>=[];

  constructor(private quizService: QuizserviceService, private router: Router) {}
  signIn(userName: string,passwordKey: string){
      for (let i = 0; i< this.logins.length; i++){
        if(this.logins[i].username == userName && this.logins[i].password == passwordKey){
          alert("Login Sucess !!");
          this.router.navigate(['home_page']);
          this.loginSuccess = true;
          break
        }
      }
      if(this.loginSuccess == false){
        alert("No User Found !!");
        this.loginError =true;
      }
    
  }

  addNewUser(username: string, password: string){
  this.quizService.addLoginUser({username,password})
  .subscribe((res: any) =>{
    console.log(res);
  });
  

}

}

// constructor(private router: Router) { }

//   public onLoginClick(): void {
//     this.router.navigate(['./home_page']);
//   }