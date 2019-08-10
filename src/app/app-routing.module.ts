import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
  { path: 'peliculas', loadChildren: './pages/peliculas/peliculas.module#PeliculasPageModule' },
  { path: 'peliculas/:id', loadChildren: './pages/pelicula-detalle/pelicula-detalle.module#PeliculaDetallePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
