import { Component, Input } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent {

  @Input()
  mascota!:Mascota;

}
