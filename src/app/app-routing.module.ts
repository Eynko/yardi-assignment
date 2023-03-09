import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GameItemAnalysisComponent } from './game-item-analysis/game-item-analysis.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'game-item-analysis', component: GameItemAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
