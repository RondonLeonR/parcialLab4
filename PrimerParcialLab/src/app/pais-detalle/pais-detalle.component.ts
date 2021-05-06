import { Component, OnInit , Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {

  @Input() paisMostrar;
  @Input() deshabilitarBtn;

  @Output() paisDeshabilitado: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  

  EliminarPais(){
    this.paisDeshabilitado.emit(this.paisMostrar);
    this.paisMostrar = null
  }


}
