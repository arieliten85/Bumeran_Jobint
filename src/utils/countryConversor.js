const countryConversor = (arr) => {

    arr.map((e) => {
        if (e.CountryId === 1) {
            e.CountryId = "Uruguay";
        }
        if (e.CountryId === 2) {
            e.CountryId = "Paraguay";
        }
        if (e.CountryId === 3) {
            e.CountryId = "Bolivia";
        }
        if (e.CountryId === 4) {
            e.CountryId = "Argentina";
        }
        if (e.CountryId === 5) {
            e.CountryId = "Chile";
        }
    })
    return arr
}


/* let arr = [{CountryId: 1, En_Proceso: 1, No_Iniciada: 2, Finalizada: 0},
{CountryId: 2, En_Proceso: 2, No_Iniciada: 0, Finalizada: 1},
{CountryId: 3, En_Proceso: 0, No_Iniciada: 2, Finalizada: 2},
{CountryId: 4, En_Proceso: 0, No_Iniciada: 1, Finalizada: 1},
{CountryId: 5, En_Proceso: 2, No_Iniciada: 0, Finalizada: 0}]
console.log(countryConversor(arr))
 */
export default countryConversor 