import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

  @Input() listadoProd;
  //listadoPaises: any;
  @Output() prodSeleccionado: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    console.log(this.listadoProd);
  }

  ProdSeleccionado(item){
    this.prodSeleccionado.emit(item);
    //console.log(item);
  }


}
