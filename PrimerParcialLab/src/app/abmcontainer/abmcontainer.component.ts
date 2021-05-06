import { Component, OnInit } from '@angular/core';
import { Container } from '../clases/container';
import { ContainerService } from '../service/container.service';



@Component({
  selector: 'app-abmcontainer',
  templateUrl: './abmcontainer.component.html',
  styleUrls: ['./abmcontainer.component.css']
})
export class ABMcontainerComponent implements OnInit {


  public container: Container;
  public listadoContainer: any[];


  constructor(private serviceCon: ContainerService) {
    
  }

  ngOnInit(): void {
    this.listadoContainer = this.serviceCon.getAll();
  }


  agregarContainer(container){
    console.log(container);
    console.log(this.listadoContainer);
    this.listadoContainer.push(container);
    //this.serviceCon.CrearContainer(container);
    //window.location.href = "/container";
  } 

}
