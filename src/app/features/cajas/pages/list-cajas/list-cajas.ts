import { Component } from '@angular/core';
import { CajaDto } from '../../models/caja.dto';
import { Caja } from '../../services/caja';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-cajas',
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './list-cajas.html',
  styleUrl: './list-cajas.css'
})
export class ListCajas {
  displayedColumns: string[] = ['id', 'codigo','anaquelId'];
    vigencias: CajaDto[] = [];
  
    constructor(private vigenciaService: Caja) {}
  
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
