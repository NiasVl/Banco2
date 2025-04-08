
const { Titular } = require ('./Titular.js');

class Conta{
    static contas = []
    constructor(saldo, senha, agencia, numero_conta, titular){
        this.saldo = saldo
        this.senha = senha
        this.agencia = agencia
        this.numero_conta = numero_conta
        this.titular = titular
        Conta.contas.push(this)
    }

    static autenticar(agencia, numero, senha){
        let contas = Conta.contas
    
     contas.forEach((conta) =>{
         if(conta.agencia == agencia && conta.senha == senha && conta.numero_conta == numero){
            return {conta}
         }
     })
     return {resp: null}
    }

    visualizarSaldo(resp){
        if(resp){
            return {retorno: this.saldo}
        } else {
            return {retorno: "Acesso negado"}
        }
    }

    saque(valor){

    }

    depositar(valor){

    }

    transferir(contaOrigem, contaDestino ){

    }

    cobrarTaxar(){

    }
 }



function gerarContas(){
    Titular.gerarTitulares()
    let titulares = Titular.titulares
    let c1 = new Conta(500, 1234, 543, 2598, titulares[0])
    let c2 = new Conta(1500, 5678, 789, 78943, titulares[1])
    let c3 = new Conta(2000, 45678, 7894, 235899, titulares[2]) 
}



 module.exports = {Conta, gerarContas}