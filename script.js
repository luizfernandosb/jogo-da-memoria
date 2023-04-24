const baralho = [
    {
        nome: "arc",
        img: "./images/arc.png",
    },
    {
        nome: "medusa",
        img: "./images/medusa.png",
    },
    {
        nome: "murte",
        img: "./images/muerta.png",
    },
    {
        nome: "mirana",
        img: "./images/mirana.png",
    },
    {
        nome: "riki",
        img: "./images/riki.png",
    },
    {
        nome: "crystal",
        img: "./images/crystal.png",
    },
    {
        nome: "luna",
        img: "./images/luna.png",
    },
    {
        nome: "invoker",
        img: "./images/invoker.png",
    },
    {
        nome: "arc",
        img: "./images/arc.png",
    },
    {
        nome: "medusa",
        img: "./images/medusa.png",
    },
    {
        nome: "mirana",
        img: "./images/mirana.png",
    },
    {
        nome: "riki",
        img: "./images/riki.png",
    },
    {
        nome: "crystal",
        img: "./images/crystal.png",
    },
    {
        nome: "luna",
        img: "./images/luna.png",
    },
    {
        nome: "invoker",
        img: "./images/invoker.png",
    },
    {
        nome: "murte",
        img: "./images/muerta.png",
    }
]

baralho.sort(() => {
    return 0.5 - Math.random();
})

const grade = document.querySelector("#grade")

const pontuacao = document.querySelector("#pontos")
let pontos;

let escolhidas = [];


function criarGrade() {
    pontos = 0;
    pontuacao.innerText = pontos;
    for (let i = 0; i < baralho.length; i++) {
        let carta = document.createElement("img")
        carta.id = i;
        carta.hero = baralho[i].nome
        carta.src = "./images/dota.png"
        carta.addEventListener('click', escolherCarta)
        grade.appendChild(carta)
        
    }
}

function escolherCarta() {
    let carta = this;
    carta.src = baralho[carta.id].img
    escolhidas.push(carta);

   

    setTimeout(() => {

        
        

        if (escolhidas.length == 2) {
            let carta1 = escolhidas[0]
            let carta2 = escolhidas[1]
            
            if (carta1.hero === carta2.hero) {
                carta1.src = "./images/check.png"
                carta2.src = "./images/check.png"
                carta1.style.borde = "5px solid green"

                carta1.removeEventListener("click", escolherCarta)
                carta2.removeEventListener("click", escolherCarta)
                carta1.style.cursor = 'auto';
                carta2.style.cursor = 'auto';
                


                pontos++
                pontuacao.innerText = pontos

            } else {
                carta1.src = "./images/dota.png"
                carta2.src = "./images/dota.png"
            } if (pontos === baralho.length / 2) {
                alert('Parabéns! Você ganhou!!!')
                grade.innerHTML = ''
                criarGrade()
            }



            escolhidas = []
        }
    }, 1000)


}


function resetar() {
 location.reload()
}
