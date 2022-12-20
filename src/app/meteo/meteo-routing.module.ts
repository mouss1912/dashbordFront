import { MeteoComponent } from './components/meteo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes : Routes = [
  {
    path : '',
    component : MeteoComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeteoRoutingModule{

}
