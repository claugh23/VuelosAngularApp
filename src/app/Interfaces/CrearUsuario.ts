export interface CreateUserModel{
    idUsuario:string;
    nombre:string;
    apellidos:string;
    email:string;
    usuario:string;
    password:string;
    confPassword:string;
    tipoUsuario_IdtiposUsuario?:string
}