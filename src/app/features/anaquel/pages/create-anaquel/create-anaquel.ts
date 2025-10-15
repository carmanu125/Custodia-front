import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Anaquel } from '../../services/anaquel';
import { Vigencia } from '../../../vigencia/services/vigencia';
import { AnaquelDto } from '../../models/anaquel.dto';
import { VigenciaDto } from '../../../vigencia/models/vigencia-dto.dto';

@Component({
  selector: 'app-create-anaquel',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './create-anaquel.html',
  styleUrl: './create-anaquel.css'
})
export class CreateAnaquel implements OnInit {

  form!: FormGroup;
  vigencias: VigenciaDto[] = [];

  constructor(
    private fb: FormBuilder,
    private anaquelService: Anaquel,
    private vigenciaService: Vigencia,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadVigencias();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      vigenciaId: [null, Validators.required]
    });
  }

  private loadVigencias(): void {
    this.vigenciaService.getAll().subscribe({
      next: (data) => this.vigencias = data,
      error: (err) => console.error('Error al cargar vigencias:', err)
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dto: AnaquelDto = this.form.value;

    this.anaquelService.create(dto).subscribe({
      next: () => {
        alert('Anaquel creado con éxito');
        this.router.navigate(['/anaqueles']);
      },
      error: (err) => console.error('Error al crear anaquel:', err)
    });
  }
}
