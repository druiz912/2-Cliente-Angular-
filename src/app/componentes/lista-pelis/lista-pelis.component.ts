import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Peliculas } from 'src/app/componentes/peliculas/peliculas';
import { PeliculasServiceService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-lista-pelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: ['./lista-pelis.component.css']
})
export class ListaPelisComponent implements OnInit {

  allPeliculas: Peliculas[] = new Array<Peliculas>();

  @Input() peliculas: Peliculas[] = new Array<Peliculas>();
  
  @Input() cadenaAbuscar: string = '';

  constructor
  (
  private pelisService: PeliculasServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pelisService.getPeliculas().subscribe(
      peliculas => {
        console.log('Obteniendo datos');
        console.log(peliculas);
        this.peliculas = peliculas;
        this.allPeliculas = peliculas;
      }
    )
  }

  onClick(pRuta: string) {
    this.router.navigate([pRuta]);
  }

  gestionPelis(peliculas: any) {
    console.log('Gestionando pelicula en Listado Peliculas: ' + Peliculas);
  }

  ngOnChanges(): void {
    //console.log('Proviene de ListaPelis.ts ' + this.cadenaAbuscar);
    this.peliculas = this.allPeliculas.filter(peliculas => peliculas.titulo.toUpperCase().includes(this.cadenaAbuscar.toUpperCase()));
  }


}
