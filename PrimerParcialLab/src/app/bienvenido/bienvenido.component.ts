import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  token:any;
  public gitPerfil : any;

  constructor(
    private perfil: UsuarioService,
    private router : Router
  ) {
    this.token = '';
   }

  ngOnInit(): void {
    this.myProfileGitHub();
  }

  public myProfileGitHub(){
    //console.log(this.gitPerfil);

    this.perfil.getProfileGitHub().subscribe((data)=>{
      this.gitPerfil=data;
      //console.log(this.gitPerfil);
    });
  }

}
