import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rutaDeLaColeccion = "/usuarios";
  referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }


  ShareOne(user: Usuario) {
    const found = this.bd.collection(this.rutaDeLaColeccion, ref =>
      ref.where("email", "==", user.email).where("pass", "==", user.pass));
    return found;
  }

}
