import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';
@Pipe({
    name: 'filter'
})
export class FilterCasaPipe implements PipeTransform {
    precio :number;
    /**
     * 
     * @param recetas Array de recetas
     * @param searchText Texto de busqueda
     */
    transform(items: Casa[], searchText: string, alquiler: boolean, venta: boolean, precioMin: number, precioMax: number): Casa[] {

        //si no hay recetas retornar vacio
        if (!items) return [];

        let casasFilterArray: Casa[] = [];

        if (alquiler) {
            items.forEach(it => {
                if (it.alquiler) {
                    casasFilterArray.push(it);
                }
            });
        } else {
            casasFilterArray = items;
        }

        if (venta) {
            items.forEach(it => {
                if (!it.alquiler) {
                    casasFilterArray.push(it);
                }
            });
        } else {
            casasFilterArray = items;
        }
        if( this.precio < precioMin && this.precio > precioMax){
            casasFilterArray.filter(it=>{

            });
        }
        //De los que quedan, filtramos por texto si hay
        if (!searchText) {
            return casasFilterArray; // Si no hay texto se devuelve todo el array
        } else {
            searchText = searchText.toLowerCase();
            let casa = '';
            return casasFilterArray.filter(it => {
                casa = it.nombre + it.direccion;
                casa = casa.toLowerCase();

                return casa.includes(searchText);
            });
        }

        //   if (!searchText && isGlutenFree){
        //     items.forEach( it =>{
        //       if ( it.isGlutenFree ){
        //         return it;
        //       }
        //     });
        //   } 
        //   searchText = searchText.toLowerCase();
        //   //console.log(`filter isGlutenFree ${isGlutenFree}`);

        //   let receta = '';
        //   return items.filter(it => {

        //     if (isGlutenFree) {
        //       if (it.isGlutenFree) {
        //         receta = it.nombre + it.ingredientes + it.cocinero;
        //         receta = receta.toLowerCase();
        //       }
        //     } else {
        //       receta = it.nombre + it.ingredientes + it.cocinero;
        //       receta = receta.toLowerCase();
        //     }
        //     return receta.includes(searchText);
        //   });
        // }

    }
}