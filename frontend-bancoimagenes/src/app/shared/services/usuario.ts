import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../../models/usuario.model"


@Injectable({ providedIn: 'root' })
export class UsuarioService {
    private apiUrl = 'http://localhost:8080/api/usuarios';

    constructor(private http: HttpClient){}

    listar(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.apiUrl);
    }

    crear(usuario: Usuario):Observable<string> {
        return this.http.post(`${this.apiUrl}/nuevo`, usuario, { responseType:'text'})
    }

    obtener(id: number): Observable<Usuario>{
        return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
    }
}