import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { HomeComponent } from './components/home/home.component';
import { PadreCochesComponent } from './components/padre-coches/padre-coches.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "productos", component: ListaProductosComponent},
  {path: "padrecoches", component: PadreCochesComponent},
  {path: "padredeportes", component: PadreDeportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
