export interface ContratoDto {

  id: number;
  numero: string;
  descripcion?: string;
  fechaInicio?: Date | string;
  fechaFin?: Date | string;
  dependenciaId: number;
  dependenciaNombre?: string;  // opcional si quieres mostrar el nombre en listados
}
