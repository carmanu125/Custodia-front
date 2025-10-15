import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AnaquelDto } from '../../models/anaquel.dto';
import { Anaquel } from '../../services/anaquel';

@Component({
  selector: 'app-list-anaquel',
  imports: [RouterModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './list-anaquel.html',
  styleUrl: './list-anaquel.css'
})
export class ListAnaquel {

  displayedColumns: string[] = ['id', 'nombre','vigenciaId'];
    vigencias: AnaquelDto[] = [];
  
    constructor(private anaquelService: Anaquel) {}
  
    ngOnInit(): void {
      // Al iniciar el componente, cargamos la lista desde el backend
      this.anaquelService.getAll().subscribe({
        next: (data) => {
          this.vigencias = data;
          console.log('anaqueles cargadas:', this.vigencias);
        },
        error: (err) => console.error('Error al cargar anaqueles:', err)
      });
    }
}
