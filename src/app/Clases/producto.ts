import { Color } from './Color';
export class Producto{
    public id: string;
    public nombre: string;
    public precio: number;
    public tienda: string;
    public descripcion: string;
    public imagenes: any[];
    public colores: Color[];
    public tamanos: any[];
}
