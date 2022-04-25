import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPelisComponent } from './componentes/lista-pelis/lista-pelis.component';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { InfoPelisComponent } from './componentes/info-pelis/info-pelis.component';
import { PagErrorComponent } from './componentes/pag-error/pag-error.component';
import { FormPelisComponent } from './componentes/form-pelis/form-pelis.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaPelisComponent,
    CabeceraComponent,
    PeliculasComponent,
    InfoPelisComponent,
    PagErrorComponent,
    FormPelisComponent,
    AdministracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [
    AppComponent, PeliculasComponent, CabeceraComponent,
    InfoPelisComponent, AdministracionComponent, PagErrorComponent ]
})
export class AppModule { }
