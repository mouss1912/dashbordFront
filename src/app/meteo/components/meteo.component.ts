
import { MeteoService } from '../core/meteo.service';
import { Meteo } from '../core/meteo';
import { OnInit, OnDestroy, Component } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnDestroy {



  userName = '';
  currentQuestionIndex = 0;
  totalPoints = 0;
  quizTime = 0;
  quizzEnded = false;

  meteos: Meteo[] = [];

  contentLoading : boolean = true;

  constructor(private meteoService: MeteoService) {

  }

  ngOnInit(): void {

    this.meteoService.listMeteo().subscribe(
        (result => {
          this.meteos = result;
        }
      ), err => {
        alert('Une erreur est survenue !')
      }
    );
  }

  ngOnDestroy(): void {
  }

  
}
