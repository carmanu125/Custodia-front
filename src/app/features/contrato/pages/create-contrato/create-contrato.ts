import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { DependenciaDto } from '../../../dependencia/models/dependencia.dto';
import { Contrato } from '../../services/contrato';
import { Dependencia } from '../../../dependencia/services/dependencia';
import { ContratoDto } from '../../models/contrato.dto';

@Component({
  selector: 'app-create-contrato',
  imports: [RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule],
  templateUrl: './create-contrato.html',
  styleUrl: './create-contrato.css'
})
export class CreateContrato {

  form!: FormGroup;
  dependencias: DependenciaDto[] = [];

  constructor(
    private fb: FormBuilder,
    private contratoService: Contrato,
    private dependenciaService: Dependencia,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadDependencias();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      numero: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: [''],
      fechaInicio: [null],
      fechaFin: [null],
      dependenciaId: [null, Validators.required]
    });
  }

  private loadDependencias(): void {
    this.dependenciaService.getAll().subscribe({
      next: (data) => this.dependencias = data,
      error: (err) => console.error('Error al cargar dependencias:', err)
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dto: ContratoDto = this.form.value;

    this.contratoService.create(dto).subscribe({
      next: () => {
        alert('Contrato creado con éxito');
        this.router.navigate(['/contratos']);
      },
      error: (err) => console.error('Error al crear contrato:', err)
    });
  }

}
