import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NivelEducacional } from 'src/app/model/nivel-educacional';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Usuario} from 'src/app/model/usuario';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-mi-datos',
  templateUrl: './mi-datos.page.html',
  styleUrls: ['./mi-datos.page.scss'],
  standalone:true,
  imports: [ IonicModule]
})
export class MiDatosPage implements OnInit {


  @ViewChild('titulo', { read: ElementRef }) itemTitulo!: ElementRef;
  @ViewChild('page', { read: ElementRef }) page!: ElementRef;
 

  public listaNivelesEducacionales = NivelEducacional.getNivelesEducacionales();
  public usuario: Usuario;
 


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) 
  
  { 
    this.usuario = new Usuario();
    // this.usuario.recibirUsuario(this.activatedRoute, this.router);
 
    
  }

  ngOnInit() {}

  navegar(pagina: string) {
    // this.usuario.navegarEnviandousuario(this.router, pagina);
  }

  actualizarUsuario() {
    // this.usuario.actualizarUsu();
  }

  
  public navigateToInicio(): void {
    this.router.navigate(['/inicio'],{
    });  // Usa el servicio Router para navegar
  }

  
}

