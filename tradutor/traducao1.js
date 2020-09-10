const query = (e) => document.getElementById(e);
var c = 1;
var a = 0;

const msg = [

    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Dormia" },
    { content: "Dormia" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Acordava" },
    { content: "Acordava" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Assista as aulas presencialmente" },
    { content: "Estudava presencialmente em um curso de matemática" },
    { content: "Assistia animes" },
    { content: "Fazia as tarefas na escola" },
    { content: "Voltava para casa" },
    { content: "Voltava para casa" },
    { content: "Voltava para casa" },
    { content: "Voltava para casa" },
    { content: "Estudava um pouco" },
    { content: "Assistia a Televisão" },
    { content: "Realizava o projeto 'Lixo Eletrônico' na escola" },
    { content: "Ajudava a organizar a casa e ajudava na cozinha" },
    { content: "Ajudava a organizar a casa e ajudava na cozinha" },
    { content: "Ajudava a organizar a casa e ajudava na cozinha" },
    { content: "Ajudava a organizar a casa e ajudava na cozinha" },
    { content: "Visitava a minha vó" },
    { content: "Assistia series e filmes até dormir" },
    { content: "Chegava em casa e dormia" },
    { content: "Conversava com a minha família ate dormir" },
    { content: "Conversava com a minha família ate dormir" },
    { content: "Conversava com a minha família ate dormir" },
    { content: "Conversava com a minha família ate dormir" },
    { content: "Conversava com a minha namorada" },

]

query("traducao").addEventListener("click", (e) => {


    while (c <= 49) {

        var top = query(`td${c}`).innerHTML = msg[a].content;

        console.log(top);

        c++;
        a++;

    }

})