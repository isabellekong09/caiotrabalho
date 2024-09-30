//
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0
 
//************************************* Funções que serão repetidas ao longo do jogo *************************************
 
  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }
 
 
  function casa(){
    const numeroDaCasa = prompt("Lion quer saber pra onde vocês vão. Escolha um número de 1 a 5 e diga para ela.")
   
    switch(numeroDaCasa){
          case "1":
            alert("Vocês irão voltar pra londres. ")
            alert("Vocês vão viver as suas vidas normalmente.")
          break
 
          case "2":
            alert("Você continuam em Narnia, e vão lutar junto com a gente .")
            alert("Vocês irão as batalhas junto com a gente.")
           break
         
          case"3":
            alert("Vocês irão batalhar ao lado detrools,minoutauros, reis e servos de Narnia, contra magos. ")
            alert("Vocês são mais felizes quando estão em Narnia.")
          break
          case "4":
            alert(" Vocês vão ficar no castelo e descansar")
            alert("Vocês vão ter uma relação melhor com o povo de Narnia.")
          break
         
          default:
            alert(`Vocês vão as batalhas ?`)
            const morarNaPonte = prompt(`1 - Sim / 2 - Não`)
         
            switch(morarNaPonte){
                case "1":
                    alert(" Vocês não tem outra opção, Caspian foi sequestrado, vocês vão ter que salva-lo .")
                    break
                    case "2":
                        casa()
                        break
                        default:
                        alert("Fica clicando nos negócio errado, também não vai mais jogar!")
            }
           
           
 
 
    }
         
 
  }
 
 
 //espada
    function espada(){
       
        let Suavida  = 10
        let Monstrovida = 10
 
        alert(`Sua vida é ${Suavida} Já a do Monstro  é  ${Monstrovida}`)
 
        while (Suavida >=0 && Monstrovida >=0){
            alert(`Sua vida é ${Suavida} e a vida do monstro é${Monstrovida}. Role os dados!`)
            let numeroSorteadoSua= rolarDado()
            alert(`Você tirou ${numeroSorteadoSua}! Agora é a vez do Monstro!`)
            let numeroSorteadomonstro= rolarDado()
            if(numeroSorteadoSua> numeroSorteadomonstro){
                Suavida -= 2
                alert(` Você tirou ${numeroSorteadoSua}. Você esfaqeou o monstro ${Suavida }`)
            }
            else if(numeroSorteadoSua < numeroSorteadomonstro){
                Suavida -= 2
                alert(`O monstro tirou  ${numeroSorteadoSua} e tentou te derrubar ${Monstrovida}`)
            }
            else{
                alert("Vocês estão furiosos então partem um pra cima do outro !")
            }
        }
        if(Suavida<= 0){
            alert("O monstro te derruba.")
        }
        else{
            alert(" Você com raiva parte ele ao meio !")
            alert("Depois tenta ir atraz do troll.")
        }
}
 
//************************************* Função que roda ao iniciar o jogo *************************************
 
function iniciar(){
    const personagem = prompt(`Olá, Seja Bem Vinda! escolhe uma das opções a seguir:
        1 - Sortear Personagem
        2 - Sair do Jogo`)
 
    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`O personagem sorteado foi ${personagemPrincipal}`)
            AventurasNarnia()
        break
            case "2":
        alert(` Você nâo quer sortear, pois vai.`)
        break
        default:
            alert(`Então não vai ter nome`)
            AventurasNarnia()
    }
}
 
 
//************************************* Função para sortear personagem ***********************************, **
function sortearPersonagem() {
const personagens = ["Susana", "Edmundo", " Lúcia ", "Pedro", "Aslam","Eustáquio", "Tumnus", "Ripchip"];
 
const sorteado = Math.floor(Math.random() * personagens.length);
return personagens[sorteado];
}
 
 
 
function AventurasNarnia(){
    alert(`    Enquanto eu, ${personagemPrincipal}, passeio pelas ruas de Narnia vou conversando com as pessoas, conhecendo elas melhor .`)
    const opcao1 = prompt(`Até que minha espada foi roubada por um trool. O que devo fazer?"
        1 - Corro atras do trool
        2 - Vou até o castelo e peço ajuda`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Os dados determinarão seu destino.")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 8) {
                alert ( `Você tentou pedir ajuda, mas ninguem conseguiu te ajudar.`)
                return
            }
                    else if (sorteioDado >=8 && sorteioDado <=14 ){
                       alert ( `Você conseguiu achar onde o trool está escondido.`)
                       alert("Ele vai até lá e tenta recuperar sua espada. Depois de ter avistado o trool, foi lá e deu um susto nele, logo ele saiu correndo junto com a espada. Corri atrás mas ele foi rápido demais ")
                       const caminho= prompt(`Logo você o perde de vista e não sabe se ele entrou na caverna, se ele seguiu reto ou se foi pelo cominho da ponte. Agora você tem que adivinhar qual caminho ele fez:
                       1 - Pela caverna
                       2 - Pela ponte
                       3 - Ir reto `)
                    if(caminho == "1"){
                       alert(`Você vai pela caverna e tenta achar sua espada "`)
                       espada()
                    }
                    else if(caminho == "2"){
                       alert(`Você decidiu ir pela ponte e acabou dando de cara com Aslam`)
                      casa()
                    }
                    else if(caminho == "3"){
                        alert(`Você foi pela frente e acabou caindo num abismo.`)
                        return
                    }
 
            }
            else {
                const operaçãoespada = prompt(`Você acha o trool mas ele não quer devolver a espada ?
                    1- Você decide lutar
                    2 - Pedir ajuda`)
                   
                   switch(operaçãoespada){
                    case "1":
                       
                        break
                    case "2":
                        alert("Você decide lutar")
                        break
                        default:
                        alert("Você pede ajuda ")
                   
 
 
                   }
             }
 
         }
       
    }
   
    else {
        alert(`Você recupeou a sua espada.`)
   
        return
 
    }
}