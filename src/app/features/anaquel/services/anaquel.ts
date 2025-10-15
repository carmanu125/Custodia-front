import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnaquelDto } from '../models/anaquel.dto';
import { HttpClient } from '@angular/common/http';
import { RouterConstants } from '../../../core/constants/router.constast';

@Injectable({
  providedIn: 'root'
})
export class Anaquel {

  // Ajusta la URL según tu backend en .NET
    private apiUrl = RouterConstants.ROUTER_BASE + RouterConstants.ROUTER_ANAQUEL;
  
    constructor(private http: HttpClient) {}
  
    // Obtener todas las vigencias
    getAll(): Observable<AnaquelDto[]> {
      return this.http.get<AnaquelDto[]>(this.apiUrl);
    }
  
    // Obtener vigencia por Id
    getById(id: number): Observable<AnaquelDto> {
      return this.http.get<AnaquelDto>(`${this.apiUrl}/${id}`);
    }
  
    // Crear nueva vigencia
    create(dto: AnaquelDto): Observable<AnaquelDto> {
      return this.http.post<AnaquelDto>(this.apiUrl, dto);
    }
  
    // Actualizar vigencia
    update(id: number, dto: AnaquelDto): Observable<void> {
      return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
    }
  
    // Eliminar vigencia
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  
}
