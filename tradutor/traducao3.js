const query = (e) => document.getElementById(e);
var c = 1;
var a = 0;

const msg = [

    { content: "Dormirei" },
    { content: "Dormirei" },
    { content: "Dormirei" },
    { content: "Dormirei" },
    { content: "Dormirei" },
    { content: "Dormirei" },
    { content: "Dormirei" },
    { content: "Dormirei" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Dormirei" },
    { content: "Acordarei e decidirei o que fazer" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Limparei a casa junco com a minha mãe" },
    { content: "Irei a casa da minha namora para almoçar com a sua família" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Voltarei a ter aulas presenciais" },
    { content: "Continuarei tendo aulas do curso de matematica ate o final do ano" },
    { content: "Passarei a tarde com a minha namorada e decidirei se ela vai dormir em minha casa ou vice-versa" },
    { content: "Passarei minhas tardes fazendo as tarefas, os trabalhos e o meu TCC" },
    { content: "Passarei minhas tardes fazendo as tarefas, os trabalhos e o meu TCC" },
    { content: "Passarei minhas tardes fazendo as tarefas, os trabalhos e o meu TCC" },
    { content: "Passarei minhas tardes fazendo as tarefas, os trabalhos e o meu TCC" },
    { content: "Passarei minhas tardes fazendo as tarefas, os trabalhos e o meu TCC" },
    { content: "Estudarei programaçao e arrumarei uma vaga de emprego remota" },
    { content: "Assistirei filmes com a minha namorada e com a minha cunhada" },
    { content: "Volatarei a fazer parte do projeto 'Lixo eletônico' presenialmente" },
    { content: "Sairei com alguns amigos e visitarei pessoas que nao pude ver no isolamento" },
    { content: "Sairei com alguns amigos e visitarei pessoas que nao pude ver no isolamento" },
    { content: "Sairei com alguns amigos e visitarei pessoas que nao pude ver no isolamento" },
    { content: "Sairei com alguns amigos e visitarei pessoas que nao pude ver no isolamento" },
    { content: "Aproveitarei a noite vendo filmes com a minha família" },
    { content: "Me preparerei para dormir para enfrentar as aulas no dia seguinte" },
    { content: "Me preparerei para dormir para enfrentar as aulas no dia seguinte" },
    { content: "Me preparerei para dormir para enfrentar as aulas no dia seguinte" },
    { content: "Me preparerei para dormir para enfrentar as aulas no dia seguinte" },
    { content: "Me preparerei para dormir para enfrentar as aulas no dia seguinte" },
    { content: "Me preparerei para dormir para enfrentar as aulas no dia seguinte" },
    { content: "Dormirei um pouco mais tarde e passarei a madrugada programando e estudando" }

]

query("traducao").addEventListener("click", (e) => {


    while (c <= 49) {

        var top = query(`td${c}`).innerHTML = msg[a].content;

        console.log(top);

        c++;
        a++;

    }

})