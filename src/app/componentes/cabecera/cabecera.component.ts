import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Routes } from '@angular/router';
import { PeliculasServiceService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  buscarTexto: string = '';

  @Output() busquedaEvent: EventEmitter<string> = new EventEmitter<string>();

  

  constructor(private servicioPeliculas: PeliculasServiceService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.busquedaEvent.emit(this.buscarTexto);
  }

}
