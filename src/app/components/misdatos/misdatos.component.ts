import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.scss'],
  standalone:true,
  imports: [
    IonicModule,FormsModule]
})
export class MisdatosComponent  implements OnInit {
  public usuario: Usuario = new Usuario();

  constructor(private authService:AuthService) { 
    this.authService.usuarioAutenticado.subscribe((usuarioAutenticado)=>{
      if(usuarioAutenticado){
        this.usuario = usuarioAutenticado;
      }
    });
  }

  ngOnInit() {}

}
