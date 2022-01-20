import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Opcao } from "../models/opcao.model";

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
  getOpcaoTema(): Observable<Array<Opcao>> {
    return this.http.get<Array<Opcao>>("assets/opcao.json");
  }

  setTema(themeToSet) {
    // TODO(@SiddAjmera): Implement this later
  }
}
