import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({name: 'filterViviendas'})
export class FilterViviendas implements PipeTransform {

  transform(viviendas: Casa[], searchText: string, filtroTipo: string, precioMin: number, precioMax: number): Casa[] {
    // tslint:disable-next-line:no-console
    console.debug(`FilterViviendas  \n
        searchText: ${searchText}   \n
        filtroTipo: ${filtroTipo} \n
        precio minimo: ${precioMin} \n
        precio máximo: ${precioMax}
    `);

    // Variables
    let busqueda = '';
    // Lista auxiliar para cada filtrado
    let auxList: Casa[] = [];
    let listaFiltrada: Casa[] = [];

    // Si no hay resultado --> devolver vacio
    if (!viviendas) { return []; }

    // Filtro por tipo de vivienda
    if (filtroTipo === 'venta') {
        viviendas.forEach(element => {
            if (!element.alquiler) {
                auxList.push(element);
            }
        });
        listaFiltrada = auxList.slice();
        auxList = [];
    } else if (filtroTipo === 'alquiler') {
        viviendas.forEach(element => {
            if (element.alquiler) {
                auxList.push(element);
            }
        });
        listaFiltrada = auxList.slice();
        auxList = [];
    } else {
        listaFiltrada = viviendas.slice();
    }

    // Filtrar por precio mínimo
    if ( precioMin ) {
        listaFiltrada.forEach(element => {
            if (element.precio >= precioMin) {
                auxList.push(element);
            }
        });
        // Lista con filtrado de precio mínimo
        listaFiltrada = auxList.slice();
        auxList = [];
    }

    // Filtrar por precio máximo
    if ( precioMax ) {
        listaFiltrada.forEach(element => {
            if (element.precio <= precioMax) {
                auxList.push(element);
            }
        });
        // Lista con filtrado de precio máximo
        listaFiltrada = auxList.slice();
        auxList = [];
    }

    // Si no hay texto para filtrar la búsqueda --> devolver todas las viviendas
    if (!searchText) {
        return listaFiltrada;
    } else {
        return listaFiltrada.filter( item => {
            busqueda = item.nombre + item.direccion;
            busqueda = busqueda.toLowerCase();
            busqueda = this.replaceAcentos(busqueda);
            return busqueda.includes(searchText);
        });
    }
  }

  replaceAcentos(cadena: string) {
    cadena = cadena.replace(/á/gi, 'a');
    cadena = cadena.replace(/é/gi, 'e');
    cadena = cadena.replace(/í/gi, 'i');
    cadena = cadena.replace(/ó/gi, 'o');
    cadena = cadena.replace(/ú/gi, 'u');
    cadena = cadena.replace(/ñ/gi, 'n');
    return cadena;
}

}