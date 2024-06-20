const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o seu estilo musical preferido?",
        alternativas: [
            {
                texto: "Rock",
                afirmacao: "Você aprecia a energia e a atitude do rock!"
            },
            {
                texto: "Pop",
                afirmacao: "Você gosta de músicas populares e cativantes!"
            },
            {
                texto: "Clássico",
                afirmacao: "Você aprecia a elegância e a complexidade da música clássica!"
            },
            {
                texto: "Eletrônica",
                afirmacao: "Você se interessa pela batida e pelos sons inovadores da música eletrônica!"
            }
        ]
    },
    {
        enunciado: "O que você mais valoriza em uma música?",
        alternativas: [
            {
                texto: "Letra significativa",
                afirmacao: "Você valoriza músicas com letras que têm um significado profundo."
            },
            {
                texto: "Melodia envolvente",
                afirmacao: "Para você, uma melodia envolvente é essencial em uma boa música."
            },
            {
                texto: "Ritmo contagiante",
                afirmacao: "Você prefere músicas com ritmos que te fazem querer dançar."
            },
            {
                texto: "Inovação sonora",
                afirmacao: "Você aprecia músicas que exploram novos sons e experimentações."
            }
        ]
    },
    {
        enunciado: "Como você descobre novas músicas?",
        alternativas: [
            {
                texto: "Playlist recomendadas por algoritmos de streaming",
                afirmacao: "Você confia nas recomendações automáticas para descobrir novas músicas."
            },
            {
                texto: "Recomendações de amigos",
                afirmacao: "Você prefere descobrir músicas através de recomendações pessoais."
            },
            {
                texto: "Pesquisa ativa em blogs e sites especializados",
                afirmacao: "Você gosta de explorar ativamente novas músicas em fontes especializadas."
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
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil musical...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas finais
}

mostraPergunta();
