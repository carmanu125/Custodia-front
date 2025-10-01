import { Component, OnInit } from '@angular/core';
import { Vigencia } from '../../services/vigencia';
import { VigenciaDto } from '../../models/vigencia-dto.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-vigencia',
  imports: [CommonModule],
  templateUrl: './list-vigencia.html',
  styleUrl: './list-vigencia.css'
})
export class ListVigencia implements OnInit {
  vigencias: VigenciaDto[] = [];

  constructor(private vigenciaService: Vigencia) {}

  ngOnInit(): void {
    // Al iniciar el componente, cargamos la lista desde el backend
    this.vigenciaService.getAll().subscribe({
      next: (data) => this.vigencias = data,
      error: (err) => console.error('Error al cargar vigencias:', err)
    });
  }

}
