import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum TipoBusqueda{
    all = '',
    movie = 'movie',
    series = 'series',
    episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

    url = 'http://omdbapi.com/';
    apiKey = '9559f7ce';

  constructor(private http: HttpClient)  {  }

  dataBusqueda(titulo: string, tipo: TipoBusqueda): Observable<any> {
      console.log('tipo: ', tipo);
      console.log('termino: ', titulo);
      return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${tipo}&apikey=${this.apiKey}`)
      .pipe(
        map(results => {
          console.log('RAW: ', results);
          return results['Search'];
        })
      );
  }

  getDetalles(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
