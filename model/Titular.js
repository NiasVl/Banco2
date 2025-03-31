 class Titular{
    constructor(nome, cpf, endereco, telefone, email, dataNasc){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
        this.email = email
        this.dataNasc = dataNasc
    }
 }


function buscarTitulares(){
    let titular1 = new Titular('João Quebrado','5663535-63','Rua da Sorte', '11 190', 'quebrado@gmail.com',  '29.08.1963' )
    let titular2 = new Titular('Coelho Sabido','5663585-65','Rua do Azar','11 156','coelho@gmail.com','30.08.1998')
    let titular3 = new Titular('Wagner Curinthia','5663598-65','Rua da Impressora', '11 186','vaiCurinthia@gmail.com','30.08.1998')
    let titulares = [titular1, titular2, titular3]
    return titulares
}

 export {Titular, buscarTitulares}