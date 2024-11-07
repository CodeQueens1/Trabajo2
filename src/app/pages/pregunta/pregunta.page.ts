import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonicModule,HeaderComponent,TranslateModule]
})
export class PreguntaPage implements OnInit {

  showToast: boolean = false;
  toastMessage: string = '';

  public usuario: Usuario = new Usuario();
  public respuesta: string = '';

  constructor(    private activatedRoute: ActivatedRoute,
                   private router: Router,
                   private authService: AuthService) 
  {
   }

  ngOnInit() {
    this.authService.usuarioAutenticado.subscribe( (usuarioAutenticado)=>{
      
      if(usuarioAutenticado){
         this.usuario = usuarioAutenticado
        console.log('Usuario cargado en PreguntaPage:', this.usuario);
      }
    });

   
  }


  public validarRespuestaSecreta(): void {
    if (!this.respuesta.trim()) {
      this.presentToast('Por favor, escribe una respuesta.');
      return;
    }

    if (this.usuario && this.usuario.respuestaSecreta === this.respuesta) {
      // Si la respuesta secreta es correcta, redirige a "correcto.html"

      this.router.navigate(['/correcto']);
    } else {
      // Si la respuesta secreta es incorrecta, redirige a "incorrecto.html"
      this.router.navigate(['/incorrecto']);
    }
  }

  presentToast(message: string) {
    this.toastMessage = message;
    this.showToast = true;
  }

  navigateToLogin() {
    this.router.navigate(['/ingreso']); // Reemplaza '/login' con la ruta correcta
  }
}



