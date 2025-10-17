import { Injectable } from '@angular/core';
import { RouterConstants } from '../../../core/constants/router.constast';
import { HttpClient } from '@angular/common/http';
import { ContratoDto } from '../models/contrato.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Contrato {

  
    private apiUrl = RouterConstants.ROUTER_BASE + RouterConstants.ROUTER_CONTRATOS;
  
    constructor(private http: HttpClient) {}
  
    getAll(): Observable<ContratoDto[]> {
      return this.http.get<ContratoDto[]>(this.apiUrl);
    }
  
    getById(id: number): Observable<ContratoDto> {
      return this.http.get<ContratoDto>(`${this.apiUrl}/${id}`);
    }
  
    create(dto: ContratoDto): Observable<ContratoDto> {
      return this.http.post<ContratoDto>(this.apiUrl, dto);
    }
  
    update(id: number, dto: ContratoDto): Observable<void> {
      return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
    }
  
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  
}
