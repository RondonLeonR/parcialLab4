import { Component, OnInit } from '@angular/core';
import { Producto } from '../clases/producto';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent implements OnInit {

  public prodMostrar: Producto;
  public listadoProds;

  constructor(private service:ProductosService) { 
  }

  ngOnInit(): void {
    this.listadoProds = this.service.getAll();
    console.log(this.listadoProds);
  }

  prodElegido(prod:any){
    this.prodMostrar = prod;
  }
}
