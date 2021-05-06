import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore/';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  github: any[] = [];
  //rutaDeLaColeccion = '/usuarios';
  //referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;
  //referenciaBd: AngularFirestore;

  constructor(private bd: AngularFirestore,private http: HttpClient) { 
    //this.referenciaBd = bd;
    //this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  public getProfileGitHub(){
    return this.http.get('https://api.github.com/users/RondonLeonR')
  }

  public getAll() {
    return this.github;
  }
}
