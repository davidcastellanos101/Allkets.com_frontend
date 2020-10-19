import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeaderComponent } from './components/header/Header.component';
import { FooterComponent } from './components/footer/Footer.component';
import { TrendsComponent } from './components/home/trends/Trends.component';
import { HomeComponent } from './components/home/Home.component';
import { PromosComponent } from './components/Promos/Promos.component';
import { SlidersComponent } from './components/home/sliders/Sliders.component';
import { TiendaComponent } from './components/tienda/Tienda.component';
import { CuentaComponent } from './components/cuenta/Cuenta.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/Error404.component';
import { ProductoComponent } from './components/Producto/Producto.component';
import { CardComponent } from './components/card/CardComponent.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SWIPER_CONFIG, SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumComponent } from './components/breadcrum/Breadcrum.component';

import { TranslateModule } from '@ngx-translate/core';
import { CrearProductoComponent } from './components/cuenta/crear-producto/Crear-producto.component';
import { ActualizarTiendaComponent } from './components/cuenta/actualizar-tienda/Actualizar-tienda.component';
import { GestionAPIService } from './Services/Gestion-api.service';
import { CrearTiendaComponent } from './components/Header/CrearTienda/CrearTienda.component';
import { AcercaDeAllketsComponent } from './components/Footer/AcercaDeAllkets/AcercaDeAllkets.component';
import { TerminosCondicionesComponent } from './components/Footer/TerminosYCondiciones/TerminosYCondiciones.component';
import { PoliticaPrivacidadComponent } from './components/Footer/PoliticaPrivacidad/PoliticaPrivacidad.component';
import { AyudaComponent } from './components/Footer/Ayuda/Ayuda.component';
import { SoporteComponent } from './components/Footer/Soporte/Soporte.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrendsComponent,
    SlidersComponent,
    HomeComponent,
    PromosComponent,
    TiendaComponent,
    CardComponent,
    CuentaComponent,
    LoginComponent,
    Error404Component,
    ProductoComponent,
    BreadcrumComponent,
    CrearProductoComponent,
    ActualizarTiendaComponent,
    CrearTiendaComponent,
    AcercaDeAllketsComponent,
    TerminosCondicionesComponent,
    PoliticaPrivacidadComponent,
    AyudaComponent,
    SoporteComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    GestionAPIService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
