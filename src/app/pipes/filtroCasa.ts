import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';
@Pipe({
    name: 'filter'
})
export class FilterCasaPipe implements PipeTransform {
    precio: number;
    /**
     * 
     * @param recetas Array de recetas
     * @param searchText Texto de busqueda
     */
    transform(items: Casa[], searchText: string, modo:string, precioMin: number = 0, precioMax: number = 0): Casa[] {

        console.log(`Modo ${modo} precioMin ${precioMin} preciomax ${precioMax}`);
        //si no hay recetas retornar vacio
        if (!items) return [];

        let casasFilterArray: Casa[] = [];

        if (modo=="0"){
            casasFilterArray = items;
        }
        if (modo=="1") {
            items.forEach(it => {
                if (!it.alquiler) {
                    casasFilterArray.push(it);
                }
            });
        }

        if (modo=="2") {
            items.forEach(it => {
                if (it.alquiler) {
                    casasFilterArray.push(it);
                }
            });
        }

        if (precioMin === 0 || precioMin === undefined){    
        } else{
            casasFilterArray.filter(it => {
                return(it.precio>=precioMin)
            });
        } 

        if (precioMax === 0 || precioMax === undefined){  
        } else{
            casasFilterArray.filter(it => {
                return(it.precio<=precioMax)
            });
        } 

        //De los que quedan, filtramos por texto (nombre y/o direccion)
        if (!searchText) {
            return casasFilterArray; // Si no hay texto se devuelve todo el array
        } else {
            searchText = searchText.toLowerCase();
            let busqueda = '';
            return casasFilterArray.filter(it => {
                busqueda = it.nombre + it.direccion;
                busqueda = busqueda.toLowerCase();

                return busqueda.includes(searchText);
            });
        }
    }
}