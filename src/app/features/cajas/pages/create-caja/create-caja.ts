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
import { Caja } from '../../services/caja';
import { Anaquel } from '../../../anaquel/services/anaquel';
import { CajaDto } from '../../models/caja.dto';
import { AnaquelDto } from '../../../anaquel/models/anaquel.dto';

@Component({
  selector: 'app-create-caja',
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
  templateUrl: './create-caja.html',
  styleUrl: './create-caja.css'
})
export class CreateCaja implements OnInit {

  form!: FormGroup;
  anaqueles: AnaquelDto[] = [];

  constructor(
    private fb: FormBuilder,
    private cajaService: Caja,
    private anaquelService: Anaquel,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadAnaqueles();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3)]],
      anaquelId: [null, Validators.required]
    });
  }

  private loadAnaqueles(): void {
    this.anaquelService.getAll().subscribe({
      next: (data) => this.anaqueles = data,
      error: (err) => console.error('Error al cargar anaqueles:', err)
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dto: CajaDto = this.form.value;

    this.cajaService.create(dto).subscribe({
      next: () => {
        alert('Caja creada con éxito');
        this.router.navigate(['/cajas']);
      },
      error: (err) => console.error('Error al crear caja:', err)
    });
  }
}
