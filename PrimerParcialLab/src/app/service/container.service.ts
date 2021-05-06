import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Container } from '../clases/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  containers: any[] = [];

  rutaDeLaColeccion = '/container';
  referenciaAlaColeccion: AngularFirestoreCollection<Container>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaAlaColeccion.valueChanges().subscribe((data: any) => {
      data.forEach(element => {
        this.containers.push(element);
      });
    });
  }


  public CrearContainer(con: Container): any {
    return this.referenciaAlaColeccion.add({ ...con });
  }

  public TraerActores() {
    return this.referenciaAlaColeccion;
  }


  public getAll() {
    return this.containers;
  }
}
