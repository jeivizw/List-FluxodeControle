const menu = 1;

switch(menu) {
    case 1:
        console.log("Exercíicio 1 selecionado. Executando...\n");
        ternario();
        break;

    case 2:
        console.log("Exercíicio 2 selecionado. Executando...\n");
        forin();
        break;

    case 3:
        console.log("Exercíicio 3 selecionado. Executando...\n");
        forof();
        break;

    function ternario() {
        const temp= 25;

        const clima = temp < 0
        ?"Congelante"
        : temp < 15
        ?"Frio"
        : temp < 30
        ?"Agradável"
        :"Quente";
        console.log(clima);
}

function forin(){

    const usuario ={
        nome: "Lucas",
        idade:28,
        cargo: "Desenvolvedor"
    };
    for (let chave in usuario) {
        console.log(`${chave}: ${usuario[chave]}`)
    }
}
function forof(){

    const tecnologias =["Javascript", "React", "Node.js"];

    for (let tech of tecnologias) {
        console.log(`Estudando: ${tech}`);
    }
}
}