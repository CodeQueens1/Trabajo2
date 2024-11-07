import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/data-base.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent,TranslateModule]
})
export class CorreoPage implements OnInit {

  public correo: string = ''; 
  public cuenta: string = ''; 
  public usuario:Usuario = new Usuario(); 
  toastMessage: string = '';
  showToast: boolean = false;
  

  constructor(private router: Router,private authService: AuthService,private dbService: DataBaseService) {
  }

  ngOnInit() {

      this.authService.usuarioAutenticado.subscribe( (usuarioAutenticado)=>{
      if(usuarioAutenticado){
         this.usuario = usuarioAutenticado
        console.log('Usuario cargado en PreguntaPage:', this.usuario);
         
      }else{
        this.router.navigate(['/ingreso']);

      }
    });

  }

  async validarCorreo(){
    if(!this.correo){
      this.presentToast('Ingrese un correo valido')
      return;
    }
  
    try{
      const usuario  = await this.dbService.buscarUsuarioPorCorreo(this.correo)
      // const usuario:Usuario | undefined = await this.dbService.buscarUsuarioPorCuenta(this.correo);
      if(usuario){
        console.log('Buscando usuario con la cuenta:', this.correo);
        this.router.navigate(['/pregunta']);
      }else {
        this.router.navigate(['/incorrecto']);
      }
    }catch(error){
      console.error('Error', error);
      this.presentToast('Ha sucedido un error')
    }
  }

  presentToast(message: string) {
    this.toastMessage = message;
    this.showToast = true;
  }

  public navigateToLogin(): void {
    this.router.navigate(['/ingreso']);
  }
}



