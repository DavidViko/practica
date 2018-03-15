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

    constructor(nombre: string, precio: number, alquiler?: boolean, foto?: string, direccion?: string, servicios?: Servicio[]) {
        this.nombre = nombre;
        this.precio = precio;
        this.alquiler = alquiler;
        if (foto) {
            this.foto = foto;
        } else {
            this.foto = '../assets/img/casa-default.jpg';
        };
        this.direccion = direccion;

        // let servicio;
        // this.servicios.forEach(el =>{

        // });
        this.servicios = servicios;
        //this.servicios = (servicios) ? servicios : [];
    }

}

