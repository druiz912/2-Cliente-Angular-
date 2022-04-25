import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peliculas } from '../componentes/peliculas/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  url: string = 'http://localhost:8080/peliculas/json';

  listadoPeliculas: any[] = [];

  Peliculas: Observable<Peliculas[]> = new Observable();
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  getPeliculas(): Observable<Peliculas[]> {
    console.log("Robando películas de la base de datos...")
    this.Peliculas = this.httpClient.get<Peliculas[]>(this.url)
    return this.Peliculas;

  }

  // Crear producto -
  crearPelicula(Peliculas: Peliculas): Observable<Peliculas>{
    return this.httpClient.post<Peliculas>(this.url, Peliculas);
  }

  // Obtener un producto
  getUnProducto(): Observable<Peliculas> { //Retorna objetos de tipo productos envueltos en un observable
    return this.httpClient.get<Peliculas>(this.url)
  }
  
  // Actualizar

  update(peliculas: Peliculas): Observable<Peliculas> {
    return this.httpClient.put<Peliculas>(this.url , peliculas);
  }

  // Eliminar un producto

 /* delete(id:number): Observable<Peliculas> {
    return this.httpClient.delete<Peliculas>(this.url , Peliculas);
  }
  */
}
