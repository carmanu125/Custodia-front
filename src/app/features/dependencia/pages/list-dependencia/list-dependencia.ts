import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Dependencia } from '../../services/dependencia';
import { DependenciaDto } from '../../models/dependencia.dto';

@Component({
  selector: 'app-list-dependencia',
  imports: [RouterModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './list-dependencia.html',
  styleUrl: './list-dependencia.css'
})
export class ListDependencia {
  displayedColumns: string[] = ['id', 'nombre','cajaId','observaciones'];
      vigencias: DependenciaDto[] = [];
    
      constructor(private dependenciaService: Dependencia) {}
    
      ngOnInit(): void {
        // Al iniciar el componente, cargamos la lista desde el backend
        this.dependenciaService.getAll().subscribe({
          next: (data) => {
            this.vigencias = data;
            console.log('Vigencias cargadas:', this.vigencias);
          },
          error: (err) => console.error('Error al cargar vigencias:', err)
        });
      }
  

}
