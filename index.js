import { Titular, buscarTitulares } from "./model/Titular.js";
import { Conta, pegarContas } from "./model/Conta.js";
import express from 'express'

const app = express()

app.get('/', function (req, res){
    let titulares = buscarTitulares()
    let contas = pegarContas(titulares)
    res.json(contas)
})

app.get('/autenticar/:agencia/:numero/:senha', function (req, res){
    // obter da requisição os dados
    let agencia = parseInt(req.params.agencia)
    let numero = parseInt(req.params.numero)
    let senha = parseInt(req.params.senha)

    let titulares = buscarTitulares()
    let contas = pegarContas(titulares)
    
    contas.forEach((conta) =>{
        if(conta.agencia == agencia && conta.senha == senha && conta.numero_conta == numero){
            res.json({resp:true})
        }
    })
    res.json({resp:false})
})

app.listen(3000)


