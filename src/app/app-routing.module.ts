import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
  {path: 'card', component: CardComponent},
  {path: '', pathMatch: 'full', component: CardComponent},
  {path: '**', pathMatch: 'full', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
