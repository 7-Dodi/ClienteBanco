const button = document.querySelector("#confirm"); //Criando as constantes do programa
const apagar = document.querySelector("#apagar");
const resultado = document.querySelector("table");

class Transacao{ //Criando o class
    constructor(nome, saldo, descr, valor){ //Determinando a função constructor
        this.nome = nome;
        this.saldo = saldo;
        this.descr = descr;
        this.valor = valor;
    }
    
    falar(){
        return `Ola ${this.nome}... Seu saldo atual é de: R$ ${this.saldo}`
    }

    valorCompra(){
        return `O valor da transição é: ${this.valor}`
    }

    descricao(){
        return `Descrição da transação: ${this.descr}`;
    }

    saldoFinal(){
        return (this.saldo*1)-(this.valor*1);
    }
}

button.addEventListener("click", ()=>{ //Evento do click do button
    const nome = document.querySelector("#nome").value;
    const saldo = document.querySelector("#saldo").value;
    const descr = document.querySelector("#descricao").value;
    const valor = document.querySelector("#valor").value;

    const elemento =new Transacao(nome, saldo, descr, valor); //Chamando a função constructor

    //Declarando as constantes criadoras da tabela
    const tabela= document.createElement("tr");
    const linha= document.createElement("td");
    const linhaDescr= document.createElement("td");
    const linhaValor= document.createElement("td");
    const linhaSaldo= document.createElement("td");
    
    //Informando os resultados de interface
    linha.textContent= elemento.falar();
    linhaDescr.textContent= elemento.descricao();
    linhaValor.textContent= elemento.valorCompra();
    if(elemento.saldoFinal()<0){
        linhaSaldo.style.color = "red";
        linhaSaldo.textContent= (elemento.saldoFinal()*-1);
    }
    else{
        linhaSaldo.style.color = "green";
        linhaSaldo.textContent= elemento.saldoFinal();
    }

    tabela.appendChild(linha);
    tabela.appendChild(linhaDescr);
    tabela.appendChild(linhaValor);
    tabela.appendChild(linhaSaldo);
    resultado.appendChild(tabela);
});

apagar.addEventListener("click", ()=>{ //Evento de clique para limpar os campos da interface
    const nome = document.querySelector("#nome").value= "";
    const saldo = document.querySelector("#saldo").value= "";
    const descr = document.querySelector("#descricao").value= "";
    const valor = document.querySelector("#valor").value= "";
    resultado.textContent = "";
});
