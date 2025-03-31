import { Titular, buscarTitulares } from "./model/Titular.js";
import { Conta } from "./model/Conta.js";

let titulares = buscarTitulares()

let c1 = new Conta(500, 1234, 543, 2598, titulares[0])
let c2 = new Conta(1500, 5678, 789, 78943, titulares[1])
let c3 = new Conta(2000, 45678, 7894, 235899, titulares[2])

let contas = [c1, c2, c3]

console.log(contas)




