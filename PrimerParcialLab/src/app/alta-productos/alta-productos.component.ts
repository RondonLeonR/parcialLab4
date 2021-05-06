import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

import { Producto } from '../clases/producto';
import { Router } from '@angular/router';
import { Pais } from '../clases/pais';
import { ProductosService } from '../service/productos.service';



@Component({
  selector: 'app-alta-productos',
  templateUrl: './alta-productos.component.html',
  styleUrls: ['./alta-productos.component.css']
})
export class AltaProductosComponent implements OnInit {

  public forma : FormGroup;
  public producto : Producto;
  public paisMostrar: Pais;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private serviceProd:ProductosService
  ) {
    this.producto = new Producto();
    this.paisMostrar = new Pais();
   }

  ngOnInit(): void {

    this.forma = this.fb.group({
      'codigo': ['',[Validators.required]],
      'descripcion': ['', Validators.required],
      'precio': ['', Validators.required],
      'stock': ['', Validators.required],
      'paisDeOrigen': [],
      'comestible': []
    })
  }

  paisElegido(pais:any){
    this.paisMostrar = pais
    //this.paisMostrar.name = pais.name;
    //this.paisMostrar.capital = pais.capital;
    //this.paisMostrar.flag = pais.flag;
    //this.paisMostrar.population = pais.population;
    
    //this.paisRetorno = this.paisMostrar;
    this.producto.paisOrigen = pais;
    //this.actor.foto = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qDRGPAcQoW8Wuig9bvoLpHwf1gU.jpg";

    //console.log(this.actor);
  }

  
  enviar(){
    console.log(this.producto);
    //imagen por default

    ///enviar a firebase
    this.serviceProd.CrearProdcuto(this.producto).then(()=>{
      console.log("Prod enviado");
      this.forma.reset();
    });
    this.router.navigateByUrl("");
  }

}
