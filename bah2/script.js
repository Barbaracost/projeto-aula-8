const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de descobrir uma nova série que todos estão comentando. Qual sua reação?",
        alternativas: [
            {
                texto: "Assiste tudo de uma vez só!",
                afirmacao: "Virou especialista em maratonar séries e agora dá dicas aos amigos."
            },
            {
                texto: "Assiste um episódio por dia, saboreando a história.",
                afirmacao: "Gosta de prolongar a experiência e refletir sobre cada episódio."
            }
        ]
    },
    {
        enunciado: "Um amigo pede uma recomendação de série para assistir no fim de semana. O que você sugere?",
        alternativas: [
            {
                texto: "Uma série de mistério cheia de reviravoltas.",
                afirmacao: "Adora tramas que mexem com a cabeça e deixam todo mundo curioso."
            },
            {
                texto: "Uma comédia leve e divertida.",
                afirmacao: "Acredita que boas risadas tornam qualquer fim de semana melhor."
            }
        ]
    },
    {
        enunciado: "Você descobre que sua série favorita terá uma nova temporada. Como reage?",
        alternativas: [
            {
                texto: "Corre para rever as temporadas anteriores.",
                afirmacao: "Gosta de estar com tudo fresco na memória para aproveitar cada detalhe novo."
            },
            {
                texto: "Evita spoilers a todo custo e finge que o mundo externo não existe.",
                afirmacao: "Se transforma em ninja digital só para manter a experiência intacta."
            }
        ]
    },
    {
        enunciado: "Qual personagem de série você mais se identifica?",
        alternativas: [
            {
                texto: "O estrategista quieto que sempre surpreende.",
                afirmacao: "Tem um lado observador e pensa dois passos à frente."
            },
            {
                texto: "A alma do grupo, sempre trazendo alegria.",
                afirmacao: "Conquista todos com carisma e energia contagiante."
            }
        ]
    },
    {
        enunciado: "Você vai a uma convenção de séries e pode conhecer um(a) ator/atriz que admira. Qual é sua reação?",
        alternativas: [
            {
                texto: "Fica nervoso(a) mas pede uma selfie e autógrafo.",
                afirmacao: "Mesmo nervoso(a), viveu um momento inesquecível e com provas fotográficas!"
            },
            {
                texto: "Começa a conversar como se fossem velhos amigos.",
                afirmacao: "Tão apaixonado(a) por séries que mal percebe que está falando com uma celebridade."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada como fã de séries...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
