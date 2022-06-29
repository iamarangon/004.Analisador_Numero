/*
Primeira Parte:
1. Recebe o número
2. Adiciona em um array
3. Exibe no SELECT
-------------------------
Segunda Parte:
Apresentar Resultados:
1. Comprimento do vetor
2. Maior valor informado
3. Menor valor informado
4. Soma de todos os valores do array
5. Média dos valores do array
*/


// PRIMEIRA PARTE

let res = document.querySelector('div#res')
let num = document.querySelector('input#numtxt')
let lista = document.querySelector('select#seltab')
let valores = []

// função para validar o número no range esperado
function validNumero(n) {
    if(Number(n) >= 1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

// função para verificar se o numero já está na lista
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}

// função para gerar o vetor e imprimir a lista na pagina
function genArray(){
    if (res.innerHTML != "") {
        window.alert('Análise já executada. Por favor, reinicie o processo.')        
    } else {
        if (validNumero(num.value)&& !inLista(num.value,valores)) {
            let item = document.createElement('option')
            item.text = `Adicionado o valor ${num.value}`
            if (valores.length == 0) {
                lista.innerHTML = ""
                valores.push(Number(num.value))
                lista.appendChild(item)
            } else {
                valores.push(Number(num.value))
                console.log(`${valores}`)
                lista.appendChild(item)
            }
        } else {
            window.alert('Valor inválido ou já encontrado na lista.')
        }
    }
    num.value = ""
    num.focus()
}


// Segunda Parte


function verificar() {
    if (valores.length != "") {
        res.innerHTML = ""

        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        
        media = soma/total

        res.innerHTML += `<p>Ao todo, temos ${total} valores cadastrados.</p>`
        res.innerHTML += `<p>O <strong>menor</strong> valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>O <strong>maior</strong> valor adicionado foi ${maior}</p>`
        res.innerHTML += `<p>A <strong>soma</strong> dos valores adicionados foi ${soma}</p>`
        res.innerHTML += `<p>A <strong>média</strong> dos valores adicionados foi ${media}</p>`

    } else{
        window.alert('[ERRO] Por favor, insira valores na tabela para que possa ser analisada.')
    }
}



// Complementos
function reiniciar() {
    valores=[]
    res.innerHTML = ""
    lista.innerHTML = "<option disabled>Aguardando inserção de um número</option>"
    num.value = ""
    num.focus()
}