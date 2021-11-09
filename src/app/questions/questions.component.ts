import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz'
import { QuizserviceService } from '../quizservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question_count = 0;
  questions: any = [];
  quizzes : Array<Quiz>= []
  constructor(private quizService: QuizserviceService, private _router: ActivatedRoute) { }

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
    this.question_count++;
  }
  previous(){
    this.question_count--;
  }
  }
  
  

