import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-button',
  templateUrl: './quiz-button.component.html',
  styleUrls: ['./quiz-button.component.scss']
})
export class QuizButtonComponent {
  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
  @Input()
  label: string = "";

  @Input()
  date: Date | undefined ;

  @Input()
  temperature: number | undefined ;

  @Input()
  vent: number | undefined ;

  @Input()
  pluie: number | undefined ;

  @Output()
  answerClicked = new EventEmitter();

  onAnswer(){
    this.answerClicked.emit()
  }
  
}
