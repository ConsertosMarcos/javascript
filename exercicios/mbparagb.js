/**
 * Calculo de quantos litros cabem no aquario
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

// Função para converter MB para GB
function mbToGb(mb) {
    return mb / 1024; // 1 GB = 1024 MB
}

// Função para converter GB para MB
function gbToMb(gb) {
    return gb * 1024; // 1 GB = 1024 MB
}

// Função principal para interação com o usuário
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Digite o valor em MB para converter para GB: ', (mbInput) => {
        const mb = parseFloat(mbInput);

        if (!isNaN(mb)) {
            const gb = mbToGb(mb);
            console.log(`${mb} MB é igual a ${gb} GB`);
        } else {
            console.log('Valor inválido. Por favor, digite um número válido.');
        }

        readline.question('Digite o valor em GB para converter para MB: ', (gbInput) => {
            const gb = parseFloat(gbInput);

            if (!isNaN(gb)) {
                const mb = gbToMb(gb);
                console.log(`${gb} GB é igual a ${mb} MB`);
            } else {
                console.log('Valor inválido. Por favor, digite um número válido.');
            }

            readline.close();
        });
    });
}

// Chamada da função principal
main();
