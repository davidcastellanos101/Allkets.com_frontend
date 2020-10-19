import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/Home.component';
import { CuentaComponent } from './components/cuenta/Cuenta.component';
import { TiendaComponent } from './components/tienda/Tienda.component';
import { Error404Component } from './components/error404/Error404.component';
import { ProductoComponent } from './components/Producto/Producto.component';
import { AuthGuard } from './Helpers/AuthGuard';
import { CrearTiendaComponent } from './components/Header/CrearTienda/CrearTienda.component';
import { AcercaDeAllketsComponent } from './components/Footer/AcercaDeAllkets/AcercaDeAllkets.component';
import { TerminosCondicionesComponent } from './components/Footer/TerminosYCondiciones/TerminosYCondiciones.component';
import { PoliticaPrivacidadComponent } from './components/Footer/PoliticaPrivacidad/PoliticaPrivacidad.component';
import { SoporteComponent } from './components/Footer/Soporte/Soporte.component';
import { AyudaComponent } from './components/Footer/Ayuda/Ayuda.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'micuenta',
    component: CuentaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tienda',
    component: TiendaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'producto/:tienda/:id/:nombre',
    component: ProductoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crear-tienda',
    component: CrearTiendaComponent,
  },
  {
    path: 'acercaDeAllkets',
    component: AcercaDeAllketsComponent,
  },
  {
    path: 'terminosCondiciones',
    component: TerminosCondicionesComponent,
  },
  {
    path: 'politicaPrivacidad',
    component: PoliticaPrivacidadComponent,
  },
  {
    path: 'ayuda',
    component: AyudaComponent,
  },
  {
    path: 'soporte',
    component: SoporteComponent,
  },
  {
    path: '404',
    component: Error404Component,
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
