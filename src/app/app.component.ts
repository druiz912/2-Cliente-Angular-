import { Component, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Peliculeo';

  @Input() textoAbuscar: string = '';

  constructor() { }

  
  
  
  buscar(textoAbuscar: any): void {
    console.log('Buscando en app.ts  ' + textoAbuscar);
    this.textoAbuscar = textoAbuscar;
  }
  
}
