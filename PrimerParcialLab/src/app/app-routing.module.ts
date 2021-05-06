import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMcontainerComponent } from './abmcontainer/abmcontainer.component';
import { AltaProductosComponent } from './alta-productos/alta-productos.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ContainerAltaComponent } from './container-alta/container-alta.component';
import { LoginComponent } from './login/login.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './producto-listado/producto-listado.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/bienvenido', pathMatch: 'full'
  },
  {
    path: 'bienvenido', component: BienvenidoComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: "producto",
    children: [
      {
        path: 'altaProductos', component: AltaProductosComponent
      },

      {
        path: 'detalleProd', component: ProductoListadoComponent
      },
    ]
  },

  {
    path: 'container', component: ABMcontainerComponent
  },
  {
    path: 'containerAlta', component: ContainerAltaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
