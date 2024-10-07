const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gosta de carros ?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você é foda!"
            },
            {
                texto: "Não",
                afirmacao: "Suma daqui!"
            }
        ]
    },
    {
        enunciado: "Qual sua prefência em relação a carros ?",
        alternativas: [
            {
                texto: "Carros atuais, prefiro os modernos que são automáticos",
                afirmacao: "Você é nutelinha!"
            },
            {
                texto: "Carros antigos e potentes",
                afirmacao: "Você é raiz!"
            }
        ]
    },
    {
        enunciado: "Se um outro veículo te chama na seta, o que você faz ? ",
        alternativas: [
            {
                texto: "deixo passar para evitar problemas",
                afirmacao: "fraco sem talento!"
            },
            {
                texto: "vou pro racha",
                afirmacao: "gearhead!"
            }
        ]
    },
   
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
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
