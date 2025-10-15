import { Injectable } from '@angular/core';
import { RouterConstants } from '../../../core/constants/router.constast';
import { HttpClient } from '@angular/common/http';
import { DependenciaDto } from '../models/dependencia.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dependencia {
  private apiUrl = RouterConstants.ROUTER_BASE + RouterConstants.ROUTER_DEPENDENCIAS;

  constructor(private http: HttpClient) {}

  getAll(): Observable<DependenciaDto[]> {
    return this.http.get<DependenciaDto[]>(this.apiUrl);
  }

  getById(id: number): Observable<DependenciaDto> {
    return this.http.get<DependenciaDto>(`${this.apiUrl}/${id}`);
  }

  create(dto: DependenciaDto): Observable<DependenciaDto> {
    return this.http.post<DependenciaDto>(this.apiUrl, dto);
  }

  update(id: number, dto: DependenciaDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
