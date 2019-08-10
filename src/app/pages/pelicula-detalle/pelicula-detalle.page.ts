import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.page.html',
  styleUrls: ['./pelicula-detalle.page.scss'],
})
export class PeliculaDetallePage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private servPeliculas: PeliculasService) { }

  ngOnInit() {
    let id= this.activatedRoute.snapshot.paramMap.get('id');

    this.servPeliculas.getDetalles(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
    })
  }

  abrirSitio(){
    window.open(this.information.Website, '_blank');
  }

}
