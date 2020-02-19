import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoletimComponent} from './boletim/boletim.component';
import {GuiasComponent} from './guias/guias.component';

const routes: Routes = [
  {path: '', component: GuiasComponent},
  {path: 'boletim', component: BoletimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}