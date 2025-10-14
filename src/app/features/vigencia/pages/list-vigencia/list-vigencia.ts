import { Component, OnInit } from '@angular/core';
import { Vigencia } from '../../services/vigencia';
import { VigenciaDto } from '../../models/vigencia-dto.dto';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-vigencia',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './list-vigencia.html',
  styleUrls: ['./list-vigencia.css']
})
export class ListVigencia implements OnInit {
  displayedColumns: string[] = ['id', 'anio'];
  vigencias: VigenciaDto[] = [];

  constructor(private vigenciaService: Vigencia) {}

  ngOnInit(): void {
    // Al iniciar el componente, cargamos la lista desde el backend
    this.vigenciaService.getAll().subscribe({
      next: (data) => {
        this.vigencias = data;
        console.log('Vigencias cargadas:', this.vigencias);
      },
      error: (err) => console.error('Error al cargar vigencias:', err)
    });
  }
}
