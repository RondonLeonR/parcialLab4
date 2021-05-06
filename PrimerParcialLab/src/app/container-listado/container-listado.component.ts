import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { Container } from '../clases/container';

@Component({
  selector: 'app-container-listado',
  templateUrl: './container-listado.component.html',
  styleUrls: ['./container-listado.component.css']
})
export class ContainerListadoComponent implements OnInit {

  
  @Input() listado;
  @Output() conSelecc: EventEmitter<any> = new EventEmitter<any>();
  @Input() container: Container;


  constructor() { }

  ngOnInit(): void {
    //console.log(this.listado);
  }


  
  mostrar(con){
    this.conSelecc.emit(con);
  }
}
