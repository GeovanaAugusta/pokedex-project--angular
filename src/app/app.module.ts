import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules - os que importei
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

// Para usar a API de pokémons, primeiro passo é importar aqui no AppModule o http
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
