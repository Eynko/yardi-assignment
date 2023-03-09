import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GameItemAnalysisComponent } from './game-item-analysis/game-item-analysis.component';
import { GameItemFormComponent } from './game-item-form/game-item-form.component';
import { GameItemExpenseGraphComponent } from './game-item-expense-graph/game-item-expense-graph.component';
import { GameItemAPPIGraphComponent } from './game-item-appigraph/game-item-appigraph.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GameItemAnalysisComponent,
    GameItemFormComponent,
    GameItemExpenseGraphComponent,
    GameItemAPPIGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
