import { Component, OnInit,Input } from '@angular/core';
import { Producto } from '../clases/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  @Input() detalles : Producto;

  constructor() { }

  ngOnInit(): void {
    console.log(this.detalles);
  }



}
