import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CajaDto } from '../models/caja.dto';
import { RouterConstants } from '../../../core/constants/router.constast';

@Injectable({
  providedIn: 'root'
})
export class Caja {

  private apiUrl = RouterConstants.ROUTER_BASE + RouterConstants.ROUTER_CAJAS;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CajaDto[]> {
    return this.http.get<CajaDto[]>(this.apiUrl);
  }

  getById(id: number): Observable<CajaDto> {
    return this.http.get<CajaDto>(`${this.apiUrl}/${id}`);
  }

  create(dto: CajaDto): Observable<CajaDto> {
    return this.http.post<CajaDto>(this.apiUrl, dto);
  }

  update(id: number, dto: CajaDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
