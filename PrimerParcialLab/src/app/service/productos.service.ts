import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Producto } from '../clases/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  actores: any[] = [];

  rutaDeLaColeccion = '/productos';
  referenciaAlaColeccion: AngularFirestoreCollection<Producto>;

  constructor(private bd: AngularFirestore) { 
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaAlaColeccion.valueChanges().subscribe((data: any) => {
      data.forEach(element => {
        this.actores.push(element);
      });
    });
  }

  
  public CrearProdcuto(prod: Producto): any {
    return this.referenciaAlaColeccion.add({ ...prod });
  }

  public getAll(){
    return this.actores;
  }
}
