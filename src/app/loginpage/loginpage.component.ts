import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit  {
  constructor() {}

  ngOnInit(): void {
  }
  

}

// constructor(private router: Router) { }

//   public onLoginClick(): void {
//     this.router.navigate(['./home_page']);
//   }