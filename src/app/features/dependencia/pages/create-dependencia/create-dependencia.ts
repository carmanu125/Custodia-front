import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CajaDto } from '../../../cajas/models/caja.dto';
import { Dependencia } from '../../services/dependencia';
import { Caja } from '../../../cajas/services/caja';
import { Router, RouterModule } from '@angular/router';
import { DependenciaDto } from '../../models/dependencia.dto';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-dependencia',
  imports: [CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './create-dependencia.html',
  styleUrl: './create-dependencia.css'
})
export class CreateDependencia {

  form!: FormGroup;
  cajas: CajaDto[] = [];

  constructor(
    private fb: FormBuilder,
    private dependenciaService: Dependencia,
    private cajaService: Caja,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadCajas();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      cajaId: [null, Validators.required],
      observaciones: [null, Validators.required] 
    });
  }

  private loadCajas(): void {
    this.cajaService.getAll().subscribe({
      next: (data) => this.cajas = data,
      error: (err) => console.error('Error al cargar anaqueles:', err)
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dto: DependenciaDto = this.form.value;

    this.dependenciaService.create(dto).subscribe({
      next: () => {
        alert('dependencia creada con éxito');
        this.router.navigate(['/dependencias']);
      },
      error: (err) => console.error('Error al crear caja:', err)
    });
  }

}
