import { Color } from './Color';
import { Tienda } from './Tienda';
import { Categoria } from './Categoria';
export class Producto{
    public id: string;
    public nombre: string;
    public precio: number;
    public descripcion: string;
    public imagenes: any[];
    public colores: Color[];
    public tienda: string;
    public categoria: Categoria;
    public tamanos: any[];
}
