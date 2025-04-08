
const { Conta, gerarContas } = require ("./model/Conta.js");
const express = require ('express')

const app = express()
gerarContas()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


app.get('/', function (req, res){
     res.json(Conta.contas)
})

app.get('/consultar_saldo', function (req, res){
      //obter da requisição os dados
     let agencia = parseInt(req.body.agencia)
     let numero = parseInt(req.body.numero)
     let senha = parseInt(req.body.senha)

     let conta = Conta.autenticar(agencia, numero, senha)
     
     let resp = conta != null ? conta.consultarSaldo(conta) : "Acesso negado"
     
    res.json(resp)
 })

const porta = 3000
app.listen(porta, ()=>{
    console.log(`Operando na porta ${porta}`)
})


