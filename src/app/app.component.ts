import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre = 'DASHBORD API';

  navigations = [
    {
      titre : 'Meteo',
      link : 'meteo'
    },
    {
      titre : 'A propos',
      link : 'about'
    },
    {
      titre : 'Login',
      link : 'login'
    }
  ]
}
