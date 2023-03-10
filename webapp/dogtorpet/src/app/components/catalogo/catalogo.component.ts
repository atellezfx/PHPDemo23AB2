import { Component } from '@angular/core';
import { mascotasPrueba } from '../../services/datos-prueba';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  mascotas!:Mascota[];

  constructor() {
    this.mascotas = mascotasPrueba;
  }

}
