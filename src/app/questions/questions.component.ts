import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../Quiz'
import { QuizserviceService } from '../quizservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question_count = 0;
  questions: any = [];
  quizzes : Array<Quiz>= []
  buttonTitle: string= 'Next';
  userAnswer = '';
  correctAnswer = 0;
  currentQuestionNumber = 0 ;
  currentscore =0;
  isDisabled = true;
  isOption = false;
  option='';
  wrongAnswer = 0;
  
 

  constructor(private quizService: QuizserviceService, private _router: ActivatedRoute,private router: Router) { }
  
  

  ngOnInit(): void { 
    
    this.questions = [];
    this.quizService.fetchAllQuizzes()
    .subscribe((res:any) => {
      // this.quizzes = res;
    this.questions = res
    console.log(this.questions);
    
    
    });
  }

 
  next(){
    if(this.question_count<this.questions.length-1){
      if(this.question_count == this.questions.length - 2){
        this.buttonTitle = 'Quiz is Done';
      }
      this.question_count++;
      this.currentscore++;
      this.isDisabled=true;
      this.option=''
      this.isOption = false;
    }
    
  }
  // previous(){
  //   if(this.question_count>0){
  //     this.question_count--;
  //   }
  // }
  toggleClass(option: string){
    console.log("Return Value: " + option);
    if(option == '1'){
      this.userAnswer = "A";
    }
    else if(option == '2'){
      this.userAnswer = "B";
    }
    else if(option == '3'){
      this.userAnswer = "C";
    }
    else if(option == '4'){
      this.userAnswer = "D";
    }else { }
    

    if(this.userAnswer == this.questions[this.question_count].correctoption){
      if(this.currentscore == (this.correctAnswer + this.wrongAnswer)){
        this.correctAnswer++;
        this.isDisabled = false;
        console.log("Quiz Score: " + this.correctAnswer)
        this.isOption = true;
      }  
    }
    else{
      this.wrongAnswer++;
      this.isDisabled = false;
      this.isOption = true;
    }
    this.quizService.setScore(this.correctAnswer);
  }
  }
  
  

