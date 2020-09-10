const query = (e) => document.getElementById(e);
var c = 1;
var a = 0;

const msg = [

    { content: "Durmo" },
    { content: "Durmo" },
    { content: "Durmo" },
    { content: "Durmo" },
    { content: "Durmo" },
    { content: "Durmo" },
    { content: "Durmo" },
    { content: "Durmo" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Durmo" },
    { content: "Vou para a casa da minha namorada" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Acordo" },
    { content: "Converso com a sua família e me divirto com ela" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Assisto as aulas online" },
    { content: "Estudo virtualmente em un curso de matemática" },
    { content: "Volto para a minha casa" },
    { content: "Faço minhas tarefas e meus trabalhos" },
    { content: "Faço minhas tarefas e meus trabalhos" },
    { content: "Faço minhas tarefas e meus trabalhos" },
    { content: "Faço minhas tarefas e meus trabalhos" },
    { content: "Faço minhas tarefas e meus trabalhos" },
    { content: "Brinco com meus irmaos" },
    { content: "Assisto meus Animes" },
    { content: "Faço minhas tarefas de casa e preparo a janta" },
    { content: "Faço minhas tarefas de casa e preparo a janta" },
    { content: "Faço minhas tarefas de casa e preparo a janta" },
    { content: "Faço minhas tarefas de casa e preparo a janta" },
    { content: "Faço minhas tarefas de casa e preparo a janta" },
    { content: "Estudo programação" },
    { content: "Converso com a minha família" },
    { content: "Assisto vídeos na internet e vou dormir" },
    { content: "Assisto vídeos na internet e vou dormir" },
    { content: "Assisto vídeos na internet e vou dormir" },
    { content: "Assisto vídeos na internet e vou dormir" },
    { content: "Assisto vídeos na internet e vou dormir" },
    { content: "Converso com a minha namorada sobre o dia seguinte " },

]

query("traducao").addEventListener("click", (e) => {

    while (c <= 49) {

        var top = query(`td${c}`).innerHTML = msg[a].content;

        console.log(top);

        c++;
        a++;

    }

})