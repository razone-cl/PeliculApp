import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoBusqueda, PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  results: Observable<any>;
  terminoBusqueda = '';
  tipo: TipoBusqueda = TipoBusqueda.all;

  constructor(private servPeliculas: PeliculasService) { }

  ngOnInit() {
  }

  refrescaBusqueda(){
    this.results = this.servPeliculas.dataBusqueda(this.terminoBusqueda, this.tipo);

    // this.results.subscribe(res => {
        //Aqui puede ser tb pero se hará en la vista con angular
    // })
  }

}
