import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizserviceService } from '../quizservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpErrorResponse } from '@angular/common/http';


import { QuestionsComponent } from './questions.component';

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsComponent ],
      imports:[
        RouterTestingModule,
        RouterTestingModule.withRoutes([]),
        CommonModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  });

  function setup(){
    const fixture = TestBed.createComponent(QuestionsComponent)
    const component : QuestionsComponent = fixture.debugElement.componentInstance
    const quizservice = fixture.debugElement.injector.get(QuizserviceService)
    return {fixture,component,quizservice}
  }

  it('should create question', () =>{
    const{ component } = setup()
    expect(component).toBeTruthy();
  });

  it('should get all quizes on initial loading' ,() =>{
    const { component } = setup()
    spyOn(component, 'ngOnInit').and.callThrough()
    component.ngOnInit()
    expect(component.ngOnInit).toHaveBeenCalled()
  })

  it('should be false initially for isDisabled',() =>{
    const { component } =setup ()
    expect(component.isDisabled).toBe(true)
    })
  });
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(QuestionsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

