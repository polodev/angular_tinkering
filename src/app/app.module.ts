import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
