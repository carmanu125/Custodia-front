import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VigenciaDto } from '../models/vigencia-dto.dto';

@Injectable({
  providedIn: 'root'
})
export class Vigencia {

  // Ajusta la URL según tu backend en .NET
  private apiUrl = 'https://localhost:7071/api/vigencias';

  constructor(private http: HttpClient) {}

  // Obtener todas las vigencias
  getAll(): Observable<VigenciaDto[]> {
    return this.http.get<VigenciaDto[]>(this.apiUrl);
  }

  // Obtener vigencia por Id
  getById(id: number): Observable<VigenciaDto> {
    return this.http.get<VigenciaDto>(`${this.apiUrl}/${id}`);
  }

  // Crear nueva vigencia
  create(dto: VigenciaDto): Observable<VigenciaDto> {
    return this.http.post<VigenciaDto>(this.apiUrl, dto);
  }

  // Actualizar vigencia
  update(id: number, dto: VigenciaDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
  }

  // Eliminar vigencia
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
