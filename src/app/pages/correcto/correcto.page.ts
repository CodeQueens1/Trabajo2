import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HeaderComponent,TranslateModule]
})
export class CorrectoPage implements OnInit {
  
usuario: Usuario = new Usuario();
password: string | undefined

  constructor(private router: Router) { }

  ngOnInit() {

    const navigation = this.router.getCurrentNavigation();
    this.usuario = navigation?.extras.state?.['usuario']; // Obtener el usuario pasado

    if (this.usuario) {
      this.password = this.usuario.password; // Captura la contraseña del usuario
    } else {
      console.log('No se encontró información del usuario.');
    }
  }

  
  public navigateToLogin(): void {
    this.router.navigate(['/ingreso']);  // Usa el servicio Router para navegar
  } 

}
