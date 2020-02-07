import { Component, OnInit } from '@angular/core';
import { Gato } from '../gato';
import { GatoService } from '../gato.service';

@Component({
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.css']
})

export class ListaGatosComponent implements OnInit {

  gatos : Gato[];
  
  constructor(private gatoService: GatoService) { }

  ngOnInit() {
    this.getGatosJSONSERVER();
  }

   getGatosJSONSERVER() : void {
    this.gatoService.getGatosJSONSERVER()
      .subscribe(gatos => this.gatos = gatos);
  }

}
