import { Injectable } from '@angular/core';
import { Gato } from './gato';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders} from '@angular/common/http'; // Necesario para HTTP


@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor(private mensajeService: MensajeService,
              private _http: HttpClient) { }

  getGatosJSONSERVER():Observable<any>{
    this.mensajeService.add("Desde http: gatos obtenidos");
    return this._http.get(`http://localhost:3000/gatos`);
  }

  getGatoJSONSERVER(id:number): Observable<any> {
    this.mensajeService.add(`Desde http: obtenido gato con id=${id}`);
    return this._http.get(`http://localhost:3000/gatos/${id}`);
  }
}
