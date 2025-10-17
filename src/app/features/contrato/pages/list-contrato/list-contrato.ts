import { Component } from '@angular/core';
import { ContratoDto } from '../../models/contrato.dto';
import { Contrato } from '../../services/contrato';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-contrato',
  imports: [CommonModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './list-contrato.html',
  styleUrl: './list-contrato.css'
})
export class ListContrato {

  displayedColumns: string[] = [
    'id',
    'numero',
    'descripcion',
    'fechaInicio',
    'fechaFin',
    'dependenciaId'
  ];

  contratos: ContratoDto[] = [];

  constructor(private contratoService: Contrato) {}

  ngOnInit(): void {
    this.contratoService.getAll().subscribe({
      next: (data) => {
        this.contratos = data;
        console.log('Contratos cargados:', this.contratos);
      },
      error: (err) => console.error('Error al cargar contratos:', err)
    });
  }

}
