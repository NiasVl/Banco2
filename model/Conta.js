 class Conta{
    constructor(saldo, senha, agencia, numero_conta, titular){
        this.saldo = saldo
        this.senha = senha
        this.agencia = agencia
        this.numero_conta = numero_conta
        this.titular = titular
    }

    autenticar(agencia, numero_conta, senha){

    }

    visualizarSaldo(){

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

 export {Conta}