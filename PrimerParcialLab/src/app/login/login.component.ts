import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { AuthService } from '../service/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAux: Usuario;
  constructor(private auth: AuthService,private router:Router) {
    this.userAux = new Usuario();
  }

  ngOnInit(): void {
  }

  onLogin(){
    this.auth.ShareOne(this.userAux).valueChanges().subscribe(result => {
      if (result.length == 1) {
        console.log("Logeado!");
        localStorage.setItem('token', this.userAux.email);

        window.alert("Logeado Correctamente!");
        //this.router.navigateByUrl("/home");
        window.location.href = "/bienvenido";
      }
      else {
        //window.alert("Error! Wrong email or password");
        console.log("Email o Clave equivocados!");
      }
    });

  }
  loginRapido(elegido:any){
    if(elegido == 0){
      this.userAux.email = "admin@rapido.com";
      this.userAux.pass = "123";
    }
    else{
      this.userAux.email = "empleado@rapido.com";
      this.userAux.pass = "123";
    }
  }
}
