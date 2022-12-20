import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Meteo} from './meteo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) {
  }

  listMeteo(): Observable<Meteo[]> {
      return this.http.get<Meteo[]>(`${environment.base_url}meteo/villes`)
    }

  }

