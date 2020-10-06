import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductoComponent } from "./components/producto/producto.component";
import { AuthGuard } from './Helpers/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'micuenta',
    component: CuentaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tienda',
    component: TiendaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'producto/:tienda/:id/:nombre',
    component: ProductoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: Error404Component,
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
