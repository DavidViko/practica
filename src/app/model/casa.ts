import { Servicio } from "./servicio";

export class Casa {
    id: number;
    nombre: string;
    precio: number;
    alquiler: boolean;
    habitaciones: number;
    foto: string;
    direccion: string;
    servicios: Servicio[] = [];

    constructor(nombre: string, precio: number, alquiler?: boolean, habitaciones?: number, foto?: string, direccion?: string, servicios?: Servicio[],id?:number) {
        this.nombre = nombre;
        this.precio = precio;
        this.alquiler = alquiler ? alquiler : false;
        this.habitaciones = habitaciones ? habitaciones : 0;
        this.foto = foto ? foto : '../assets/img/casa-default.jpg';
        this.direccion = direccion ? direccion : '';
        this.servicios = [];
        this.id = id ? id : -1;
    }   
        /**
     * Añadir los servicios
     */
    addServicios( servicio: Servicio ) {
        this.servicios.push(servicio);
    }

}

