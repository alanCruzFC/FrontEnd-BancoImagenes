import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../../models/usuario.model";


@Injectable({ providedIn: 'root' })
export class EquipoService {
    private apiUrl = 'http://localhost:8080/api/equipos';

    constructor(private http: HttpClient){}

    listar(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrl);
    }

    crear(equipo: any): Observable<string> {
        return this.http.post(`${this.apiUrl}/nuevo`, equipo, { responseType:'text'})
    }
}