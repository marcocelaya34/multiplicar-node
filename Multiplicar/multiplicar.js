//REQUIREDS
const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite = 10) => {

    console.log("=====================");
    console.log(`TABLA DEL ${base}`.green);
    console.log("=====================");

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}`);

    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject('El valor introducion de la base no es un numero');
            return;

        }
        let data = '';


        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;

        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.yellow)

        });

    });
}


module.exports = {

    crearArchivo,
    listarTabla

}