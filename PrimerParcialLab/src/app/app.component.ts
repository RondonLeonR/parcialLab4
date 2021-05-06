import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimerParcialLab';
  token: any;

  ngOnInit(){
    this.token = localStorage.getItem('token');
    console.log(this.token);
  }

  loginAdmin(){
    if(this.token == "admin@rapido.com"){
      return true;
    }
    else{
      return false;
    }
  }
}
