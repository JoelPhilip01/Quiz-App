import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from '../quizservice.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {
  finalScore: any;
  totalScore: any;
  constructor(private quizService: QuizserviceService) {}
  
  ngOnInit(): void {
    this.finalScore = this.quizService.getScore()[0];
    this.totalScore = this.quizService.getScore()[1];
  }
 
}
