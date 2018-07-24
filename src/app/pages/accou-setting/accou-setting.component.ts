import { Component, OnInit, Inject } from '@angular/core';
import { SettingService } from '../../services/services.index';

@Component({
  selector: 'app-accou-setting',
  templateUrl: './accou-setting.component.html',
  styles: []
})
export class AccouSettingComponent implements OnInit {

  constructor(public _ajustes: SettingService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema, link: any) {

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }


  aplicarCheck(link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }


  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');
    let  tema = this._ajustes.ajustes.tema;
    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
