import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { AltaProductosComponent } from './alta-productos/alta-productos.component';
import { ListadosPaisesComponent } from './listados-paises/listados-paises.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './producto-listado/producto-listado.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { PaisDetalleComponent } from './pais-detalle/pais-detalle.component';
import { ABMcontainerComponent } from './abmcontainer/abmcontainer.component';
import { ContainerListadoComponent } from './container-listado/container-listado.component';
import { ContainerAltaComponent } from './container-alta/container-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaProductosComponent,
    ListadosPaisesComponent,
    ProductoDetalleComponent,
    ProductoListadoComponent,
    TablaProductosComponent,
    PaisDetalleComponent,
    ABMcontainerComponent,
    ContainerListadoComponent,
    ContainerAltaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
