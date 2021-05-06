import { Component, OnInit, Output , EventEmitter} from '@angular/core';

import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

import { Producto } from '../clases/producto';
import { Router } from '@angular/router';
import { Pais } from '../clases/pais';
import { ProductosService } from '../service/productos.service';
import { Container } from '../clases/container';
import { ContainerService } from '../service/container.service';


@Component({
  selector: 'app-container-alta',
  templateUrl: './container-alta.component.html',
  styleUrls: ['./container-alta.component.css']
})
export class ContainerAltaComponent implements OnInit {

  public forma : FormGroup;
  public container : Container;
  //public paisMostrar: Pais;

  @Output() containerAgregado: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private serviceCon:ContainerService
  ) {
    this.container = new Container();
    //this.paisMostrar = new Pais();
   }

  ngOnInit(): void {

    this.forma = this.fb.group({
      'codigo': ['',[Validators.required]],
      'marca': ['', Validators.required],
      'capacidad': ['', Validators.required],
    })
  }

  
  enviar(){
   // console.log(this.container);
    //imagen por default
    this.serviceCon.CrearContainer(this.container).then(()=>{
      console.log("Container Agregado");
      //this.forma.reset();
    });
    ///enviar a firebase
    this.containerAgregado.emit(this.container);
    //this.container = null;
  }

}
