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
  quizzes : Array<Quiz>= []
  constructor(private quizService: QuizserviceService) { }

  ngOnInit(): void { 
    this.quizService.fetchAllQuizzes()
    .subscribe((res:any) => {
      this.quizzes = res;
    });
  }
  }
  
  

