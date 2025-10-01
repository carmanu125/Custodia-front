import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vigencia } from '../../services/vigencia';

@Component({
  selector: 'app-create-vigencia',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-vigencia.html',
  styleUrl: './create-vigencia.css'
})
export class CreateVigencia {
  form: FormGroup;

  constructor(private fb: FormBuilder, private vigenciaService: Vigencia) {
    // Definimos los campos del formulario
    this.form = this.fb.group({
      id: [0, Validators.required],
      anio: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.vigenciaService.create(this.form.value).subscribe({
        next: () => alert('Vigencia creada con éxito'),
        error: (err) => console.error('Error al crear vigencia:', err)
      });
    }
  }

}
