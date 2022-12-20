import { Quizz, QuizzAnswer } from '../../core/quizz.models';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Meteo} from '../../core/meteo';

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.scss']
})
export class QuizzQuestionComponent {

  // @Input()
  // //questionItem: Quizz;
  // meteo!: Meteos;

  // @Output()
  // onAnswer = new EventEmitter();

  // constructor() {

  // }

  // ngOnInit(): void {

  // }

  // ngOnDestroy(): void {
  // }

  // onAnswerSelected(selectedAnswer : Meteo){
  //   this.onAnswer.emit(selectedAnswer)
  // }
  
}
