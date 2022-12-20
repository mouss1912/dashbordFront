import { MeteoRoutingModule} from './meteo-routing.module';
import { QuizzQuestionComponent } from './widgets/quizz-question/quizz-question.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MeteoComponent } from "./components/meteo.component";

@NgModule({
  declarations : [
    MeteoComponent,
    QuizzQuestionComponent
  ],
  imports : [
    CommonModule,
    SharedModule,

    // TODO-2 : Ajouter le module de routage
    MeteoRoutingModule
  ],
  exports :[

    // TODO-3 : Supprimer l'export du component

  ],
})
export class MeteoModule{}
