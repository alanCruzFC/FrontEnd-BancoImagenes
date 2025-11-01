import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class EquipoService {
    private apiUrl = 'http://localhost:8080/api/usuarios';

    constructor(private http: HttpClient){}

    listar(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    crear(equipo: any): Observable<string> {
        return this.http.post(`${this.apiUrl}/nuevo`, equipo, { responseType:'text'})
    }
}