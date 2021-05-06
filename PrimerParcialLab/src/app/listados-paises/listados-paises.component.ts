import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PaisesService } from '../service/paises.service';


@Component({
  selector: 'app-listados-paises',
  templateUrl: './listados-paises.component.html',
  styleUrls: ['./listados-paises.component.css']
})
export class ListadosPaisesComponent implements OnInit {

  listadoPaises:any;
  //listadoPaises: any;
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();


  constructor(private apiPais: PaisesService) { }

  ngOnInit(): void {
    this.listadoPaises = this.apiPais.getAll();
    console.log(this.listadoPaises);
  }


  PaisSeleccionado(item){
    //console.log(item);
    this.paisSeleccionado.emit(item);
  }
}
