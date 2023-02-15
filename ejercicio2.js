const miarray = Array.from({length: 10}, () => Math.floor(Math.random() * 5));
            console.log(miarray);
            const busqueda = (arreglo) => {
                let variable = 0;
                let contador = 0;
                let cuenta = 0;
                arreglo.map(p => {
                    cuenta = 0
                    arreglo.map(x => {
                        if (p == x) { cuenta++ }
                    })
                    if (cuenta > contador) {
                        contador = cuenta;
                        variable = p;
                    }
                });
                console.log("valor mas repetido: " + variable + "\n" + "numero de veces contada: " + contador);
            }
            busqueda(miarray, (respuesta) => {
            console.log(respuesta)
});
