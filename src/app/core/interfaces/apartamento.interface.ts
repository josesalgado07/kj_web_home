import { Usuario } from "./usuario.interface";

export interface Apartamento {
    id: number;
    numero: number;
    torre: string;
    proyecto_id: number;
}

export interface ApartamentoInfo extends Omit<Apartamento, 'proyecto_id'>{
    Usuarios: Usuario[]
}

export interface ApartamentoResponse {
    tipo: number;
    apartamentos: ApartamentoInfo[]
}