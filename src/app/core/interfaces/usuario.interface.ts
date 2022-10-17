export interface Usuario {
    nombres: string;
    apellidos: string;
    documento: string;
    telefono: number;
    fecha_nacimiento: Date;
    email: string;
}

export interface UsuarioLogin extends Pick<Usuario, 'email'>{
    password: string;
}

