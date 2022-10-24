import { Estrato } from "./estrato.interface";

export interface ProyectoTipo {
    id: number;
    descripcion: string;
}

export interface Proyecto {
    id: number;
    nombre: string;
    direccion: string;
    comuna: string;
    
    cantidad_torres: number;
    cantidad_pisos: number;
    cantidad_apartamentos: number;

    denominacion_id: number;
    estrato_id: number;
    proyecto_tipo_id: number;
}

export interface ProyectoInfo extends Omit<Proyecto, 'estrato_id' | 'proyecto_tipo_id'> {
    Estrato: Estrato,
    ProyectoTipo: ProyectoTipo
}