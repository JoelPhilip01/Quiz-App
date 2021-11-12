import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizserviceService } from '../quizservice.service';
import { Quiz } from '../Quiz';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent  {

  constructor(private quizService: QuizserviceService, private router: Router) { }
  
  addNewQuestion(question: string, optionA: string, optionB: string, optionc: string, optionD: string, correctoption: string){
    this.quizService.addQuiz({question,optionA,optionB,optionc,optionD,correctoption})
    .subscribe((res: any) =>{
      console.log(res);
    });
    
  
  }
 

}
