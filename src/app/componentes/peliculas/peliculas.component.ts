import { Component, OnInit, Input } from '@angular/core';
import { PeliculasServiceService } from 'src/app/services/peliculas.service';
import { Peliculas } from './peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  @Input() peliculas: Peliculas[] = new Array<Peliculas>();

  titulo: string = '';
  sinopsis: string = '';
  fechaEstreno: string = '';
  imagen: string = '';
  video: string = '';

  constructor(private servicio: PeliculasServiceService) {

  }

  cuadroTitulo: string = '';
  cuadroSinopsis: string = '';
  cuadroFechaEstreno: string = '';
  cuadroImagen: string = '';
  cuadroVideo: string = '';

  ngOnInit(): void {
    this.servicio.getPeliculas().subscribe(
      prod => this.peliculas = prod
    )
  }
}
