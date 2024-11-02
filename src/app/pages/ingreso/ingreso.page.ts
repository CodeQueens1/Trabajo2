import { Component, OnInit,ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
  standalone: true,
  imports: [
            IonicModule,  
            CommonModule, FormsModule,
            //usados
            LanguageComponent
          , TranslateModule ]
})
export class IngresoPage implements OnInit {

  cuenta: string = '';
  password: string = '';

  @ViewChild('selectLanguage') selectLanguage!: LanguageComponent;

  constructor(private authService: AuthService //inyectar servicio de autenticación
              , private translate: TranslateService
  ) { }

  ngOnInit() {
    this.cuenta = 'atorres';
    this.password = '1234';
  }

  iniciarSesion() {
    this.authService.login(this.cuenta, this.password);
  }

  async ionViewWillEnter() {
    this.selectLanguage.setCurrentLanguage();
  }

}
