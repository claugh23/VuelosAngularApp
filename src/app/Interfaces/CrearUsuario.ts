export interface CreateUserModel{
    IdUsuario:string;
    Nombre:string;
    Apellidos:string;
    Email:string;
    Usuario:string;
    Password:string;
    ConfPassword:string;
    TipoUsuario_IdtiposUsuario?:string
}