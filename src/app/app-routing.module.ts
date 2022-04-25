import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InfoPelisComponent } from './componentes/info-pelis/info-pelis.component';
import { AppComponent } from './app.component';
import { PagErrorComponent } from './componentes/pag-error/pag-error.component';
import { ListaPelisComponent } from './componentes/lista-pelis/lista-pelis.component';
import { FormPelisComponent } from './componentes/form-pelis/form-pelis.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';

const routes: Routes = [
  // ROUTING DE ADMINISTRACION
  {
    path: 'admin',
    component: AdministracionComponent,
    children: [
      {
        path: 'crearPelicula',
        component: FormPelisComponent,
      },
    ],
  },

  //{path: '', pathMatch: 'full' , redirectTo: ''  },
  {
    path: 'inicio',
    component: AppComponent,
  },
  {
    path: 'listapeliculas',
    component: ListaPelisComponent,
  },
  {
    path: 'detallesPeli/:id',
    component: InfoPelisComponent,
  },
  {
    path: 'errorPerso', component:PagErrorComponent
  },
  {
    path: 'categorias', redirectTo: 'errorPerso'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
